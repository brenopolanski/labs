# f = open('simple.txt', 'r')
# print(f.read())
# lines = f.readlines()
# for line in f:
# 	print(line)

# f.close()

with open('simple.txt', 'r') as in_file:
	txt = in_file.read()

print(txt)