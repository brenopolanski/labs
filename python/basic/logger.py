import logging

# 1 debug - informacao detalhada

# 2 info - confirmacao de que as coisas sairam como planejado

# 3 warning - alguma coisa nao esperada aconteceu

# 4 error - alguma funcao falhou

# 5 critical - alguma falha na aplicacao aconteceu e fez a aplicacao cair

logging.basicConfig(filename='log.log', level=logging.DEBUG)

def main():
	try:
		logging.debug('eu entrei em main')
		# matematica_falha = 1 / 0
		if 1 > 2:
			logging.debug('ele entrou no primeiro if')
		else:
			logging.debug('ele entrou no else')
			print('world')

	except Exception, e:
		logging.critical(str(e))

main()