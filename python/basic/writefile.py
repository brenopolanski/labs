# f = open('out.txt', 'w')

# f.write('Hello World\n')
# f.write('Breno Polanski')

# f.close()

with open('out.txt', 'w') as out_file:
	out_file.writelines(['abc', 'cde'])