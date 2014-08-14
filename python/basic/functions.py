def sum(a, b):
	''' 
	Lorem ipsum dolor sit amet, consectetur adipisicing elit...
	'''

	return a + b

def sum2(a, b=3):
	return a + b

print(sum(1, 1))
print(sum(a=3, b=3))
print(sum(b=1, a=2))
print(sum2(5))

def main():
	num1 = int(input('Type the first number: '))
	num2 = int(input('Type the second number: '))
	print(sum(num1,num2))