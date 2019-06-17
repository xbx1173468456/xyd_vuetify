import { Article, ArticlePostData } from '@/models/article.model'
import { HttpConfigService, httpConfigService } from './http-config.service'

export class ArticleService {
  baseUrl: string = ''
  httpConfigService: HttpConfigService = httpConfigService

  getArticleList(params: { schoolId: string; current: number; size: number }) {
    return this.httpConfigService.httpSercvice.post(
      this.baseUrl + '/w/article/list',
      null,
      {
        data: params
      }
    )
  }

  getArticle(id: string) {
    return this.httpConfigService.httpSercvice.post<Article>(
      this.baseUrl + '/w/article/details',
      null,
      {
        data: {
          id
        }
      }
    )
  }

  addArticle(article: ArticlePostData) {
    return this.httpConfigService.httpSercvice.post(
      this.baseUrl + '/w/article/add',
      null,
      {
        data: article
      }
    )
  }

  setTop(id: string) {
    return this.httpConfigService.httpSercvice.post(
      this.baseUrl + '/w/article/priority',
      null,
      {
        data: { id }
      }
    )
  }
}

export const articles = [
  {
    id: 1,
    context: `<p>文章内容 aaa 美国彭博社22日消息称，美国政府正考虑将5家中国监控设备企业列入与华为类似的“黑名单”，禁止他们获得美国零件与软件，其中包括海康威视与浙江大华。此前，《纽约时报》曾报道说海康威视会被列入黑名单，后者今早已公开做出回应。</p>

    <p>彭博社的消息源为“熟悉相关情况人士”，这些所谓的人士说，特朗普政府在考虑给5家中国监控设备企业“断供”，其中包括海康威视和浙江大华技术股份有限公司，另外3家企业是谁并未指明。该人士称，美国政府正在考虑是否禁止这些中国企业得到美国零件与软件。</p>
    
    <p>今天早些时候，《纽约时报》报道称，美政府将考虑将海康威视列入黑名单，限制其购买美国技术。海康威视22日上午向《环球时报》进行回复称，“我们已关注到《纽约时报》今早的报道，期望公司得到公平、公正的对待。”针对外媒曾指责海康威视设备用于新疆对穆斯林进行大规模监视的报道，海康威视回应称，海康威视是一家产品供应商，未在新疆做过任何不恰当的行为，公司过去不曾、现在和将来也不会以侵犯人权为条件的业务作为公司业务进行经营。</p>`,
    description:
      '文章描述 aaa 文章描述 aaa 文章描述 aaa 文章描述 aaa 文章描述 aaa',
    title: '文章标题 aaa'
  },
  {
    id: 2,
    context: `文章内容 bbb 海康威视全称杭州海康威视数字技术股份有限公司，其2018年年报显示，海康威视是以视频为核心的智能物联网解决方案和大数据服务提供商，

    根据IHS报告，海康威视连续7年蝉联视频监控行业全球第一，拥有全球视频监控市场份额的22.6%。`,
    description:
      '文章描述 bbb 文章描述 bbb 文章描述 bbb 文章描述 bbb 文章描述 bbb',
    title: '文章标题 bbb'
  },
  {
    id: 3,
    context: `文章内容 ccc 2018年8月13日，腾讯WeGame平台公告称《怪物猎人：世界》由于部分内容未符合政策法规而被有关机构取消运营资质，应主管部门要求下架整改，停止发售。

    2018年8月16日，国家监管机构出于对游戏暴力内容与赌博问题的担忧，而暂时冻结了网络游戏的版号审批。受两款作品影响，截止10月30日腾讯香港联交所股价从每股港币475.6元指数级下挫至252.14元。`,
    description:
      '文章描述 ccc 文章描述 ccc 文章描述 ccc 文章描述 ccc 文章描述 ccc',
    title: '文章标题 ccc'
  },
  {
    id: 4,
    context: `文章内容 ddd 上个月，诺基亚公布了2019年一季度财报：营业亏损达5.85亿美元，亏损同比扩大56%；归属于母公司股东的净亏损（归母净亏损）更是同比扩大了137%。

    对此，诺基亚在财报中坦言，该公司今年下半年将承受“巨大的压力”。而彭博社直接评价，随着5G设备供应商之争进入白热化，诺基亚等同于“首战告负”。还有使用了诺基亚设备的韩国电信商内部人士吐槽，诺基亚的5G设备交货不仅跳票，且设备性能不如对手。`,
    description:
      '文章描述 ddd 文章描述 ddd 文章描述 ddd 文章描述 ddd 文章描述 ddd',
    title: '文章标题 ddd'
  },
  {
    id: 5,
    context: `文章内容 eee 造车这件事其实挺难的，从两眼一抹黑到投产上市，经历的每一天都是心惊胆战，不过就算造车艰难，还是有众多创业者投身其中，其中不乏李想、李斌、许家印这些早已在商界留下赫赫威名的大佬们，然而这些大佬当下就算做得再好，也比上挡在他们前方的一道身影——特斯拉。

    2013年，特斯拉凭借量产型轿跑Model S让世界认识到了电动汽车，加上创始人高调宣传的环保节能理念，几年内成功收获了一波又一波粉丝，并引领者后来者开启电气化汽车新时代。`,
    description:
      '文章描述 eee 文章描述 eee 文章描述 eee 文章描述 eee 文章描述 eee',
    title: '文章标题 eee'
  }
]

