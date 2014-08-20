epic_dict = {'Jack': 5, 'Bill': 14, 'Katy': 3, 'Jess': 33, 'Alex': 4}

# ordenando pela chave
# sorted_dict = sorted(epic_dict.items(), key = lambda t: t[0])

# ordenando pelos valores
sorted_dict = sorted(epic_dict.items(), key = lambda t: t[1])

from collections import OrderedDict

x = (OrderedDict(sorted_dict))

for elemento in x:
	print(elemento)