import sys
import os
import requests
import time
import threading
import queue

curPath = os.path.abspath(os.path.dirname(__file__))
rootPath = os.path.split(curPath)[0]
sys.path.append(rootPath)

from PocketLifeSpider.util.CommonUtils import *

if __name__ == '__main__':
    download_film_image()
