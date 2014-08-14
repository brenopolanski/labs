# try:
# 	print(2 + 'casa')
# 	print('testando')
# except:
# 	print('oops esta concatenacao eh invalida')

while True:
	try:
		x = int(input('Digite um numero '))
		break
	except NameError as error:
		print(error)