import matplotlib.pyplot as plt
x = [0, 1]
y = [1, 1]
plt.plot(x, y)
plt.plot(y, x)
plt.xlim(0, 1.5)
plt.ylim(0, 1.5)
plt.show()