export const articleSourceCode = `


<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="Content-Language" content="zh-CN">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="referrer" content="always"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <title>Redis 作者 antirez：开源维护者的挣扎 - OSCHINA</title>
            <meta name="keywords" content="Redis,Redis 作者 antirez：开源维护者的挣扎"/>
                <meta name="description" content="这两天，一篇名为《开源维护者的挣扎》的文章被迅速顶至 Hacker News 首页，这是 Redis 作者 antirez 发布的最新博客。 几个月前，一名开源项目的维护者向 antirez 发邮件，倾诉自己苦心维持项目多年，这或多或少..."/>
        <link rel="stylesheet" type="text/css" href="https://static.oschina.net/new-osc/js/utils/semantic-ui/semantic.min.css?t=1542621653000"/>
                <link type="text/css" rel="stylesheet" href="https://static.oschina.net/new-osc/dist/css/web.81559f53.css">        <script type="text/javascript">window.__STATIC_DOMAIN = "https://static.oschina.net";</script>
    <script src="https://static.oschina.net/new-osc/js/utils/jquery.min.js"></script>
    <link rel="shortcut icon" type="image/x-icon" href="https://static.oschina.net/new-osc/img/favicon.ico"/>
    <link rel="alternate" type="application/rss+xml" title="最新开源项目" href="https://www.oschina.net/project/rss"/>
    <link rel="alternate" type="application/rss+xml" title="最新开源资讯" href="https://www.oschina.net/news/rss"/>
    <link rel="alternate" type="application/rss+xml" title="最新问题列表" href="https://www.oschina.net/question/rss"/>
    <link rel="alternate" type="application/rss+xml" title="最新翻译列表" href="https://www.oschina.net/translate/rss"/>
    <link rel="alternate" type="application/rss+xml" title="最新博客列表" href="https://www.oschina.net/blog/rss"/>
    <link rel="alternate" type="application/rss+xml" title="推荐博客列表" href="https://www.oschina.net/blog/rss?show=more"/>
    <link rel="alternate" type="application/rss+xml" title="推荐软件列表" href="https://www.oschina.net/project/rss?show=recomms"/>
    <link rel="alternate" type="application/rss+xml" title="最新代码分享列表" href="https://www.oschina.net/code/rss"/>
    <link rel="alternate" type="application/rss+xml" title="OSCHINA - 源码列表" href="https://www.oschina.net/code/source_rss"/>
</head>
<body>
        <val data-name="space_user_url" data-value=""></val>      <val data-name="g_user_url" data-value=""></val>      <val data-name="api_prefix" data-value=""></val>      <val data-name="g_user_code" data-value=""></val>     <val data-name="g_user_id" data-value=""></val>     <val data-name="g_user" data-value=""></val>     <val data-name="login_page" data-value="https://www.oschina.net/home/login?goto_page=https%3A%2F%2Fwww.oschina.net%2Fnews%2F106799%2Fthe-struggles-of-an-open-source-maintainer"></val>     
    
                <val data-name="weixinAppId" data-value="wx880def15e694b905"></val>
        <val data-name="weixinTimestamp" data-value="1558454577167"></val>
        <val data-name="weixinNonceStr" data-value="60adc506-d355-4b4c-ac34-adc6e1b46e8e"></val>
        <val data-name="weixinSignature" data-value="d2091d1f408f1f7a9a014a0f8d5b51071385c055"></val>
        <val data-name="weixinShareUrl" data-value="https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer"></val>                             
                <val data-name="is_detail_page" data-value="true"></val>

        
        <div class="ui left inverted sidebar vertical menu" id="mobileNavSidebar">
        <a href="https://www.oschina.net/project" class="item project">开源软件</a>
        <a href="https://www.oschina.net/question" class="item question"">问答</a>
        <a href="https://www.oschina.net/tweets" class="item tweet">动弹</a>
        <a href="https://www.oschina.net/blog" class="item blog">博客</a>
        <a href="https://www.oschina.net/translate" class="item translate">翻译</a>
        <a href="https://www.oschina.net/news" class="item news active">资讯</a>
        <a href="https://gitee.com/?from=osc-index" class="item gitee" target="_blank">码云</a>
        <a href="https://zb.oschina.net/projects/list.html" class="item" target="_blank">众包</a>
        <a href="https://www.oschina.net/event/ych" class="item meetup">源创会</a>
        <a href="https://www.oschina.net/event" class="item">活动</a>
        <a href="https://job.oschina.net/" class="item" target="_blank">求职/招聘</a>
        <a href="https://www.oschina.net/question/topic/masteronline" class="item">高手问答</a>
        <a href="https://www.oschina.net/question/topic/osc-interview" class="item">开源访谈</a>
        <a href="https://my.oschina.net/editorial-story" class="item">周刊</a>
        <a href="https://www.oschina.net/company" class="item">公司开源导航页</a>
    </div>
        <div class="ui right inverted sidebar vertical menu" id="mobileUserSidebar">
                    <a class="item" href="https://www.oschina.net/home/login?goto_page=https%3A%2F%2Fwww.oschina.net%2Fnews%2F106799%2Fthe-struggles-of-an-open-source-maintainer">登录</a>
            <a class="item" href="https://www.oschina.net/home/reg?goto_page=https%3A%2F%2Fwww.oschina.net%2Fnews%2F106799%2Fthe-struggles-of-an-open-source-maintainer">注册</a>
            </div>

        <div class="pusher  mobile-disabled-fixed-menu  ">
                <div class="ui secondary inverted fixed menu" id="headerNavMenu">
            <a class="item logo" href="https://www.oschina.net" title="OSCHINA"><img src="https://static.oschina.net/new-osc/img/logo_new.svg" alt="OSCHINA"></a>
                                                <form action="https://www.oschina.net/search" class="item search-item">
                <div class="ui icon input">
                    <input type="hidden" name="scope" value="news">
                    <input placeholder="大家都在搜...." id="keyword" name="q" size="24" value="" type="text"/>
                    <i class="search link icon"></i>
                </div>
                <div class="results"></div>
            </form>
            <div class="item download-item">
                <a class="ui primary button" id="btnDownloadApp" href="https://www.oschina.net/app" target="_blank">下载APP</a>
            </div>
            <div class="ui popup top left transition hidden" id="btnDownloadAppContent">
                <h3 class="header">OSCHINA App —— <br/>关注技术领域的头条文章</h3>
                <p>聚合全网技术文章，根据你的阅读喜好进行个性推荐</p>
                <img width="200" src='https://static.oschina.net/new-osc/img/osc_app_download_qrcode.png?t=1451964198000' alt="下载APP"/>
            </div>
            <div class="ui secondary text menu" id="menuList">
                <a href="https://www.oschina.net/project" class="item project">开源软件</a>
                <a href="https://www.oschina.net/question" class="item question">问答</a>
                <a href="https://www.oschina.net/tweets" class="item tweet">动弹</a>
                <a href="https://www.oschina.net/blog" class="item blog">博客</a>
                <a href="https://www.oschina.net/translate" class="item translate">翻译</a>
                <a href="https://www.oschina.net/news" class="item news active">资讯</a>
                <a href="https://gitee.com/?from=osc-index" class="item gitee" target="_blank">码云<span class="floating ui red label giteetip">代码托管</span></a>
                <a href="https://zb.oschina.net/projects/list.html" class="item" target="_blank">众包</a>
                <a href="https://www.oschina.net/event" class="item event">活动</a>
            </div>
            <div class="ui dropdown item" id="moreMenu">
                更多 <i class="dropdown icon"></i>
                <div class="menu">
                    <a href="https://www.oschina.net/event/ych" class="item meetup"><i class="world icon"></i>源创会</a>
                    <a href="https://job.oschina.net/" class="item" target="_blank"><i class="address card outline icon"></i>求职/招聘</a>
                    <a href="https://www.oschina.net/question/topic/masteronline" class="item"><i class="spy icon"></i>高手问答</a>
                    <a href="https://www.oschina.net/question/topic/osc-interview" class="item"><i class="coffee icon"></i>开源访谈</a>
                    <a href="https://my.oschina.net/editorial-story" class="item"><i class="calendar outline icon"></i>周刊</a>
                    <a href="https://www.oschina.net/company" class="item"><i class="building outline icon"></i>公司开源导航页</a>
                </div>
            </div>
            <div class="right menu">
                                    <a class="item" href="https://www.oschina.net/home/login?goto_page=https%3A%2F%2Fwww.oschina.net%2Fnews%2F106799%2Fthe-struggles-of-an-open-source-maintainer">登录</a>
                    <a class="item" href="https://www.oschina.net/home/reg?goto_page=https%3A%2F%2Fwww.oschina.net%2Fnews%2F106799%2Fthe-struggles-of-an-open-source-maintainer">注册</a>
                            </div>
        </div>
                <div class="ui secondary inverted fixed menu" id="mobileHeaderNavMenu">
            <a class="icon item toggle-mobile-nav-sidebar">
                <i class="large content icon"></i>
            </a>
            <div class="logo back-to-top-toggle"><img src="https://static.oschina.net/new-osc/img/logo_new.svg" alt="OSCHINA"></div>
            <a class="icon item toggle-mobile-user-sidebar">
                                    <i class="large user outline icon"></i>
                            </a>
        </div>
                <div id="mainScreen">
            <div class="ui container">
                

                                                                    

          








<x-foo-define data-define="web-news-detail"></x-foo-define> 
<val data-name="objId" data-value="106799"></val> 
<val data-name="fetchCommentsUrl" data-value="?type=comments"></val>        <val data-name="publishCommentUrl" data-value="/news/comment"></val>        <val data-name="replyCommentUrl" data-value="/news/comment"></val>          <val data-name="deleteCommentUrl" data-value="/news/delete_comments"></val> 
<val data-name="weixinShareTitle" data-value="Redis 作者 antirez：开源维护者的挣扎"></val> <val data-name="weixinShareImgUrl" data-value="https://static.oschina.net/uploads/space/2019/0519/075518_dZPQ_4105562.jpg"></val> 
<div class="ui internally centered grid news-detail">
    <div class="row">
        <div class="twelve wide widescreen screen twelve wide large screen twelve wide computer sixteen wide tablet sixteen wide mobile column">
            <div class="float-menu-content">
                <div class="ui large breadcrumb">
                    <a class="section" href="https://www.oschina.net/news">资讯</a>
                    <i class="right chevron icon divider"></i>
                                                                <a class="section" href="https://www.oschina.net/p/redis">Redis</a>
                        <i class="right chevron icon divider"></i>
                                        <div class="active section">正文</div>
                </div>
                <div class="article-detail">
                                                            <h2 class="header">Redis 作者 antirez：开源维护者的挣扎</h2>
                    <div class="extra ui horizontal list meta-wrap">
                        <div class="item">
                            <a href="https://my.oschina.net/u/4105562" class="__user" target="_blank">                    <div class="osc-avatar small-portrait _35x35 avatar" title="xplanet" data-user-id="4105562">
            <img src="https://oscimg.oschina.net/oscnet/up-k4xrvdxfds1hko14m0u44rve0zszo71l.jpg!/both/50x50?t=1556717504000" alt="xplanet" title="xplanet"/>
        </div>
            &nbsp;<span>xplanet</span></a>
                            发布于 2019年05月19日</div>
                        <div class="item collect-btn "
                           data-id="106799" data-user-id="4105562" data-obj-type="4" data-max="99" data-tag-required
                           data-current-user-id=""
                           data-recommend-tags="">收藏 <span data-collect-count data-id="106799" data-obj-type="4">52</span></div>
                        <div class="item comment-count"><a href="#comments" class="normal"><i class="comment outline icon"></i> 评论 <span data-article-reply-count>14</span></a></div>
                    </div>
                    <div class="ad-wrap" style="margin: 10px auto">
                                                <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- 资讯详情页上方 -->
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="ca-pub-7090564139599510"
     data-ad-slot="5227192942"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
                                </div>
                    <div class="content" id="articleContent">
                        <div class="ad-wrap">
                                                    <p style="margin:0 0 10px 0;"><a data-traceid="news_detail_above_text_link_1" data-tracepid="news_detail_above_text_link" style="color:#A00;font-weight:bold;" href="https://cloud.baidu.com/product/bcd.html?track=cp:dsp|pf:pc|pp:chui-kaiyuanzhongguo-chanpin-BCD-25yuan-zixunxiangqingyewenzilian-190515|pu:zixunxiangqingyewenzilian|ci:|kw:2121024" target="_blank">百度智能云·域名服务，.com新用户首购仅需25元</a>  <img src="https://www.oschina.net/img/hot3.png" align="" style="max-height: 32px; max-width: 32px;"></p>
                                    </div>
                        <p>这两天，一篇名为《开源维护者的挣扎》的文章被迅速顶至 Hacker News 首页，这是 Redis 作者&nbsp;antirez&nbsp;发布的最新<a href="http://antirez.com/news/129">博客</a>。</p>

<p>几个月前，一名开源项目的维护者向 antirez 发邮件，倾诉自己苦心维持项目多年，这或多或少带来了一些心理上的负担，因此特来寻求建议。antirez 表示谈不上给出建议，但可以写一篇博客文章来分享对此事的看法。经过反复的思索和自我分析，他坦承&ldquo;维护一个开源项目会带来乐趣&rdquo;，但&ldquo;也有消极的一面&rdquo;。接着，antirez 从以下几方面对此展开描述，下边直接采用第一人称：</p>

<h4><strong>泛滥效应</strong></h4>

<p>当我在项目的早期收到关于 Redis 的电子邮件时，仍然有足够的时间，能够专注于对方在消息里试图表达的内容，并在仔细考虑后回复自己的真实想法。</p>

<p>然而，当一个项目达到像&nbsp;Redis 这样的流行程度，并且人与人之间的交流因为新的社交工具而变得更为容易时，作者收到的消息、issue、PR 和建议的数量也将呈指数增长。随之出现一个普遍性问题，至少从 Redis 的情况来看是这样，即没有足够多合格的人去查看并处理社区中的这些信息。</p>

<p>大多数人试图以错误的方式解决它：原帖发布两周后若无回复就关闭 issue、关闭所有不明确的 issue，以及其他类似直接把邮件列表全部标记为已读的做法。</p>

<p><img alt="" height="406" src="https://static.oschina.net/uploads/space/2019/0519/075518_dZPQ_4105562.jpg" width="640" /></p>

<p>事实上，处理社区反馈必须要花费足够的时间，否则只能&ldquo;假装&rdquo;项目没有未解决的问题。为开源项目的每个子系统配备全职工作人员是奏效的，但很难实现。</p>

<p>那么接下来会发生什么？你将开始考虑哪些该被优先处理而哪些不是，你将因为自己忽略了太多事物和人而感到不安，贡献者也会认为你是一个漠不关心的人。这种情形实在是很复杂。</p>

<p>通常来说，应该主要先解决关键问题，忽视所有新的东西，因为新的东西还未能进入核心，谁想拥有一个伴随着更多 PR 和 issue 的代码库呢？</p>

<h4><strong>角色转换</strong></h4>

<p>Redis 流行起来后，我的工作更多地转变为了查看 PR 和 issue。这其中确实有些人会比我做得好，但大多数人的贡献仅处于平均水平，只是解决给定问题罢了。</p>

<p>当我设计&nbsp;Redis 时，我倾向于将它视为一个整体，毕竟这么多年来一直在写这个东西。所以现实是，擅长的东西往往不再有时间去做。</p>

<p>我的解决方法是，给自己几周时间停止查看 PR 和 issue，转而去编程或者设计，这才是我真正喜爱和享受的。但这反过来又给我带来了更大的心理压力，只在做自己喜欢的事情时做得很好，令人感觉很糟糕。</p>

<p><img alt="clock-650753_640.jpg" height="426" src="https://static.oschina.net/uploads/space/2019/0519/075452_yNDc_4105562.jpg" width="640" /></p>

<h4><strong>时间</strong></h4>

<p>长时间在一个项目上工作有两个问题，至少对我而言是这样。</p>

<p>第一个问题是，在&nbsp;Redis 之前，我从未有过在每个工作日都工作的经验。我总是干一周，停两周，接着再干一个月，然后消失两个月。做创造性工作需要充电，以获得新的能量和想法。</p>

<p>但开始收到在&nbsp;Redis 工作的报酬后，道德规范我不能再依照过去的模式，所以我强迫自己按照正常的时间表工作。这对我来说无比挣扎，而且我确信自己做得比实际能做到的要少。目前仍未找到解决方法，跟公司申请回到原先的工作模式是不管用的，因为社区的运作方式如此。</p>

<p>另一个问题是，从精神上讲，在同一个项目中进行大量工作也是一件复杂的事情。我过去常常每六个月换一次项目，而如今十年来都在做同一个项目。我试图通过在 Redis 中部署子项目来留存创造力，先后做了&nbsp;Cluster、HyerLogLogs 和一个已放弃的磁盘存储项目，现在在做第四个。</p>

<p>不过，最终还是要回到 issue&nbsp;和 PR 页面，每天重复同样的工作。</p>

<h4><strong>恐惧</strong></h4>

<p>我每天都在害怕自己失去对 Redis 的技术领导力，不是因为我认为自己在设计和发展 Redis 方面做得不够好，而是因为我的方式与大多数用户想要的，以及大多数 IT 人员对软件的信仰不一致。</p>

<p>因此，我不得不在我认为的优秀设计、功能集、开发速度、项目规模，以及大多数用户所期望的内容之间保持平衡。</p>

<p>幸运的是，有一定比例的 Redis 用户完全理解 Redis 的方式，所以我至少时不时会得到一些安慰。</p>

<p><img alt="kittens-4020199_640.jpg" height="425" src="https://static.oschina.net/uploads/space/2019/0519/082134_gBCF_4105562.jpg" width="640" /></p>

<h4><strong>摩擦</strong></h4>

<p>尽管我认为程序员中的好人占比多过其他领域，但总还是有一些混账。作为一个受欢迎的开源项目的领导者，将不得不面对这些人，这可能是我在 Redis 开发过程中遇到的最紧张的事情之一。</p>

<h4><strong>徒劳</strong></h4>

<p>我相信软件虽然很棒，但不会像一本存活了几个世纪的书一样伟大，这绝不是因为它本身不好，而是因为其中的副作用，并且，它终将被更有用的软件替换掉。因此有时我会觉得自己做的一切终将都是徒劳的。</p>

<p>只停留在软件编写本身，而不思考软件&ldquo;大创意&rdquo;的人，真的能创造新的标志吗？</p>

<blockquote>
<p>总的来说，我能够从事自己真正热爱的事情多年，并且它给我带来了朋友、认可和金钱，所以这算不上是糟糕的交易。</p>

<p>然而，我完全理解，一旦项目开始流行，人们就会为了维持生计而挣扎。这篇文章专门写给你们。</p>
</blockquote>

                    </div>

                                                                <div class="news-links">
                            <h3>相关链接</h3>
                            <ul class="link-list">
                                                                <li>Redis 的详细介绍：<a href="https://www.oschina.net/p/redis" target="_blank">点击查看</a></li>
                                                                                                <li>Redis 的下载地址：<a href="https://www.oschina.net/home/login?goto_page=https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer" target="_blank">点击下载</a></li>
                                                            </ul>
                        </div>
                    
                                                                <div class="git-widget-wrap">
                                                        <div class="widget">
                                <div class='gitee-widget'>
                                    <script type="text/javascript" defer="defer">
                                        var genGitIdent = function (ident) {
                                            var id = [];
                                            ident.split('/').forEach(function (item, index) {
                                                if (index <= 2)
                                                    id.push(item.replace('.git', '').replace(':', '/'));
                                            });
                                            return id.join('/') + "/widget_preview";
                                        };
                                        var url = ["http://redis.io/","http://redis.io/documentation","http://redis.io/download","https://github.com/antirez/redis"];
                                        var found = false;
                                        for (var i in url) {
                                            var ident = url[+i].split('git.oschina.net');
                                            if (ident.length == 2 && !found) {
                                                var prv = genGitIdent(ident[1]);
                                                if (prv && prv.length > 0) {
                                                    document.getElementsByClassName("gitee-widget")[0].innerHTML = "";
                                                    document.write('<script src="//git.oschina.net' + prv + '" type="text\/javascript"><\/script>');
                                                    found = true;
                                                }
                                            }
                                        }
                                        if (!found) {
                                            for (var i in url) {
                                                var ident = url[+i].split('gitee.com');
                                                if (ident.length == 2 && !found) {
                                                    var prv = genGitIdent(ident[1]);
                                                    if (prv && prv.length > 0) {
                                                        document.getElementsByClassName("gitee-widget")[0].innerHTML = "";
                                                        document.write('<script src="//gitee.com' + prv + '" type="text\/javascript"><\/script>');
                                                        found = true;
                                                    }
                                                }
                                            }
                                        }
                                    </script>
                                </div>
                            </div>
                        </div>
                    
                                                                <div class="git-widget-wrap">
                                                        <div class="widget">
                                <div class='gitee-widget'>
                                    <script type="text/javascript" defer="defer">
                                        var genGitIdent = function (ident) {
                                            var id = [];
                                            ident.split('/').forEach(function (item, index) {
                                                if (index <= 2)
                                                    id.push(item.replace('.git', '').replace(':', '/'));
                                            });
                                            return id.join('/') + "/widget_preview";
                                        };
                                        var url = ["http://redis.io/","http://redis.io/documentation","https://git.oschina.net/mirrors/redis","http://redis.io/download","https://github.com/antirez/redis"];
                                        var found = false;
                                        for (var i in url) {
                                            var ident = url[+i].split('git.oschina.net');
                                            if (ident.length == 2 && !found) {
                                                var prv = genGitIdent(ident[1]);
                                                if (prv && prv.length > 0) {
                                                    document.getElementsByClassName("gitee-widget")[0].innerHTML = "";
                                                    document.write('<script src="//git.oschina.net' + prv + '" type="text\/javascript"><\/script>');
                                                    found = true;
                                                }
                                            }
                                        }
                                        if (!found) {
                                            for (var i in url) {
                                                var ident = url[+i].split('gitee.com');
                                                if (ident.length == 2 && !found) {
                                                    var prv = genGitIdent(ident[1]);
                                                    if (prv && prv.length > 0) {
                                                        document.getElementsByClassName("gitee-widget")[0].innerHTML = "";
                                                        document.write('<script src="//gitee.com' + prv + '" type="text\/javascript"><\/script>');
                                                        found = true;
                                                    }
                                                }
                                            }
                                        }
                                    </script>
                                </div>
                            </div>
                        </div>
                    
                    <div class="ad-wrap" style="margin: 10px auto">
                                                <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- 资讯详情页下方 -->
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="ca-pub-7090564139599510"
     data-ad-slot="4516746503"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
                                </div>

                                        <div class="source-info">
                        <div>本站文章除注明转载外，均为本站原创或编译。欢迎任何形式的转载，但请务必注明出处，尊重他人劳动共创开源社区。</div>
                        <div><span class="gray">转载请注明：</span>文章转载自 OSCHINA 社区 <a href="https://www.oschina.net" class="green">[http://www.oschina.net]</a></div>
                        <div><span class="gray">本文标题：</span>Redis 作者 antirez：开源维护者的挣扎</div>
                        <div><span class="gray">本文地址：</span><a href="https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer" class="green">https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer</a></div>
                                                                    </div>

                                        <div class="ui basic center aligned segment action">
                        <div class="ui huge buttons">
                            <a class="ui basic button collect-btn hover"
                               data-id="106799" data-user-id="4105562" data-obj-type="4" data-max="99" data-tag-required
                               data-current-user-id=""
                               data-recommend-tags=""><i class="star outline icon"></i>收藏 (<span data-collect-count data-id="106799" data-obj-type="4">52</span>)</a>
                            <div class="ui basic dropdown share button bdsharebuttonbox reset dropdown-share"
                                 data-tag="share-blog">
                                <i class="share icon"></i> <span>分享</span>
                                <div class="menu">
                                    <a class="item" data-cmd="tsina"><i class="weibo icon"></i>微博</a>
                                    <a class="item" data-cmd="sqq"><i class="qq icon"></i>QQ</a>
                                    <a class="item" data-cmd="weixin"><i class="weixin icon"></i>微信</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                                                    <div class="ui threaded comments segment" id="commentsContainer">
        <div class="ui inverted dimmer comments-loader">
        <div class="ui text loader">加载中</div>
    </div>

        <div class="comments-wrap" id="comments">
                            
 
                            <div class="wonderful-comments-wrap">
                <h3 class="ui header comments-title">精彩评论</h3>
                                    
            <div class="comment" data-comment-id="296124834" data-comment-user-id="3672962">
            <a class="ui circular image avatar" href="https://my.oschina.net/u/3672962" target="_blank">
                                    <div class="osc-avatar small-portrait _35x35" title="普通用户" data-user-id="3672962">
            <img src="https://static.oschina.net/uploads/user/1836/3672962_50.jpeg?t=1509010251000" alt="普通用户" title="普通用户"/>
        </div>
                        </a>
            <div class="content">
                <a class="author" href="https://my.oschina.net/u/3672962" name="rpl_296124834" target="_blank">普通用户</a>
                <div class="metadata">
                    <span class="date">2019-05-19 13:41</span>
                </div>
                <div class="text" data-emoji-render>
                    <div class='ref'><h4>引用来自“久峰爱玩火”的评论</h4>&#20026;&#20160;&#20040;&#22269;&#22806;&#24320;&#28304;&#32500;&#25252;&#36825;&#20040;&#20248;&#31168;</div>国内的伸手党和键盘侠也很优秀
                </div>
                <div class="actions">
                                        <a class="like " data-comment-like-btn data-comment-id="296124834">
                        <i class="like outline icon"></i> <span data-comment-like-count data-comment-id="296124834">9</span> 赞
                    </a>
                                                            <a class="ban" ban-report data-id="296124834" data-obj-type="16" data-url="https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer#rpl_296124834">
                        <i class="ban icon"></i> 举报
                    </a>
                </div>
            </div>
        </div>
                                        
            <div class="comment" data-comment-id="296124815" data-comment-user-id="107243">
            <a class="ui circular image avatar" href="https://my.oschina.net/delphixp" target="_blank">
                                    <div class="osc-avatar small-portrait _35x35" title="东胜神洲" data-user-id="107243">
            <img src="https://static.oschina.net/uploads/user/53/107243_50.jpg?t=1420035904000" alt="东胜神洲" title="东胜神洲"/>
        </div>
                        </a>
            <div class="content">
                <a class="author" href="https://my.oschina.net/delphixp" name="rpl_296124815" target="_blank">东胜神洲</a>
                <div class="metadata">
                    <span class="date">2019-05-19 10:57</span>
                </div>
                <div class="text" data-emoji-render>
                    <div class='ref'><div class='ref'><h4>引用来自“久峰爱玩火”的评论</h4>&#20026;&#20160;&#20040;&#22269;&#22806;&#24320;&#28304;&#32500;&#25252;&#36825;&#20040;&#20248;&#31168;</div><h4>引用来自“mymbrooks”的评论</h4>国外 IT 大部分有体面的收入，加班也不像国内这么严重，房贷车贷的压力相对较小，可以抽时间做自己喜欢的事情</div>只能是说，一些有很好商业前景的项目，由于有资金和专业人员的加入和支持，所以维护得这么优秀。。。看看 github 上的开源项目，几十万几百万的，个个都维护得很好么？。。也不见得。所以一个项目维护得好与不好，一方面跟这项目的“钱景”有关，另一方面也跟这作者的“魄力和领导力”有关。<br/><br/><br/>题外话：（关于国外的收入，加班，贷款问题，事实上还得要看具体国家，具体类型）<br/><br/>例如国家类别，例如关于工作时间和强度，法国是全世界最好的国家。。。各种法律（竞选许诺）保障劳动者955，甚至1045，每年还有各种什么年假，陪儿童假之类（奇葩的如希腊的公务员，还有美其名的电脑辐射假），有时候什么都不做，收入比正式工还要高。。这对劳动者来说，当然是很受欢迎很爽，但对国家来说，就很严重了。大量的国债，企业竞争力下降。。不过，法国似乎除了德国，没什么想要他命的大国，所以现在虽然罢工不断，各种游行爆发，仍然还能运作。。头疼的只是政府人员，对民众而言大不了国家破产，有欧盟接管，最差不就是如二战那样，投降给德国，从历史来看，法国社会折腾是一贯和出名的<br/><br/>如美国，加班不严重要看企业，一些垄断性企业（如 google之类）或者不严重，但一些底层也不乐观。如沃尔玛，将很多超市职位临时工化，如将一天的收银拆分成早上，中午，下午等计时结薪职位，每个职位工时也就三小时左右，单从这个职位来看，没加班，也很轻松，但实际上单凭这个职位是养不活人的，所以需要再兼职多一个或几个职位，累计下来工作时长也不少。。<br/>又如贷款。。这部分就涉及到观念的问题，如美国，在美国贷款欠债很正常，甚至从小这观念就融入到意识当中，于是贷款就变成了如吃饭穿衣一样，为人生一件事，于是对贷款的时长并不太在意。。。所以，有很多的人到老死仍然还没还清贷款（如教育贷款）。再加上，美国遗产税非常高，所以在财产上的“留给子孙后代”意愿不强，甚至有得到遗产就破产的情况发生，这在财产处理（如还贷）方面更没那么紧迫。<br/><br/>中国就不一样，很多中国人不喜欢欠债，能一次性给钱的就一次性，咬咬牙能20年还清的，绝不选30年，即使没能力，东拼西凑弄个天天吃泡面（为面子为老婆为子孙后代之类）也得买房买车。。。压力自然就感觉很大。
                </div>
                <div class="actions">
                                        <a class="like " data-comment-like-btn data-comment-id="296124815">
                        <i class="like outline icon"></i> <span data-comment-like-count data-comment-id="296124815">9</span> 赞
                    </a>
                                                            <a class="ban" ban-report data-id="296124815" data-obj-type="16" data-url="https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer#rpl_296124815">
                        <i class="ban icon"></i> 举报
                    </a>
                </div>
            </div>
        </div>
                                        
            <div class="comment" data-comment-id="296124810" data-comment-user-id="561214">
            <a class="ui circular image avatar" href="https://my.oschina.net/eechen" target="_blank">
                                    <div class="osc-avatar small-portrait _35x35" title="eechen" data-user-id="561214">
            <img src="https://static.oschina.net/uploads/user/280/561214_50.jpeg?t=1474368642000" alt="eechen" title="eechen"/>
        </div>
                        </a>
            <div class="content">
                <a class="author" href="https://my.oschina.net/eechen" name="rpl_296124810" target="_blank">eechen</a>
                <div class="metadata">
                    <span class="date">2019-05-19 10:44</span>
                </div>
                <div class="text" data-emoji-render>
                    像Linus Torvalds那样对于自己不认可的设计,直接就怼,Redis作者就没有那么多困扰了.
                </div>
                <div class="actions">
                                        <a class="like " data-comment-like-btn data-comment-id="296124810">
                        <i class="like outline icon"></i> <span data-comment-like-count data-comment-id="296124810">9</span> 赞
                    </a>
                                                            <a class="ban" ban-report data-id="296124810" data-obj-type="16" data-url="https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer#rpl_296124810">
                        <i class="ban icon"></i> 举报
                    </a>
                </div>
            </div>
        </div>
                                        
            <div class="comment" data-comment-id="296124806" data-comment-user-id="107243">
            <a class="ui circular image avatar" href="https://my.oschina.net/delphixp" target="_blank">
                                    <div class="osc-avatar small-portrait _35x35" title="东胜神洲" data-user-id="107243">
            <img src="https://static.oschina.net/uploads/user/53/107243_50.jpg?t=1420035904000" alt="东胜神洲" title="东胜神洲"/>
        </div>
                        </a>
            <div class="content">
                <a class="author" href="https://my.oschina.net/delphixp" name="rpl_296124806" target="_blank">东胜神洲</a>
                <div class="metadata">
                    <span class="date">2019-05-19 10:16</span>
                </div>
                <div class="text" data-emoji-render>
                    这很正常。。。一个小项目，其内涵和外延都小的情况下，一个人开发与维护自然有余，但当项目的变大，无论是内涵或外延都变大时。。按照事物的发展规律，必须需要一个多人团队来支持和维护，并且还应该是“专业”团队（至少是富有责任心的人组成），而不是“乌合之众”。。<br/><br/>所以，很多项目的发展，从一个人到一组人，再到某种组织（如基金会之类），就如一间公司的发展变迁一样。。。忽视或无法如些的项目，最终痛苦的就是作者，又或者崩散。。
                </div>
                <div class="actions">
                                        <a class="like " data-comment-like-btn data-comment-id="296124806">
                        <i class="like outline icon"></i> <span data-comment-like-count data-comment-id="296124806">3</span> 赞
                    </a>
                                                            <a class="ban" ban-report data-id="296124806" data-obj-type="16" data-url="https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer#rpl_296124806">
                        <i class="ban icon"></i> 举报
                    </a>
                </div>
            </div>
        </div>
                                        
            <div class="comment" data-comment-id="296124799" data-comment-user-id="186420">
            <a class="ui circular image avatar" href="https://my.oschina.net/mymbrooks" target="_blank">
                                    <div class="osc-avatar small-portrait _35x35" title="mymbrooks" data-user-id="186420">
            <img src="https://oscimg.oschina.net/oscnet/up-d588b2c445e108efc156919a87c80feb.jpeg!/both/50x50?t=1497772612000" alt="mymbrooks" title="mymbrooks"/>
        </div>
                        </a>
            <div class="content">
                <a class="author" href="https://my.oschina.net/mymbrooks" name="rpl_296124799" target="_blank">mymbrooks</a>
                <div class="metadata">
                    <span class="date">2019-05-19 10:08</span>
                </div>
                <div class="text" data-emoji-render>
                    <div class='ref'><h4>引用来自“久峰爱玩火”的评论</h4>&#20026;&#20160;&#20040;&#22269;&#22806;&#24320;&#28304;&#32500;&#25252;&#36825;&#20040;&#20248;&#31168;</div>国外 IT 大部分有体面的收入，加班也不像国内这么严重，房贷车贷的压力相对较小，可以抽时间做自己喜欢的事情
                </div>
                <div class="actions">
                                        <a class="like " data-comment-like-btn data-comment-id="296124799">
                        <i class="like outline icon"></i> <span data-comment-like-count data-comment-id="296124799">3</span> 赞
                    </a>
                                                            <a class="ban" ban-report data-id="296124799" data-obj-type="16" data-url="https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer#rpl_296124799">
                        <i class="ban icon"></i> 举报
                    </a>
                </div>
            </div>
        </div>
                                </div>
            
                <h3 class="ui header comments-title">最新评论（<span>14</span>）</h3>
                    
            <div class="comment" data-comment-id="296125105" data-comment-user-id="4126143">
            <a class="ui circular image avatar" href="https://my.oschina.net/antted" target="_blank">
                                    <div class="osc-avatar small-portrait _35x35" title="有擎" data-user-id="4126143">
            <img src="https://oscimg.oschina.net/oscnet/up-ddf56ec336c59b2272339f175aef401e.jpg!/both/50x50" alt="有擎" title="有擎"/>
        </div>
                        </a>
            <div class="content">
                <a class="author" href="https://my.oschina.net/antted" name="rpl_296125105" target="_blank">有擎</a>
                <div class="metadata">
                    <span class="date">2019-05-20 11:13</span>
                </div>
                <div class="text" data-emoji-render>
                    做开源项目，不仅要有时间、精力，还要有强大的内心，按照自己的想法和创造力，而不是一味的满足大众喜好。<br/>我们开源作者可以像部分网红、明星学习，学习他们的“厚脸皮”，“真自我”，不为外界的个别极端评论所影响。
                </div>
                <div class="actions">
                                        <a class="like " data-comment-like-btn data-comment-id="296125105">
                        <i class="like outline icon"></i> <span data-comment-like-count data-comment-id="296125105">0</span> 赞
                    </a>
                                                            <a class="ban" ban-report data-id="296125105" data-obj-type="16" data-url="https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer#rpl_296125105">
                        <i class="ban icon"></i> 举报
                    </a>
                </div>
            </div>
        </div>
                        
            <div class="comment" data-comment-id="296125045" data-comment-user-id="566335">
            <a class="ui circular image avatar" href="https://my.oschina.net/Jiuyong" target="_blank">
                                    <div class="osc-avatar small-portrait _35x35" title="久永" data-user-id="566335">
            <img src="https://static.oschina.net/uploads/user/283/566335_50.jpg" alt="久永" title="久永"/>
        </div>
                        </a>
            <div class="content">
                <a class="author" href="https://my.oschina.net/Jiuyong" name="rpl_296125045" target="_blank">久永</a>
                <div class="metadata">
                    <span class="date">2019-05-20 10:34</span>
                </div>
                <div class="text" data-emoji-render>
                    <div class='ref'><div class='ref'><div class='ref'><h4>引用来自“久峰爱玩火”的评论</h4>&#20026;&#20160;&#20040;&#22269;&#22806;&#24320;&#28304;&#32500;&#25252;&#36825;&#20040;&#20248;&#31168;</div><h4>引用来自“mymbrooks”的评论</h4>国外 IT 大部分有体面的收入，加班也不像国内这么严重，房贷车贷的压力相对较小，可以抽时间做自己喜欢的事情</div><h4>引用来自“东胜神洲”的评论</h4>只能是说，一些有很好商业前景的项目，由于有资金和专业人员的加入和支持，所以维护得这么优秀。。。看看 github 上的开源项目，几十万几百万的，个个都维护得很好么？。。也不见得。所以一个项目维护得好与不好，一方面跟这项目的“钱景”有关，另一方面也跟这作者的“魄力和领导力”有关。<br/><br/><br/>题外话：（关于国外的收入，加班，贷款问题，事实上还得要看具体国家，具体类型）<br/><br/>例如国家类别，例如关于工作时间和强度，法国是全世界最好的国家。。。各种法律（竞选许诺）保障劳动者955，甚至1045，每年还有各种什么年假，陪儿童假之类（奇葩的如希腊的公务员，还有美其名的电脑辐射假），有时候什么都不做，收入比正式工还要高。。这对劳动者来说，当然是很受欢迎很爽，但对国家来说，就很严重了。大量的国债，企业竞争力下降。。不过，法国似乎除了德国，没什么想要他命的大国，所以现在虽然罢工不断，各种游行爆发，仍然还能运作。。头疼的只是政府人员，对民众而言大不了国家破产，有欧盟接管，最差不就是如二战那样，投降给德国，从历史来看，法国社会折腾是一贯和出名的<br/><br/>如美国，加班不严重要看企业，一些垄断性企业（如 google之类）或者不严重，但一些底层也不乐观。如沃尔玛，将很多超市职位临时工化，如将一天的收银拆分成早上，中午，下午等计时结薪职位，每个职位工时也就三小时左右，单从这个职位来看，没加班，也很轻松，但实际上单凭这个职位是养不活人的，所以需要再兼职多一个或几个职位，累计下来工作时长也不少。。<br/>又如贷款。。这部分就涉及到观念的问题，如美国，在美国贷款欠债很正常，甚至从小这观念就融入到意识当中，于是贷款就变成了如吃饭穿衣一样，为人生一件事，于是对贷款的时长并不太在意。。。所以，有很多的人到老死仍然还没还清贷款（如教育贷款）。再加上，美国遗产税非常高，所以在财产上的“留给子孙后代”意愿不强，甚至有得到遗产就破产的情况发生，这在财产处理（如还贷）方面更没那么紧迫。<br/><br/>中国就不一样，很多中国人不喜欢欠债，能一次性给钱的就一次性，咬咬牙能20年还清的，绝不选30年，即使没能力，东拼西凑弄个天天吃泡面（为面子为老婆为子孙后代之类）也得买房买车。。。压力自然就感觉很大。</div>神州又回来了！
                </div>
                <div class="actions">
                                        <a class="like " data-comment-like-btn data-comment-id="296125045">
                        <i class="like outline icon"></i> <span data-comment-like-count data-comment-id="296125045">0</span> 赞
                    </a>
                                                            <a class="ban" ban-report data-id="296125045" data-obj-type="16" data-url="https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer#rpl_296125045">
                        <i class="ban icon"></i> 举报
                    </a>
                </div>
            </div>
        </div>
                        
            <div class="comment" data-comment-id="296124852" data-comment-user-id="97202">
            <a class="ui circular image avatar" href="https://my.oschina.net/yuandi" target="_blank">
                                    <div class="osc-avatar small-portrait _35x35" title="沙发迪" data-user-id="97202">
            <img src="https://static.oschina.net/uploads/user/48/97202_50.jpg?t=1439792128000" alt="沙发迪" title="沙发迪"/>
        </div>
                        </a>
            <div class="content">
                <a class="author" href="https://my.oschina.net/yuandi" name="rpl_296124852" target="_blank">沙发迪</a>
                <div class="metadata">
                    <span class="date">2019-05-19 16:41</span>
                </div>
                <div class="text" data-emoji-render>
                    这翻译给100分！
                </div>
                <div class="actions">
                                        <a class="like " data-comment-like-btn data-comment-id="296124852">
                        <i class="like outline icon"></i> <span data-comment-like-count data-comment-id="296124852">0</span> 赞
                    </a>
                                                            <a class="ban" ban-report data-id="296124852" data-obj-type="16" data-url="https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer#rpl_296124852">
                        <i class="ban icon"></i> 举报
                    </a>
                </div>
            </div>
        </div>
                        
            <div class="comment" data-comment-id="296124841" data-comment-user-id="4001056">
            <a class="ui circular image avatar" href="https://my.oschina.net/u/4001056" target="_blank">
                                    <div class="osc-avatar small-portrait _35x35" title="久峰爱玩火" data-user-id="4001056">
            <span class="text-portrait" style="background: #eca0f1">久</span>
        </div>
                        </a>
            <div class="content">
                <a class="author" href="https://my.oschina.net/u/4001056" name="rpl_296124841" target="_blank">久峰爱玩火</a>
                <div class="metadata">
                    <span class="date">2019-05-19 15:17</span>
                </div>
                <div class="text" data-emoji-render>
                    <div class='ref'><div class='ref'><div class='ref'><h4>引用来自“久峰爱玩火”的评论</h4>&#20026;&#20160;&#20040;&#22269;&#22806;&#24320;&#28304;&#32500;&#25252;&#36825;&#20040;&#20248;&#31168;</div><h4>引用来自“mymbrooks”的评论</h4>国外 IT 大部分有体面的收入，加班也不像国内这么严重，房贷车贷的压力相对较小，可以抽时间做自己喜欢的事情</div><h4>引用来自“东胜神洲”的评论</h4>只能是说，一些有很好商业前景的项目，由于有资金和专业人员的加入和支持，所以维护得这么优秀。。。看看 github 上的开源项目，几十万几百万的，个个都维护得很好么？。。也不见得。所以一个项目维护得好与不好，一方面跟这项目的“钱景”有关，另一方面也跟这作者的“魄力和领导力”有关。<br/><br/><br/>题外话：（关于国外的收入，加班，贷款问题，事实上还得要看具体国家，具体类型）<br/><br/>例如国家类别，例如关于工作时间和强度，法国是全世界最好的国家。。。各种法律（竞选许诺）保障劳动者955，甚至1045，每年还有各种什么年假，陪儿童假之类（奇葩的如希腊的公务员，还有美其名的电脑辐射假），有时候什么都不做，收入比正式工还要高。。这对劳动者来说，当然是很受欢迎很爽，但对国家来说，就很严重了。大量的国债，企业竞争力下降。。不过，法国似乎除了德国，没什么想要他命的大国，所以现在虽然罢工不断，各种游行爆发，仍然还能运作。。头疼的只是政府人员，对民众而言大不了国家破产，有欧盟接管，最差不就是如二战那样，投降给德国，从历史来看，法国社会折腾是一贯和出名的<br/><br/>如美国，加班不严重要看企业，一些垄断性企业（如 google之类）或者不严重，但一些底层也不乐观。如沃尔玛，将很多超市职位临时工化，如将一天的收银拆分成早上，中午，下午等计时结薪职位，每个职位工时也就三小时左右，单从这个职位来看，没加班，也很轻松，但实际上单凭这个职位是养不活人的，所以需要再兼职多一个或几个职位，累计下来工作时长也不少。。<br/>又如贷款。。这部分就涉及到观念的问题，如美国，在美国贷款欠债很正常，甚至从小这观念就融入到意识当中，于是贷款就变成了如吃饭穿衣一样，为人生一件事，于是对贷款的时长并不太在意。。。所以，有很多的人到老死仍然还没还清贷款（如教育贷款）。再加上，美国遗产税非常高，所以在财产上的“留给子孙后代”意愿不强，甚至有得到遗产就破产的情况发生，这在财产处理（如还贷）方面更没那么紧迫。<br/><br/>中国就不一样，很多中国人不喜欢欠债，能一次性给钱的就一次性，咬咬牙能20年还清的，绝不选30年，即使没能力，东拼西凑弄个天天吃泡面（为面子为老婆为子孙后代之类）也得买房买车。。。压力自然就感觉很大。</div>&#35874;&#35874;&#25026;&#20102;
                </div>
                <div class="actions">
                                        <a class="like " data-comment-like-btn data-comment-id="296124841">
                        <i class="like outline icon"></i> <span data-comment-like-count data-comment-id="296124841">0</span> 赞
                    </a>
                                                            <a class="ban" ban-report data-id="296124841" data-obj-type="16" data-url="https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer#rpl_296124841">
                        <i class="ban icon"></i> 举报
                    </a>
                </div>
            </div>
        </div>
                        
            <div class="comment" data-comment-id="296124840" data-comment-user-id="4001056">
            <a class="ui circular image avatar" href="https://my.oschina.net/u/4001056" target="_blank">
                                    <div class="osc-avatar small-portrait _35x35" title="久峰爱玩火" data-user-id="4001056">
            <span class="text-portrait" style="background: #eca0f1">久</span>
        </div>
                        </a>
            <div class="content">
                <a class="author" href="https://my.oschina.net/u/4001056" name="rpl_296124840" target="_blank">久峰爱玩火</a>
                <div class="metadata">
                    <span class="date">2019-05-19 15:17</span>
                </div>
                <div class="text" data-emoji-render>
                    <div class='ref'><div class='ref'><h4>引用来自“久峰爱玩火”的评论</h4>&#20026;&#20160;&#20040;&#22269;&#22806;&#24320;&#28304;&#32500;&#25252;&#36825;&#20040;&#20248;&#31168;</div><h4>引用来自“普通用户”的评论</h4>国内的伸手党和键盘侠也很优秀</div>&#22909;&#21543;
                </div>
                <div class="actions">
                                        <a class="like " data-comment-like-btn data-comment-id="296124840">
                        <i class="like outline icon"></i> <span data-comment-like-count data-comment-id="296124840">0</span> 赞
                    </a>
                                                            <a class="ban" ban-report data-id="296124840" data-obj-type="16" data-url="https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer#rpl_296124840">
                        <i class="ban icon"></i> 举报
                    </a>
                </div>
            </div>
        </div>
                        
            <div class="comment" data-comment-id="296124834" data-comment-user-id="3672962">
            <a class="ui circular image avatar" href="https://my.oschina.net/u/3672962" target="_blank">
                                    <div class="osc-avatar small-portrait _35x35" title="普通用户" data-user-id="3672962">
            <img src="https://static.oschina.net/uploads/user/1836/3672962_50.jpeg?t=1509010251000" alt="普通用户" title="普通用户"/>
        </div>
                        </a>
            <div class="content">
                <a class="author" href="https://my.oschina.net/u/3672962" name="rpl_296124834" target="_blank">普通用户</a>
                <div class="metadata">
                    <span class="date">2019-05-19 13:41</span>
                </div>
                <div class="text" data-emoji-render>
                    <div class='ref'><h4>引用来自“久峰爱玩火”的评论</h4>&#20026;&#20160;&#20040;&#22269;&#22806;&#24320;&#28304;&#32500;&#25252;&#36825;&#20040;&#20248;&#31168;</div>国内的伸手党和键盘侠也很优秀
                </div>
                <div class="actions">
                                        <a class="like " data-comment-like-btn data-comment-id="296124834">
                        <i class="like outline icon"></i> <span data-comment-like-count data-comment-id="296124834">9</span> 赞
                    </a>
                                                            <a class="ban" ban-report data-id="296124834" data-obj-type="16" data-url="https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer#rpl_296124834">
                        <i class="ban icon"></i> 举报
                    </a>
                </div>
            </div>
        </div>
                        
            <div class="comment" data-comment-id="296124815" data-comment-user-id="107243">
            <a class="ui circular image avatar" href="https://my.oschina.net/delphixp" target="_blank">
                                    <div class="osc-avatar small-portrait _35x35" title="东胜神洲" data-user-id="107243">
            <img src="https://static.oschina.net/uploads/user/53/107243_50.jpg?t=1420035904000" alt="东胜神洲" title="东胜神洲"/>
        </div>
                        </a>
            <div class="content">
                <a class="author" href="https://my.oschina.net/delphixp" name="rpl_296124815" target="_blank">东胜神洲</a>
                <div class="metadata">
                    <span class="date">2019-05-19 10:57</span>
                </div>
                <div class="text" data-emoji-render>
                    <div class='ref'><div class='ref'><h4>引用来自“久峰爱玩火”的评论</h4>&#20026;&#20160;&#20040;&#22269;&#22806;&#24320;&#28304;&#32500;&#25252;&#36825;&#20040;&#20248;&#31168;</div><h4>引用来自“mymbrooks”的评论</h4>国外 IT 大部分有体面的收入，加班也不像国内这么严重，房贷车贷的压力相对较小，可以抽时间做自己喜欢的事情</div>只能是说，一些有很好商业前景的项目，由于有资金和专业人员的加入和支持，所以维护得这么优秀。。。看看 github 上的开源项目，几十万几百万的，个个都维护得很好么？。。也不见得。所以一个项目维护得好与不好，一方面跟这项目的“钱景”有关，另一方面也跟这作者的“魄力和领导力”有关。<br/><br/><br/>题外话：（关于国外的收入，加班，贷款问题，事实上还得要看具体国家，具体类型）<br/><br/>例如国家类别，例如关于工作时间和强度，法国是全世界最好的国家。。。各种法律（竞选许诺）保障劳动者955，甚至1045，每年还有各种什么年假，陪儿童假之类（奇葩的如希腊的公务员，还有美其名的电脑辐射假），有时候什么都不做，收入比正式工还要高。。这对劳动者来说，当然是很受欢迎很爽，但对国家来说，就很严重了。大量的国债，企业竞争力下降。。不过，法国似乎除了德国，没什么想要他命的大国，所以现在虽然罢工不断，各种游行爆发，仍然还能运作。。头疼的只是政府人员，对民众而言大不了国家破产，有欧盟接管，最差不就是如二战那样，投降给德国，从历史来看，法国社会折腾是一贯和出名的<br/><br/>如美国，加班不严重要看企业，一些垄断性企业（如 google之类）或者不严重，但一些底层也不乐观。如沃尔玛，将很多超市职位临时工化，如将一天的收银拆分成早上，中午，下午等计时结薪职位，每个职位工时也就三小时左右，单从这个职位来看，没加班，也很轻松，但实际上单凭这个职位是养不活人的，所以需要再兼职多一个或几个职位，累计下来工作时长也不少。。<br/>又如贷款。。这部分就涉及到观念的问题，如美国，在美国贷款欠债很正常，甚至从小这观念就融入到意识当中，于是贷款就变成了如吃饭穿衣一样，为人生一件事，于是对贷款的时长并不太在意。。。所以，有很多的人到老死仍然还没还清贷款（如教育贷款）。再加上，美国遗产税非常高，所以在财产上的“留给子孙后代”意愿不强，甚至有得到遗产就破产的情况发生，这在财产处理（如还贷）方面更没那么紧迫。<br/><br/>中国就不一样，很多中国人不喜欢欠债，能一次性给钱的就一次性，咬咬牙能20年还清的，绝不选30年，即使没能力，东拼西凑弄个天天吃泡面（为面子为老婆为子孙后代之类）也得买房买车。。。压力自然就感觉很大。
                </div>
                <div class="actions">
                                        <a class="like " data-comment-like-btn data-comment-id="296124815">
                        <i class="like outline icon"></i> <span data-comment-like-count data-comment-id="296124815">9</span> 赞
                    </a>
                                                            <a class="ban" ban-report data-id="296124815" data-obj-type="16" data-url="https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer#rpl_296124815">
                        <i class="ban icon"></i> 举报
                    </a>
                </div>
            </div>
        </div>
                        
            <div class="comment" data-comment-id="296124811" data-comment-user-id="995637">
            <a class="ui circular image avatar" href="https://my.oschina.net/u/995637" target="_blank">
                                    <div class="osc-avatar small-portrait _35x35" title="棱语曲" data-user-id="995637">
            <img src="https://static.oschina.net/uploads/user/497/995637_50.jpg?t=1523848954000" alt="棱语曲" title="棱语曲"/>
        </div>
                        </a>
            <div class="content">
                <a class="author" href="https://my.oschina.net/u/995637" name="rpl_296124811" target="_blank">棱语曲</a>
                <div class="metadata">
                    <span class="date">2019-05-19 10:45</span>
                </div>
                <div class="text" data-emoji-render>
                    <div class='ref'><h4>引用来自“久峰爱玩火”的评论</h4>&#20026;&#20160;&#20040;&#22269;&#22806;&#24320;&#28304;&#32500;&#25252;&#36825;&#20040;&#20248;&#31168;</div>如果国内不是996的体系，其实也会有。国内的顶级互联网公司基本上都是996的体系，这就决定了程序员没有更多的精力用在别的地方
                </div>
                <div class="actions">
                                        <a class="like " data-comment-like-btn data-comment-id="296124811">
                        <i class="like outline icon"></i> <span data-comment-like-count data-comment-id="296124811">0</span> 赞
                    </a>
                                                            <a class="ban" ban-report data-id="296124811" data-obj-type="16" data-url="https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer#rpl_296124811">
                        <i class="ban icon"></i> 举报
                    </a>
                </div>
            </div>
        </div>
                        
            <div class="comment" data-comment-id="296124810" data-comment-user-id="561214">
            <a class="ui circular image avatar" href="https://my.oschina.net/eechen" target="_blank">
                                    <div class="osc-avatar small-portrait _35x35" title="eechen" data-user-id="561214">
            <img src="https://static.oschina.net/uploads/user/280/561214_50.jpeg?t=1474368642000" alt="eechen" title="eechen"/>
        </div>
                        </a>
            <div class="content">
                <a class="author" href="https://my.oschina.net/eechen" name="rpl_296124810" target="_blank">eechen</a>
                <div class="metadata">
                    <span class="date">2019-05-19 10:44</span>
                </div>
                <div class="text" data-emoji-render>
                    像Linus Torvalds那样对于自己不认可的设计,直接就怼,Redis作者就没有那么多困扰了.
                </div>
                <div class="actions">
                                        <a class="like " data-comment-like-btn data-comment-id="296124810">
                        <i class="like outline icon"></i> <span data-comment-like-count data-comment-id="296124810">9</span> 赞
                    </a>
                                                            <a class="ban" ban-report data-id="296124810" data-obj-type="16" data-url="https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer#rpl_296124810">
                        <i class="ban icon"></i> 举报
                    </a>
                </div>
            </div>
        </div>
                        
            <div class="comment" data-comment-id="296124807" data-comment-user-id="2009560">
            <a class="ui circular image avatar" href="https://my.oschina.net/u/2009560" target="_blank">
                                    <div class="osc-avatar small-portrait _35x35" title="皇虫" data-user-id="2009560">
            <img src="https://oscimg.oschina.net/oscnet/up-yyoac8snb2ghyy4braezibaoarsmdi0b!/both/50x50?t=1543451531000" alt="皇虫" title="皇虫"/>
        </div>
                        </a>
            <div class="content">
                <a class="author" href="https://my.oschina.net/u/2009560" name="rpl_296124807" target="_blank">皇虫</a>
                <div class="metadata">
                    <span class="date">2019-05-19 10:21</span>
                </div>
                <div class="text" data-emoji-render>
                    有错别字。。Rsdis  实为 Redis
                </div>
                <div class="actions">
                                        <a class="like " data-comment-like-btn data-comment-id="296124807">
                        <i class="like outline icon"></i> <span data-comment-like-count data-comment-id="296124807">0</span> 赞
                    </a>
                                                            <a class="ban" ban-report data-id="296124807" data-obj-type="16" data-url="https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer#rpl_296124807">
                        <i class="ban icon"></i> 举报
                    </a>
                </div>
            </div>
        </div>
                
        <div class="ui basic center aligned segment pagination-wrap">
                                                                                                <div class="ui pagination menu">
                                                    <a class="disabled item prev-item">&lt;</a>
                                                                                                                                            <a href="?p=1" class="active item page-num-item">1</a>
                                                                                <a href="?p=2" class="item page-num-item">2</a>
                                                                                                                        <a href="?p=2" class="item next-item">&gt;</a>
                                                            </div>
                </div>
    </div>

                <div id="commentForm">
                        <form class="ui reply form comment-form" :class="{loading: commentPublishLoading}">
                <div class="field">
                    <textarea rows="4" placeholder="在这里发表你对此文的观点"
                              v-model.trim="commentContent" :maxlength="commentMaxLength"
                              ref="commentTextarea" class="disabled-resize" :disabled="commentPublishLoading"
                              @keydown="commentContentOnKeyDown"></textarea>
                </div>
                <div class="field foot-bar">
                    <div class="ui horizontal link list toolbox">
                        <a class="item" data-popup="toolbox-emoji" ref="showEmojiBox"><i class="smile icon"></i>插入表情</a>
                                                <div class="ui popup bottom left transition hidden toolbox-popup toolbox-emoji">
                            <div class="emoji-wrapper">
                                <div class="ui secondary pointing menu">
                                    <a v-for="(emoji, index) in emojiList"
                                       class="item" :class="{active: curEmojiType === emoji.type}"
                                       @click="curEmojiType = emoji.type">{{ emoji.type }}</a>
                                </div>
                                <div class="emoji-list">
                                    <div class="ui ten column padded grid">
                                        <div class="column" v-for="emojiItem in curEmojiItems">
                                            <div class="emoji-item" :title="emojiItem" :data-emoji="emojiItem"
                                                 @click="insertEmoji(emojiItem)"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="item" @click="insertProject"><i class="hashtag icon"></i>插入软件</a>
                    </div>
                    <div class="count" v-text="commentCountText"></div>
                    <div class="ui primary labeled icon button right floated" :class="{disabled: commentContentIsEmpty}"
                         @click="publishComment" :disabled="commentPublishLoading">
                        <i class="icon edit"></i> 发表评论
                    </div>
                </div>
            </form>

            <div class="ui mini message hidden" :class="tipMessage.className"
                 :style="{display: tipMessage.show ? 'block' : 'none'}"><i class="icon info"></i> <span v-html="tipMessage.content"></div>
        </div>
    </div>

<div class="ui mini delete-comment modal">
    <div class="header">删除一条评论</div>
    <div class="content">
        <p>评论删除后，数据将无法恢复</p>
    </div>
    <div class="actions">
        <div class="ui positive button">取消</div>
        <div class="ui negative button">确定</div>
    </div>
</div>

                            </div>

                        <div class="ui basic segment article-list article-footer-list">
                <div class="scroll-tab hidden-scroll">
                    <div class="ui green pointing secondary massive menu newsDetail-tab">
                        <a class="active item" data-tab="relArticleList">相关文章</a>
                        <a class="item" data-tab="newArticleList">最新文章</a>
                    </div>
                </div>
                <div class="ui basic segment active tab article-list" data-tab="relArticleList" id="relArticleList">
                                          
    <div class="ui very relaxed items list-container news-detail-list-container">
                                    <div class="item news-item">
                    <div class="content">
                        <h3 class="header"><a href="http://www.techug.com/post/redis-master-slave-terminology.html" target="_blank" title="数据库术语master-slave政治不正确，Redis 作者被迫修改">数据库术语master-slave政治不正确，Redis 作者被迫修改</a></h3>
                        <div class="description">
                            <p class="line-clamp">相信在座各位的开发者都不会对 Redis 的主从模式(master-slave)感到陌生。Redis 中的主从模式事实上也是源自 MySQL 中同名的一个概念，是同步数据的一种手段。在这样的场景下，master-slave ...</p>
                        </div>
                        <div class="extra">
                            <div class="ui horizontal list">
                                <div class="item">程序师</div>
                                <div class="item">2018/09/10</div>

                                <div class="item"><i class="comment outline icon"></i> 0</div>
                            </div>
                        </div>
                    </div>
                                                        </div>
                                                <div class="item news-item">
                    <div class="content">
                        <h3 class="header"><a href="https://www.oschina.net/news/99797/redis-master-slave-terminology" target="_blank" title="太无奈！Redis 作者被迫修改 master-slave 架构的描述">太无奈！Redis 作者被迫修改 master-slave 架构的描述</a></h3>
                        <div class="description">
                            <p class="line-clamp">相信在座各位的开发者都不会对 Redis 的主从模式(master-slave)感到陌生。Redis 中的主从模式事实上也是源自 MySQL 中同名的一个概念，是同步数据的一种手段。在这样的场景下，master-slave ...</p>
                        </div>
                        <div class="extra">
                            <div class="ui horizontal list">
                                <div class="item">局长</div>
                                <div class="item">2018/09/10</div>

                                <div class="item"><i class="comment outline icon"></i> 59</div>
                            </div>
                        </div>
                    </div>
                                                        </div>
                                                <div class="item news-item">
                    <div class="content">
                        <h3 class="header"><a href="https://my.oschina.net/u/3959468/blog/2251337" target="_blank" title="漫画 | Redis常见面试问题">漫画 | Redis常见面试问题</a></h3>
                        <div class="description">
                            <p class="line-clamp">最近，在为接下来的一场面试做准备，其中的内容包括redis，而且redis是重点内容。 Redis是一个开源的使用ANSI C语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供...</p>
                        </div>
                        <div class="extra">
                            <div class="ui horizontal list">
                                <div class="item">微笑向暖wx</div>
                                <div class="item">2018/10/23</div>

                                <div class="item"><i class="comment outline icon"></i> 0</div>
                            </div>
                        </div>
                    </div>
                                                        </div>
                                                <div class="item news-item">
                    <div class="content">
                        <h3 class="header"><a href="https://www.oschina.net/news/9326" target="_blank" title="Redis 2.0 RC 发布，高性能的K/V数据库">Redis 2.0 RC 发布，高性能的K/V数据库</a></h3>
                        <div class="description">
                            <p class="line-clamp">redis 是一个高性能的key-value数据库。 redis的出现，很大程度补偿了memcached这类keyvalue存储的不足，在部 分场合可以对关系数据库起到很好的补充作用。它提供了Python，Ruby，Erlang，P...</p>
                        </div>
                        <div class="extra">
                            <div class="ui horizontal list">
                                <div class="item">红薯</div>
                                <div class="item">2010/05/24</div>

                                <div class="item"><i class="comment outline icon"></i> 0</div>
                            </div>
                        </div>
                    </div>
                                                        </div>
                                                <div class="item news-item">
                    <div class="content">
                        <h3 class="header"><a href="https://my.oschina.net/u/1386215/blog/1558175" target="_blank" title="Redis RedLock 完美的分布式锁么？">Redis RedLock 完美的分布式锁么？</a></h3>
                        <div class="description">
                            <p class="line-clamp">上周花了点时间研究了 Redis 的作者提的 RedLock 的算法来实现一个分布式锁，文章地址。在官方的文档最下面发现了这样一句话。 Analysis of RedLock Martin Kleppmann analyzed Redlock here...</p>
                        </div>
                        <div class="extra">
                            <div class="ui horizontal list">
                                <div class="item">xilidou</div>
                                <div class="item">2017/10/30</div>

                                <div class="item"><i class="comment outline icon"></i> 0</div>
                            </div>
                        </div>
                    </div>
                                                        </div>
                        </div>
    <div class="page-load-status">
        <p class="infinite-scroll-request">
            <i class="ui active small inline loader" style="display: none;"></i>
        </p>
        <p class="infinite-scroll-last">没有更多内容</p>
        <p class="infinite-scroll-error">加载失败，请刷新页面</p>
    </div>
    <a class="ui fluid button load-more-button">加载更多</a>
                <p class="pagination">
            <a class="rel-pagination pagination__next" style="display: none" href="https://www.oschina.net/news/widgets/_news_detail_list_rel?obj=106799&p=2&type=ajax">下一页</a>
        </p>
                    </div>
                <div class="ui basic segment tab article-list" data-tab="newArticleList" id="newArticleList">
                                          

    <div class="ui very relaxed items list-container news-detail-list-container">
                                    <div class="item news-item">
                    <div class="content">
                        <h3 class="header"><a href="https://www.oschina.net/news/106866/sofa-rpc-5-5-3-released" target="_blank" title="SOFARPC 发布 v5.5.3，来自蚂蚁金服的 Java RPC 框架">SOFARPC 发布 v5.5.3，来自蚂蚁金服的 Java RPC 框架</a></h3>
                        <div class="description">
                            <p class="line-clamp">本期发布内容 1. 摘要 这是一个 Bug Fix 的版本，鼓励目前正在使用 5.5.x 版本的用户升级。 更多的变更和功能细节, 请参考 5.5.3 里程碑的 Issue 和 PR。 2. 兼容性 没有不兼容问题 3. BUG 修...</p>
                        </div>
                        <div class="extra">
                            <div class="ui horizontal list">
                                <div class="item">SOFAStack</div>
                                <div class="item">昨天 16:38</div>

                                <div class="item"><i class="comment outline icon"></i> 3</div>
                            </div>
                        </div>
                    </div>
                                                                <div class="images">
                            <a class="ui small image" href="https://www.oschina.net/news/106866/sofa-rpc-5-5-3-released" target="_blank">
                                <img src="https://static.oschina.net/uploads/logo/sofarpc_8RjOc.png" alt="" data-img-render>
                            </a>
                        </div>
                                    </div>
                                                <div class="item news-item">
                    <div class="content">
                        <h3 class="header"><a href="https://www.oschina.net/news/106864/x-spreadsheet-1-0-23-released" target="_blank" title="x-spreadsheet 1.0.23 发布，在线表格组件">x-spreadsheet 1.0.23 发布，在线表格组件</a></h3>
                        <div class="description">
                            <p class="line-clamp">x-spreadsheet 是一个在线表格组件，类似 google sheet github: github.com/myliang/x-spreadsheet demo: myliang.github.io/x-spreadsheet/ 这次主要更新的内容： 　排序之后修改数据行错误...</p>
                        </div>
                        <div class="extra">
                            <div class="ui horizontal list">
                                <div class="item">myliang</div>
                                <div class="item">昨天 14:43</div>

                                <div class="item"><i class="comment outline icon"></i> 2</div>
                            </div>
                        </div>
                    </div>
                                                        </div>
                                                <div class="item news-item">
                    <div class="content">
                        <h3 class="header"><a href="https://www.oschina.net/news/106863/what-about-ear-and-asf" target="_blank" title="所以 Apache 基金会不受美国法律约束？">所以 Apache 基金会不受美国法律约束？</a></h3>
                        <div class="description">
                            <p class="line-clamp">开源中国昨天发布的一篇文章《开源界也要注意，Apache 基金会与 GitHub 都受美国法律约束》引发了开源届乃至整个 IT 行业的热烈讨论，其中有个别声音认为文章的说法有误，甚至制造了恐慌。 ...</p>
                        </div>
                        <div class="extra">
                            <div class="ui horizontal list">
                                <div class="item">oschina</div>
                                <div class="item">昨天 14:07</div>

                                <div class="item"><i class="comment outline icon"></i> 39</div>
                            </div>
                        </div>
                    </div>
                                                                <div class="images">
                            <a class="ui small image" href="https://www.oschina.net/news/106863/what-about-ear-and-asf" target="_blank">
                                <img src="https://static.oschina.net/img/logo/apache.gif" alt="" data-img-render>
                            </a>
                        </div>
                                    </div>
                                                <div class="item news-item">
                    <div class="content">
                        <h3 class="header"><a href="https://www.oschina.net/news/106862/seata-0-5-2-released" target="_blank" title="Seata 发布 0.5.2，增加对配置中心 Consul 支持等">Seata 发布 0.5.2，增加对配置中心 Consul 支持等</a></h3>
                        <div class="description">
                            <p class="line-clamp">Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。 本次更新主要内容如下： 功能特性 [#988] 增加配置中心Consul支持 [#1043] 增加sofa-rpc支持 Bug 修复及优化...</p>
                        </div>
                        <div class="extra">
                            <div class="ui horizontal list">
                                <div class="item">阿里巴巴中间件</div>
                                <div class="item">昨天 12:54</div>

                                <div class="item"><i class="comment outline icon"></i> 3</div>
                            </div>
                        </div>
                    </div>
                                                        </div>
                                                <div class="item news-item">
                    <div class="content">
                        <h3 class="header"><a href="https://www.oschina.net/news/106861/django-simpleui-2-1-released" target="_blank" title="django simpleui 2.1 正式版发布，带来全新体验和众多更新">django simpleui 2.1 正式版发布，带来全新体验和众多更新</a></h3>
                        <div class="description">
                            <p class="line-clamp">simpleui开源地址 Github：https://github.com/newpanjing/simpleui 码云：https://gitee.com/tompeppa/simpleui django-simpleui 是一个基于vue+element-ui开发的 django admin主题包，在使...</p>
                        </div>
                        <div class="extra">
                            <div class="ui horizontal list">
                                <div class="item">开源情报站</div>
                                <div class="item">昨天 12:01</div>

                                <div class="item"><i class="comment outline icon"></i> 6</div>
                            </div>
                        </div>
                    </div>
                                                                <div class="images">
                            <a class="ui small image" href="https://www.oschina.net/news/106861/django-simpleui-2-1-released" target="_blank">
                                <img src="https://static.oschina.net/uploads/logo/django-simpleui_OPWGm.png" alt="" data-img-render>
                            </a>
                        </div>
                                    </div>
                        </div>
    <div class="page-load-status">
        <p class="infinite-scroll-request">
            <i class="ui active small inline loader" style="display: none"></i>
        </p>
        <p class="infinite-scroll-last">没有更多内容</p>
        <p class="infinite-scroll-error">加载失败，请刷新页面</p>
    </div>
    <a class="ui fluid button load-more-button">加载更多</a>
                <p class="pagination">
            <a class="news-pagination pagination__next" style="display: none" href="https://www.oschina.net/news/widgets/_news_detail_list_news?p=2&type=ajax">下一页</a>
        </p>
                    </div>
            </div>
        </div>
        <div class="four wide widescreen screen four wide large screen four wide computer sixteen wide tablet sixteen wide mobile column sidebar news-sidebar">
            
<div class="ad-wrap">
                            <a name="www_news_details_sidebar_1"/>
            <a  data-traceid="www_news_details_sidebar_1_ad"
                                  data-tracepid="www_news_details_sidebar_1"   href="http://adfarm.mediaplex.com/ad/ck/10592-210885-41454-360"
                                  target="_blank" title="dell">
                <img src="https://static.oschina.net/uploads/cooperation/www_news_details_sidebar_1_uZoDs.jpg" width="250" height="250">
            </a>
                        </div>



<div class="section articles-list">
    <div class="ui items">
        <h3 class="ui header">热门资讯</h3>
                    <div class="item">
                <div class="content">
                    <a class="header" href="https://www.oschina.net/news/106836/opensource-ourself" target="_blank">开源界也要注意，Apache 基金会与 GitHub 都受美国法律约束</a>
                    <div class="extra">
                        <div class="ui horizontal mini list">
                            <div class="item"><a href="https://my.oschina.net/osadmin" target="_blank">oschina</a></div>
                            <div class="item">前天 16:54</div>
                            <div class="item"><a href="https://www.oschina.net/news/106836/opensource-ourself#comments" target="_blank"><i class="comment outline icon"></i> 109 评论</a></div>
                        </div>
                    </div>
                </div>
            </div>
                    <div class="item">
                <div class="content">
                    <a class="header" href="https://www.oschina.net/news/106700/php-in-2019" target="_blank">PHP 早已不是十年前的模样</a>
                    <div class="extra">
                        <div class="ui horizontal mini list">
                            <div class="item"><a href="https://my.oschina.net/u/3820517" target="_blank">h4cd</a></div>
                            <div class="item">05/15 07:43</div>
                            <div class="item"><a href="https://www.oschina.net/news/106700/php-in-2019#comments" target="_blank"><i class="comment outline icon"></i> 86 评论</a></div>
                        </div>
                    </div>
                </div>
            </div>
                    <div class="item">
                <div class="content">
                    <a class="header" href="https://www.oschina.net/news/106821/google-huawei-android-suspension" target="_blank">谷歌限制华为使用 Android</a>
                    <div class="extra">
                        <div class="ui horizontal mini list">
                            <div class="item"><a href="https://my.oschina.net/hardbone" target="_blank">局长</a></div>
                            <div class="item">前天 08:27</div>
                            <div class="item"><a href="https://www.oschina.net/news/106821/google-huawei-android-suspension#comments" target="_blank"><i class="comment outline icon"></i> 174 评论</a></div>
                        </div>
                    </div>
                </div>
            </div>
                    <div class="item">
                <div class="content">
                    <a class="header" href="https://www.oschina.net/news/106730/microsoft-open-sources-sptag" target="_blank">微软开源了 Bing 搜索背后的关键算法</a>
                    <div class="extra">
                        <div class="ui horizontal mini list">
                            <div class="item"><a href="https://my.oschina.net/u/4105562" target="_blank">xplanet</a></div>
                            <div class="item">05/16 08:22</div>
                            <div class="item"><a href="https://www.oschina.net/news/106730/microsoft-open-sources-sptag#comments" target="_blank"><i class="comment outline icon"></i> 29 评论</a></div>
                        </div>
                    </div>
                </div>
            </div>
                    <div class="item">
                <div class="content">
                    <a class="header" href="https://www.oschina.net/news/106801/south-korean-government-switch-to-linux" target="_blank">韩国政府计划从 Windows 7 迁移到 Linux</a>
                    <div class="extra">
                        <div class="ui horizontal mini list">
                            <div class="item"><a href="https://my.oschina.net/hardbone" target="_blank">局长</a></div>
                            <div class="item">05/19 07:56</div>
                            <div class="item"><a href="https://www.oschina.net/news/106801/south-korean-government-switch-to-linux#comments" target="_blank"><i class="comment outline icon"></i> 79 评论</a></div>
                        </div>
                    </div>
                </div>
            </div>
                    <div class="item">
                <div class="content">
                    <a class="header" href="https://www.oschina.net/news/106756/opensource-advocator-worried-about-microsoft-s-monopoly" target="_blank">开源倡导者担忧微软垄断开源系统工具</a>
                    <div class="extra">
                        <div class="ui horizontal mini list">
                            <div class="item"><a href="https://my.oschina.net/u/4062684" target="_blank">段段段落</a></div>
                            <div class="item">05/17 07:23</div>
                            <div class="item"><a href="https://www.oschina.net/news/106756/opensource-advocator-worried-about-microsoft-s-monopoly#comments" target="_blank"><i class="comment outline icon"></i> 54 评论</a></div>
                        </div>
                    </div>
                </div>
            </div>
                    <div class="item">
                <div class="content">
                    <a class="header" href="https://www.oschina.net/news/106834/android-responsed-huawei-suspension" target="_blank">Android 官方：Google Play 等服务仍然可用</a>
                    <div class="extra">
                        <div class="ui horizontal mini list">
                            <div class="item"><a href="https://my.oschina.net/u/3820517" target="_blank">h4cd</a></div>
                            <div class="item">前天 15:00</div>
                            <div class="item"><a href="https://www.oschina.net/news/106834/android-responsed-huawei-suspension#comments" target="_blank"><i class="comment outline icon"></i> 60 评论</a></div>
                        </div>
                    </div>
                </div>
            </div>
                    <div class="item">
                <div class="content">
                    <a class="header" href="https://www.oschina.net/news/106863/what-about-ear-and-asf" target="_blank">所以 Apache 基金会不受美国法律约束？</a>
                    <div class="extra">
                        <div class="ui horizontal mini list">
                            <div class="item"><a href="https://my.oschina.net/osadmin" target="_blank">oschina</a></div>
                            <div class="item">昨天 14:07</div>
                            <div class="item"><a href="https://www.oschina.net/news/106863/what-about-ear-and-asf#comments" target="_blank"><i class="comment outline icon"></i> 39 评论</a></div>
                        </div>
                    </div>
                </div>
            </div>
                    <div class="item">
                <div class="content">
                    <a class="header" href="https://www.oschina.net/news/106710/intel-cpu-exploit-zombieload" target="_blank">Intel 曝出影响 2011 年以来几乎所有芯片的漏洞，各大公司打补丁中</a>
                    <div class="extra">
                        <div class="ui horizontal mini list">
                            <div class="item"><a href="https://my.oschina.net/u/4105562" target="_blank">xplanet</a></div>
                            <div class="item">05/15 15:29</div>
                            <div class="item"><a href="https://www.oschina.net/news/106710/intel-cpu-exploit-zombieload#comments" target="_blank"><i class="comment outline icon"></i> 18 评论</a></div>
                        </div>
                    </div>
                </div>
            </div>
                    <div class="item">
                <div class="content">
                    <a class="header" href="https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer" target="_blank">Redis 作者 antirez：开源维护者的挣扎</a>
                    <div class="extra">
                        <div class="ui horizontal mini list">
                            <div class="item"><a href="https://my.oschina.net/u/4105562" target="_blank">xplanet</a></div>
                            <div class="item">05/19 07:51</div>
                            <div class="item"><a href="https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer#comments" target="_blank"><i class="comment outline icon"></i> 14 评论</a></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
</div>

<div class="ad-wrap">
                            <div name="www_news_sidebar_1"  data-traceid="www_news_sidebar_1_ad"
                 data-tracepid="www_news_sidebar_1" >
                

            </div>
            </div>

<div class="ad-wrap">
                            <a name="www_news_sidebar_2"/>
            <a  data-traceid="www_news_sidebar_2_ad"
                                  data-tracepid="www_news_sidebar_2"   href="https://events.linuxfoundation.cn/events/kubecon-cloudnativecon-china-2019/?bag_track=oschina-question-banner&utm_source=oschina-question-banner&utm_medium=banner&utm_campaign=kccnc%20china"
                                  target="_blank" title="KubeCon2019">
                <img src="https://static.oschina.net/uploads/cooperation/www_news_sidebar_2_LOEgd.gif" width="280" height="280">
            </a>
                        </div>
        </div>
    </div>
</div>

<script>
    // 百度分享
    window._bd_share_config = {
        common : {
            bdText : 'Redis 作者 antirez：开源维护者的挣扎 - OSCHINA',
            bdDesc : '这两天，一篇名为《开源维护者的挣扎》的文章被迅速顶至 Hacker News 首页，这是 Redis 作者 antirez 发布的最新博客。 几个月前，一名开源项目的维护者向 antirez 发邮件，倾诉自己苦心维持项目多年，这或多或少...',
            bdUrl  : 'https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer',
            bdPic  : 'https://static.oschina.net/img/logo/redis.gif'
        },
        share : [{
            bdSize : 16
        }]
    };
    with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='https://static.oschina.net/new-osc/js/utils/plugins/bdshare_api/share.js?v='+~(-new Date()/36e5)];
</script>
    
<script type="text/javascript" src="https://www.oschina.net/webVisit/news?id=106799"></script>

                        
            </div>
        </div>

                <div id="footer" class="ui vertical footer segment mb-hide">
    <div class="ui container">
        <div class="ui grid">
            <div class="eight wide mobile four wide tablet four wide computer column">
                <h4 class="ui header">OSCHINA 社区</h4>
                <div class="ui link list">
                    <a class="item" href="https://www.oschina.net/home/aboutosc" target="_blank">关于我们</a>
                    <a class="item" href="https://www.oschina.net/home/aboutosc" target="_blank">联系我们</a>
                    <a class="item" href="https://www.oschina.net/home/aboutosc#partners#" target="_blank">合作伙伴</a>
                    <a class="item" href="https://www.oschina.net/openapi" target="_blank">Open API</a>
                </div>
            </div>
            <div class="eight wide mobile four wide tablet four wide computer column">
                <h4 class="ui header">在线工具</h4>
                <div class="ui link list">
                    <a class="item" href="https://gitee.com/?from=osc-bottom" target="_blank">码云 Gitee.com</a>
                    <a class="item" href="https://gitee.com/enterprises?from=osc-bottom" target="_blank">企业研发管理</a>
                    <a class="item" href="https://copycat.gitee.com/?from=osc-bottom" target="_blank">CopyCat-代码克隆检测</a>
                    <a class="item" href="https://tool.oschina.net" target="_blank">实用在线工具</a>
                </div>
            </div>
            <div class="center aligned eight wide mobile two wide tablet two wide computer column">
                <h4 class="ui header">微信公众号</h4>
                <img src="https://static.oschina.net/new-osc/img/wechat_qrcode.jpg?t=1484694603000" alt="微信公众号"/>
            </div>
            <div class="center aligned eight wide mobile six wide tablet six wide computer column">
                <h3 class="ui header">OSCHINA APP</h3>
                <p>聚合全网技术文章，根据你的阅读喜好进行个性推荐</p>
                <a href="https://www.oschina.net/app" target="_blank" class="ui large primary button">下载 APP</a>
            </div>
        </div>
    </div>
</div>
<div id="copyright">
    <div class="ui container">
        <div class="ui clearing basic segment">
            <div class="ui left floated horizontal link list">
                <div class="item">©OSCHINA(OSChina.NET)</div>
                <div class="item mb-hide">工信部</div>
                <a class="item mb-hide" href="http://www.copu.org.cn/" target="_blank" title="开源软件推进联盟">开源软件推进联盟</a>
                <div class="item mb-hide">指定官方社区</div>
            </div>
            <div class="ui right floated horizontal link list">
                <div class="item mb-hide">深圳市奥思网络科技有限公司版权所有</div>
                <a href="http://beian.miit.gov.cn/" target="_blank" class="item">粤ICP备12009483号-3</a>
            </div>
        </div>
    </div>
</div>    </div>
                                                        <div class="back-to-top back-to-top-toggle">
        <div class="icon"><img src="https://static.oschina.net/new-osc/img/icon/back-to-top.svg" alt="返回顶部"></div>
        <div class="text">顶部</div>
    </div>

        <script src="https://static.oschina.net/new-osc/js/utils/semantic-ui/semantic.min.js?t=1535098170000"></script>
    <script src="https://static.oschina.net/new-osc/js/utils/jweixin-1.2.0.js"></script>
                <script type="text/javascript" src="https://static.oschina.net/new-osc/dist/js/web.eddfefc3.js"></script>                
<script>
    (function(){
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https'){
            bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
        }
        else{
            bp.src = 'http://push.zhanzhang.baidu.com/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
    })();
</script>
<script>
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?a411c4d1664dd70048ee98afe7b28f0b";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>
                
<script type='text/javascript'>
    !function(e,t,n,g,i){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},n=t.createElement("script"),tag=t.getElementsByTagName("script")[0],n.async=1,n.src=('https:'==document.location.protocol?'https://':'http://')+g,tag.parentNode.insertBefore(n,tag)}(window,document,"script","assets.growingio.com/2.1/gio.js","gio");
    gio('init','89b266b986554bc7', {});
    gio('send');
</script>
    </body>
</html>
<!-- Generated by oschina (init:1[ms],page:90[ms],ip:222.209.75.252) //-->`
