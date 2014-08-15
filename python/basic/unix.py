import datetime
import time

# print(time.time())

v = time.time()

print(datetime.datetime.fromtimestamp(v).strftime('%Y-%m-%d %H:%M:%S'))

print(datetime.datetime.fromtimestamp(v).strftime('%d/%m/%Y %H:%M:%S'))

print(datetime.datetime.fromtimestamp(v).strftime('It\'s %A, %B, %d %Y'))