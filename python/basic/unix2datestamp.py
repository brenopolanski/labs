from datetime import datetime
from time import mktime

date = 'Today is Monday, August 15th 2014'

unixTime = datetime.strptime(date, 'Today is %A, %B %dth %Y')

converted = mktime(unixTime.timetuple())

print(converted)