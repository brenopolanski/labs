import os
import glob
import shutil

current_directory = os.path.dirname(os.path.abspath(__file__))

# deletar arquivos
# os.chdir('fakefolder')

# # print(os.getcwd())

# files = glob.glob('*.txt')

# for file in files:
# 	print(file)
# 	os.unlink(file)

# deletar pastas

shutil.rmtree(current_directory + '/fakefolder/')