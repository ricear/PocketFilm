import sys
import os
import  urllib.parse

import chardet

curPath = os.path.abspath(os.path.dirname(__file__))
rootPath = os.path.split(curPath)[0]
sys.path.append(rootPath)

from PocketLifeSpider.util.CommonUtils import *

if __name__ == "__main__":
    str = get_date_str_from_date_str('2020-02-16', source_format=DATE_FORMAT_YEAR_MONTH_DAY, dest_format=DATE_FORMAT_YEARMONTHDAY)
    print(str)