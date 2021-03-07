
# 爬取百度贴吧数据
import urllib.parse

from lxml import etree

from PocketLifeSpider.util import LoggerUtils, CommonUtils
from PocketLifeSpider.util.CommonUtils import get_driver, get_date_str_from_date_str, get_today, scroll_foot

# 获取贴吧主题信息
def get_tieba_topic(html):
    # 主题相关信息
    top_html_xpath = html.xpath('//*[@id="pagelet_frs-header/pagelet/head"]/div/div[3]/div[2]/div[2]')[0]
    # 主题图片地址
    topic_img_url = top_html_xpath.xpath('./div[1]/a/img/@src')[0]
    logger.info('主题图片地址: %s' % topic_img_url)
    # 主题名称
    topic_name = top_html_xpath.xpath('./div[2]/a/text()')[0].replace(' ', '').replace('\n', '')
    logger.info('主题名称: %s' % topic_name)
    # 主题关注人数
    topic_focus_num = top_html_xpath.xpath('./div[2]/div[2]/div[1]/span/span[2]/text()')[0]
    logger.info('主题关注人数: %s' % topic_focus_num)
    # 主题帖子数量
    topic_post_num = top_html_xpath.xpath('./div[2]/div[2]/div[1]/span/span[4]/text()')[0]
    logger.info('主题帖子数量: %s' % topic_post_num)
    # 帖子类别地址
    topic_type_url = TOP_PATH + top_html_xpath.xpath('./div[3]/ul/li[3]/a/@href')[0]
    logger.info('帖子类别地址: %s' % topic_type_url)
    # 帖子类别
    topic_type = top_html_xpath.xpath('./div[3]/ul/li[3]/a/text()')[0]
    logger.info('帖子类别: %s' % topic_type)

# 获取贴吧信息
def get_tieba_info(page_index, page_size = 50):
    current_url = BASE_URL + '&pn=' + (str)((page_index - 1) * page_size)
    driver.get(current_url)
    logger.info('Current tieba name is:%s, page is: %s, page size is: %s, url: %s' % (TIEBA_NAME, page_index+1, page_size, current_url))
    orign_html = driver.page_source
    html = etree.HTML(orign_html)
    # 获取贴吧主题信息
    if (page_index == 0):
        get_tieba_topic(html)
        # 获取帖子信息
        logger.info('获取帖子信息')

    for li in html.xpath('//*[@id="thread_list"]/li'):
        today_str = get_today()
        # 回复条数
        reply_num_xpath = li.xpath('./div/div[1]/span/text()')
        if (len(reply_num_xpath) == 0): continue
        reply_num = reply_num_xpath[0]
        # 帖子地址
        post_url = TOP_PATH + li.xpath('./div/div[2]/div[1]/div[1]/a/@href')[0]
        # 帖子主题
        # //*[@id="thread_list"]/li[1]/div/div[2]/div[1]/div[1]/a
        post_title = li.xpath('./div/div[2]/div[1]/div[1]/a/@title')[0]
        # 帖子作者
        # //*[@id="thread_list"]/li[1]/div/div[2]/div[1]/div[2]/span[1]
        post_author = li.xpath('./div/div[2]/div[1]/div[2]/span[1]/@title')[0].split(': ')[1]
        # 作者id
        post_author_id = li.xpath('./div/div[2]/div[1]/div[2]/span[1]/@data-field')[0].split(':')[1].split('}')[0]
        # 作者首页地址
        # //*[@id="thread_list"]/li[1]/div/div[2]/div[1]/div[2]/span[1]/span[1]/a
        post_author_home_url = TOP_PATH + li.xpath('./div/div[2]/div[1]/div[2]/span[1]/span[1]/a/@href')[0]
        # 帖子创建时间
        # //*[@id="thread_list"]/li[1]/div/div[2]/div[1]/div[2]/span[2]
        post_create_time = li.xpath('./div/div[2]/div[1]/div[2]/span[2]/text()')[0].strip()
        if '-' not in post_create_time:
            post_create_time = today_str + ' ' + post_create_time
        # 贴子内容
        # //*[@id="thread_list"]/li[1]/div/div[2]/div[2]/div[1]/div[1]
        post_content = li.xpath('.div/div[2]/div[2]/div[1]/div[1]/text()')
        # 帖子最近回复人
        # //*[@id="thread_list"]/li[1]/div/div[2]/div[2]/div[2]/span[1]
        post_latest_reply_user = li.xpath('./div/div[2]/div[2]/div[2]/span/@title')[0].split('最后回复人: ')[1]
        # 帖子最近回复人首页地址
        # //*[@id="thread_list"]/li[1]/div/div[2]/div[2]/div[2]/span[1]/a
        post_latest_reply_user_home_url = TOP_PATH + li.xpath('./div/div[2]/div[2]/div[2]/span[1]/a/@href')[0]
        # 帖子最后回复时间
        # //*[@id="thread_list"]/li[1]/div/div[2]/div[2]/div[2]/span[2]
        post_last_reply_time = (str)(li.xpath('./div/div[2]/div[2]/div[2]/span[2]/text()')[0].strip())
        if '-' not in post_last_reply_time:
            post_last_reply_time = today_str + ' ' + post_last_reply_time
        logger.info(
            '%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s' %
            (reply_num,
             post_url,
             post_title,
             post_author,
             post_author_id,
             post_author_home_url,
             post_create_time,
             post_content,
             post_latest_reply_user,
             post_latest_reply_user_home_url,
             post_last_reply_time
             )
        )


if __name__ == '__main__':

    logger = LoggerUtils.get_logger('tieba', )

    TIEBA_NAME = input('请输入贴吧名称：')
    start_page = (int)(input('请输入获取帖子起始页数：'))
    end_page = (int)((input('请输入获取帖子结束页数：')))

    driver = get_driver(0)
    TOP_PATH = 'https://tieba.baidu.com'
    BASE_URL = TOP_PATH + '/f?ie=utf-8&kw=' + urllib.parse.quote(TIEBA_NAME)
    logger.info('贴吧名称：%s' % TIEBA_NAME)
    logger.info('地址：%s' % BASE_URL)

    # 获取贴吧主题相关信息
    logger.info('获取主题信息: %s' % BASE_URL)
    for page_index in range(start_page-1, end_page):
        get_tieba_info(page_index)