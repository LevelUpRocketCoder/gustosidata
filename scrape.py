import urllib.request
import re
import os

req = urllib.request.Request('https://www.industriasgustossi.com.bo/', headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
    urls = re.findall(r'https://www\.industriasgustossi\.com\.bo/[^\s\"\'\(\)<>]+?\.(?:jpg|png|webp|jpeg)', html)
    with open('urls.txt', 'w', encoding='utf-8') as f:
        for u in set(urls):
            f.write(u + '\n')
except Exception as e:
    print(e)
