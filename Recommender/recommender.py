import difflib
import sys

from util.CommonUtils import *

if __name__ == '__main__':
    # if (len(sys.argv) != 3):
    #     print('参数不正确')
    #     exit(0)
    # movie_type = sys.argv[1]
    # type = sys.argv[2]
    movie_type = 'movie'
    type = 'latest'
    get_recommendations(movie_type, type)