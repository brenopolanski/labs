import reloadExample
import imp

def main():
	try:
		imp.reload(reloadExample)
		reloadExample.skills()

	except Exception as e:
		print(str(e))

while True:
	main()
	input('enter to continue')