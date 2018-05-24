#!/usr/bin/python
# -*- coding: utf-8 -*-
import time
import requests
from bs4 import BeautifulSoup
from elasticsearch import Elasticsearch

"""
Verify Documents in Elasticsearch:

> curl http://youruser:yourpassword@localhost:9200/_cat/indices/blog-nasa?v

See documents:

> curl http://youruser:yourpassword@localhost:9200/blog-nasa/_search

"""

es = Elasticsearch(['http://localhost:9200'], http_auth='elastic:elastic')


def urlparser(title, url):
    post = title
    page = requests.get(post).content
    soup = BeautifulSoup(page, 'html.parser')

    # scrape title

    title_name = soup.title.string

    # scrape author

    author_name = soup.find('span', class_='author').find('a',
            class_='url').string

    # scrape date post

    date_post = soup.find('span', class_='posted-on').find('time',
            class_='published').string

    # scrape tags

    tag_names = []
    desc = soup.findAll(attrs={'rel': 'tag'})
    for x in xrange(len(desc)):
        tag_names.append(desc[x - 1].string.encode('utf-8'))

    # payload for elasticsearch

    doc = {
        'date': date_post,
        'title': title_name,
        'author': author_name,
        'tags': tag_names,
        'url': url,
    }

    # ingest payload into elasticsearch

    res = es.index(index='blog-nasa', doc_type='docs', body=doc)
    time.sleep(0.5)

site_url = 'https://blogs.nasa.gov/'
page = requests.get(site_url)
site_index = BeautifulSoup(page.content, 'html.parser')
urls = [element.a['href'] for element in site_index.findAll('h2',
        class_='entry-title')]

for x in urls:
    urlparser(x, x)
