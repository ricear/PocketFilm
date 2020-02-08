import sys
import os

curPath = os.path.abspath(os.path.dirname(__file__))
rootPath = os.path.split(curPath)[0]
sys.path.append(rootPath)

from PocketLifeSpider.util.CommonUtils import *

if __name__ == "__main__":
    print(get_time_by_delta(minute_delta=-30, format=DATE_FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE))
