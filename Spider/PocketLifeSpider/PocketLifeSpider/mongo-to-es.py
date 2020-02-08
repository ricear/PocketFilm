import sys
import os

curPath = os.path.abspath(os.path.dirname(__file__))
rootPath = os.path.split(curPath)[0]
sys.path.append(rootPath)

from PocketLifeSpider.util.CommonUtils import *

if __name__ == "__main__":
    mongo_to_es(minute_delta=-1, format=DATE_FORMAT_YEAR_MONTH_DAY_HOUR)
    # mongo_to_es(day_delta=-1, format=DATE_FORMAT_YEAR_MONTH_DAY)