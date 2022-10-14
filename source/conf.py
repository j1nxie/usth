# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'USNE'
copyright = '2022, j1nxie'
author = 'j1nxie'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'sphinx.ext.mathjax',
]

templates_path = ['_templates']
exclude_patterns = []

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'alabaster'
html_static_path = ['_static']
html_theme_options = {
    'description': 'An attempt to simplify the lectures taught at USTH.',
    'font_size': '13pt',
    'font_family': '"minion pro", georgia, serif',
    'code_font_size': '85%',
}

html_title = 'USTH Study Notes Emporium'

html_last_updated_fmt = '%b %d, %Y'

mathjax_path = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg-full.js'

mathjax3_config = {
    'tex': {
        'packages': ['base', 'ams'],
    },
    'loader': {
        'load': ['output/svg', '[tex]/ams']
    }
}

numfig = True

numfig_format = {
    'figure': 'Fig. %s',
}
