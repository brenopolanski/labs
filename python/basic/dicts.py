d = {'name': 'Breno Polanski', 'age': '25 old year'}

print(d)
print(d['name'])
print(d.keys())

program = {}

program['language'] = 'Python'
program['loc'] = 8
program['open'] = True
program['repository'] = {'source': 'github', 'owner': 'breno'}

print(program)
print(program.values())
print(program['repository']['source'])

print(len(d))
print(dir(d))