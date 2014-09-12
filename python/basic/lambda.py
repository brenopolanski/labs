lamb = lambda x: x ** 3

print(lamb(3))

def writer():
	title = 'Sir'
	name = (lambda x: title + ' ' + x)
	return name

w = writer()

print(w('Breno Polanski'))

L = [lambda x: x ** 2, lambda x: x ** 3, lambda x: x**4]
for f in L:
	print(f(3))