#! /usr/bin/env node

const { mathjax } = require('mathjax-full/js/mathjax.js');
const { TeX } = require('mathjax-full/js/input/tex.js');
const { SVG } = require('mathjax-full/js/output/svg.js');
const { liteAdaptor } = require('mathjax-full/js/adaptors/liteAdaptor.js');

const { RegisterHTMLHandler } = require('mathjax-full/js/handlers/html.js');
const { AssistiveMmlHandler } = require('mathjax-full/js/a11y/assistive-mml.js');

const { AllPackages } = require('mathjax-full/js/input/tex/AllPackages.js');

const glob = require('glob');
const fs = require('fs');

const { JSDOM } = require("jsdom");

require('mathjax-full/js/util/entities/all.js');

/**
 * Remove the <script> tag that loads MathJax.js from the CDN.
 * @param {string} html
 */
function removeMathJaxScript(html) {
    const dom = new JSDOM(html);
    for (const script of dom.window.document.getElementsByTagName('script')) {
        const src = script.getAttribute('src');
        if (src && src.includes('tex-svg-full.js')) {
            script.remove();
            break;
        }
    }
    return dom.serialize();
}

const argv = require('yargs')
  .demand(1).strict()
  .usage('$0 [options] ./myfolder')
  .options({
    packages: {
      default: AllPackages.sort().join(', '),
      describe: 'the packages to use, e.g. "base, ams"'
    },
    fontCache: {
      default: 'local',
      describe: 'cache type: local, global, none'
    },
    ignore: {
      default: [],
      describe: 'files to ignore when processing',
      type: 'array'
    }
  })
  .argv;

const adaptor = liteAdaptor();
AssistiveMmlHandler(RegisterHTMLHandler(adaptor));
const tex = new TeX({
  packages: argv.packages.split(/\s*,\s*/),
});

let path = argv._[0] + '/**/*.html';
path = path.replace(/\\/g,"/");

const files = glob.sync(path).filter(file => !argv.ignore.includes(file.substring(argv._[0].length + 1, file.length)));

files.forEach(file => {
  const svg = new SVG({ fontCache: argv.fontCache });

  const htmlfile = fs.readFileSync(file, 'utf8');
  let html = mathjax.document(htmlfile, { InputJax: tex, OutputJax: svg });
  html.render();

  if (Array.from(html.math).length == 0) {
    adaptor.remove(html.outputJax.svgStyles);
    const cache = adaptor.elementById(adaptor.body(html.document), 'MJX-SVG-global-cache');
    if (cache) adaptor.remove(cache);
  }

  let document = removeMathJaxScript(adaptor.outerHTML(adaptor.root(html.document)));

  fs.writeFileSync(file, adaptor.doctype(html.document) + document, 'utf8');
});
