import sys
import os
import  urllib.parse
from shutil import copyfile

import chardet
import exifread as exifread
from PIL.ExifTags import TAGS

curPath = os.path.abspath(os.path.dirname(__file__))
rootPath = os.path.split(curPath)[0]
sys.path.append(rootPath)

from PocketLifeSpider.util.CommonUtils import *

if __name__ == "__main__":
    modify_album_cover()