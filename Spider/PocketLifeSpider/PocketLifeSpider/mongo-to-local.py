import sys
import os
import datetime

curPath = os.path.abspath(os.path.dirname(__file__))
rootPath = os.path.split(curPath)[0]
sys.path.append(rootPath)

from PocketLifeSpider.util.CommonUtils import *

if __name__ == "__main__":
    if (len(sys.argv) == 1):
        mongo_to_local(day_delta=-1, format=DATE_FORMAT_YEAR_MONTH_DAY)
    else:
        mongo_to_local(day_delta=-1, format=DATE_FORMAT_YEAR_MONTH_DAY, target_date=sys.argv[1])