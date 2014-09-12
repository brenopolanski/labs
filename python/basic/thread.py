import thread
import time
import random

def run_often(thread_nome, sleep_time):
	while True:
		time.sleep(sleep_time)
		print '%s' % thread_nome

def run_less_often(thread_nome, sleep_time):
	while True:
		time.sleep(sleep_time)
		print '%s' % thread_nome

def run_randomly(thread_nome, sleep_time):
	while True:
		time.sleep(sleep_time)
		print '%s' % thread_nome

thread.start_new_thread(run_often, ('run often', 2))
thread.start_new_thread(run_less_often, ('run less often', 5))
thread.start_new_thread(run_randomly, ('run randomly', random.choice(range(1,6))))

print input()