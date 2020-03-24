rule();
        $("#cbCopy").change(function () {
            rule();
        });

        var lxkey =
            `海阔视界规则分享，当前分享的是：首页频道￥home_rule￥{"title":"龙轩导航","url":"http://api.ilxdh.com/navig/classify/list?fid=fyclass;post","col_type":"text_3","class_name":"生活&影视&搜索&软件工具&设计素材&音乐读物&学习提升","class_url":"167&171&172&173&174&176&177","area_name":"","area_url":"","year_name":"","year_url":"","find_rule":"js: var json = JSON.parse(getResCode());\\r\\nvar list = json.data;\\r\\nvar res = {};\\r\\nvar d = [];\\r\\nfor (var i = 0; i < list.length; i++) {\\r\\n    try {\\r\\n        var r = {};\\r\\n        var j = list[i];\\r\\n        r.title = j.name;\\r\\n        r.col_type = 'text_1';\\r\\n        d.push(r);\\r\\n        var items = j.web.map(data => ({\\r\\n            title: data.name,\\r\\n            url: data.url\\r\\n        }));\\r\\n        d.push.apply(d,items);\\r\\n    } catch (e) {}\\r\\n}\\r\\nres.data = d;\\r\\nsetHomeResult(res);","search_url":"","titleColor":"","group":"①常用","searchFind":""}`;
        var jbtkey =
            `海阔视界规则分享，当前分享的是：首页频道￥home_rule￥{"title":"聚BT","url":"https://jubt.gq/cn/index.html","col_type":"text_3","class_name":"在线影视站&磁力搜索引擎&磁力影视站&影视APP&磁力APP&磁力软件&云盘搜索&磁力离线下载&浏览器扩展&油猴脚本","class_url":"在线影视站&磁力搜索引擎&磁力影视站&影视APP&磁力APP&磁力软件&云盘搜索&磁力离线下载&浏览器扩展&油猴脚本","area_name":"","area_url":"","year_name":"","year_url":"","find_rule":"js: var html = getResCode();\\r\\nvar json = JSON.parse(getRule());\\r\\nvar list = html.split('<!-- ' + json.class_url + ' -->')[1].split('<!-- END ' + json.class_url + ' -->')[0].split('</strong>');\\r\\nvar res = {};\\r\\nvar d = [];\\r\\nfor (var i = 1; i < list.length; i++) {\\r\\n    try {\\r\\n        var r = {};\\r\\n        var j = list[i];\\r\\n        r.url = j.split('data-original-title=\\"')[1].split('\\"')[0];\\r\\n        title = j.split('<strong>')[1].split('</strong>')[0];\\r\\n        if (title.indexOf('|') >= 0) r.title = title.split(' ')[0];\\r\\n        else r.title = title;\\r\\n        d.push(r);\\r\\n    } catch (e) {}\\r\\n}\\r\\nres.data = d;\\r\\nsetHomeResult(res);","search_url":"","titleColor":"","group":"①常用","searchFind":""}`;
        var lmkey =
            `海阔视界规则分享，当前分享的是：首页频道￥home_rule￥{"title":"龙喵网","url":"https://ailongmiao.com/fyclass/;get;utf-8;{User-Agent@Windows}","col_type":"text_3","class_name":"影视视频&购物省钱&生活娱乐&自学导航&SEO运营&设计导航&软件资源&前端开发","class_url":"movie&shop&life&study&seo&design&download&web","area_name":"","area_url":"","year_name":"","year_url":"","find_rule":"js: var html = getResCode();\\r\\nvar list = html.split('<h2><a href=\\"javascript:;\\">');\\r\\nvar res = {};\\r\\nvar d = [];\\r\\nfor (var i = 1; i < list.length; i++) {\\r\\n    try {\\r\\n        var r = {};\\r\\n        var j = list[i];\\r\\n        r.title = j.split('</a>')[0];\\r\\n        r.col_type = 'text_1';\\r\\n        d.push(r);\\r\\n        var list2 = j.split('<a rel=\\"external nofollow\\"')\\r\\n        for (var i2 = 0; i2 < list2.length; i2++) {\\r\\n            try {\\r\\n                var r2 = {};\\r\\n                var j2 = list2[i2];\\r\\n                r2.title = j2.split('\\">')[1].split('</a>')[0];;\\r\\n                r2.url = j2.split('href=\\"')[1].split('\\"')[0];\\r\\n                d.push(r2);\\r\\n            } catch (e) {}\\r\\n        }\\r\\n    } catch (e) {}\\r\\n}\\r\\nres.data = d;\\r\\nsetHomeResult(res);","search_url":"","titleColor":"","group":"①常用","searchFind":""}`;
        var xkzkey =
            `海阔视界规则分享，当前分享的是：首页频道￥home_rule￥{"title":"馨客栈导航","url":"http://mackxin.com/nav.html#xininnclass;get;utf-8;{User-Agent@Windows}","col_type":"text_3","class_name":"客栈原创&搜索标签&栈主常用&论坛平台&省内信息&次元壁垒&知识学习&书籍阅读&软件资源&破冰世界&商城购物&资源搜索&微信社交&健康养生&工具合集&音乐天才&设计天才&摸鱼游戏&文件分享&科技资讯&浏览插件&视频下载&图片素材&图片工具&苹果管理&安卓开源&视频影院&在线杂乱&生成神器&新奇有趣&导航网站&PDF相关&硬件打印&偶尔用用&文库相关&PPT相关&运营学习&营销工具&数据平台&开源仓库","class_url":"01&02&03&04&05&06&07&08&09&10&11&12&13&14&15&16&17&18&19&20&21&22&23&24&25&26&27&28&29&30&31&32&33&34&35&36&37&38&39&40&41","area_name":"","area_url":"","year_name":"","year_url":"","find_rule":"js: var html = getResCode();\\r\\nvar json = JSON.parse(getRule());\\r\\nvar lis = html.split('id=\\"xininn'+json.class_url)[1].split('</section>')[0].split('</li>');\\r\\nvar res = {};\\r\\nvar d = [];\\r\\nfor (var i = 0; i < lis.length; i++) {\\r\\n    try {\\r\\n        var r = {};\\r\\n        var j = lis[i];\\r\\n        r.url = j.split('<li>')[1].split('href=\\"')[1].split('\\"')[0];\\r\\n        r.title = j.split('<li>')[1].split('blank\\">')[1].split('<')[0];\\r\\n        d.push(r);\\r\\n    } catch (e) {}\\r\\n}\\r\\nres.data = d;\\r\\nsetHomeResult(res);","search_url":"","titleColor":"","group":"①常用","searchFind":""}`;
        var wlhomekey =
            `海阔视界规则分享，当前分享的是：首页频道￥home_rule￥{"title":"卧龙影视","url":"http://v2.tgmmvip.com/wolong/gae/video/list?size=20&page=fypage@-1@&type=fyclass","col_type":"movie_3","class_name":"电视剧&电影&综艺&美剧&韩剧&动漫","class_url":"1&3&4&6&7&5","area_name":"","area_url":"","year_name":"","year_url":"","find_rule":"js: var json = {};\\r\\neval('json=' + getResCode());\\r\\nvar res = {};\\r\\nvar d = [];\\r\\nfor (var i = 0; i < json.data.items.length; i++) {\\r\\n    var r = {};\\r\\n    var j = json.data.items[i];\\r\\n    r.title = j.title;\\r\\n    if (j.updateText !== null && j.updateText !== undefined && j.updateText !== '') \\r\\n    r.desc = j.area+'·'+j.updateText;\\n    else\\n    r.desc = j.area;\\r\\n    r.pic_url = j.imgUrl;\\r\\n    r.url = 'http://v2.tgmmvip.com/wolong/gae/video/plays?platform=android&videoId='+j.videoId+'&ver=1.2.9';\\r\\n    if (r.title !== null && r.title !== undefined && r.title !== '') d.push(r);\\r\\n}\\r\\nres.data = d;\\r\\nsetHomeResult(res);","search_url":"http://v2.tgmmvip.com/wolong/gae/video/search?keyword=**&page=fypage@-1@&size=20","titleColor":"#673AB7","group":"②影搜","searchFind":"js: var json = {};\\r\\neval('json=' + getResCode());\\r\\nvar res = {};\\r\\nvar d = [];\\r\\nfor (var i = 0; i < json.data.items.length; i++) {\\r\\n    var r = {};\\r\\n    var j = json.data.items[i];\\r\\n    r.title = j.title;\\n    if (j.updateText !== null && j.updateText !== undefined && j.updateText !== '') \\r\\n    r.desc = j.area+'·'+j.updateText;\\n    else\\n    r.desc = j.area;\\r\\n    r.img = j.imgUrl;\\r\\n    r.content = j.introduction;\\r\\n    r.url = 'http://v2.tgmmvip.com/wolong/gae/video/plays?platform=android&videoId='+j.videoId+'&ver=1.2.9';\\r\\n    if (r.title !== null && r.title !== undefined && r.title !== '') d.push(r);\\r\\n}\\r\\nres.data = d;\\r\\nsetSearchResult(res);"}`;
        var wlmodkey =
            `海阔视界规则分享，当前分享的是：卧龙影视￥js_url￥v2.tgmmvip.com_卧龙影视@https://greasyfork.org/scripts/396575-%E5%8D%A7%E9%BE%99%E5%BD%B1%E8%A7%86/code/%E5%8D%A7%E9%BE%99%E5%BD%B1%E8%A7%86.user.js`;
        var wlwebkey =
            `海阔视界规则分享，当前分享的是：首页频道￥home_rule￥{"firstHeader":"class","title":"新卧龙影视","url":"http://v2.tgmmvip.com/wolong/gae/video/list?size=20&page=fypage@-1@&type=fyclass","col_type":"movie_3","class_name":"电视剧&电影&综艺&美剧&韩剧&动漫","class_url":"1&3&4&6&7&5","area_name":"","area_url":"","year_name":"","year_url":"","find_rule":"js: var json = {};\\r\\neval('json=' + getResCode());\\r\\nvar res = {};\\r\\nvar d = [];\\r\\nfor (var i = 0; i < json.data.items.length; i++) {\\r\\n    var r = {};\\r\\n    var j = json.data.items[i];\\r\\n    r.title = j.title;\\r\\n    if (j.updateText !== null && j.updateText !== undefined && j.updateText !== '') \\r\\n    r.desc = j.area+'·'+j.updateText;\\n    else\\n    r.desc = j.area;\\r\\n    r.pic_url = j.imgUrl;\\r\\n    r.url = 'https://qingbailingyan.gitee.io/plays/play.html#http://v2.tgmmvip.com/wolong/gae/video/detail?videoId='+j.videoId;\\r\\n    if (r.title !== null && r.title !== undefined && r.title !== '') d.push(r);\\r\\n}\\r\\nres.data = d;\\r\\nsetHomeResult(res);","search_url":"http://v2.tgmmvip.com/wolong/gae/video/search?keyword=**&page=fypage@-1@&size=20","titleColor":"#673AB7","group":"②影搜","searchFind":"js: var json = {};\\r\\neval('json=' + getResCode());\\r\\nvar res = {};\\r\\nvar d = [];\\r\\nfor (var i = 0; i < json.data.items.length; i++) {\\r\\n    var r = {};\\r\\n    var j = json.data.items[i];\\r\\n    r.title = j.title;\\n    if (j.updateText !== null && j.updateText !== undefined && j.updateText !== '') \\r\\n    r.desc = j.area+'·'+j.updateText;\\n    else\\n    r.desc = j.area;\\r\\n    r.img = j.imgUrl;\\r\\n    r.content = j.introduction;\\r\\n    r.url = 'https://qingbailingyan.gitee.io/plays/play.html#http://v2.tgmmvip.com/wolong/gae/video/detail?videoId='+j.videoId;\\r\\n    if (r.title !== null && r.title !== undefined && r.title !== '') d.push(r);\\r\\n}\\r\\nres.data = d;\\r\\nsetSearchResult(res);"}`;
        var wlfilekey =
            `海阔视界规则分享，当前分享的是：首页频道￥home_rule￥{"firstHeader":"class","title":"新卧龙影视本地","url":"http://v2.tgmmvip.com/wolong/gae/video/list?size=20&page=fypage@-1@&type=fyclass","col_type":"movie_3","class_name":"电视剧&电影&综艺&美剧&韩剧&动漫","class_url":"1&3&4&6&7&5","area_name":"","area_url":"","year_name":"","year_url":"","find_rule":"js: var json = {};\\r\\neval('json=' + getResCode());\\r\\nvar res = {};\\r\\nvar d = [];\\r\\nfor (var i = 0; i < json.data.items.length; i++) {\\r\\n    var r = {};\\r\\n    var j = json.data.items[i];\\r\\n    r.title = j.title;\\r\\n    if (j.updateText !== null && j.updateText !== undefined && j.updateText !== '') \\r\\n    r.desc = j.area+'·'+j.updateText;\\n    else\\n    r.desc = j.area;\\r\\n    r.pic_url = j.imgUrl;\\r\\n    r.url = 'file:///sdcard/Android/data/com.example.hikerview/files/Documents/play.html#http://v2.tgmmvip.com/wolong/gae/video/detail?videoId='+j.videoId;\\r\\n    if (r.title !== null && r.title !== undefined && r.title !== '') d.push(r);\\r\\n}\\r\\nres.data = d;\\r\\nsetHomeResult(res);","search_url":"http://v2.tgmmvip.com/wolong/gae/video/search?keyword=**&page=fypage@-1@&size=20","titleColor":"#673AB7","group":"②影搜","searchFind":"js: var json = {};\\r\\neval('json=' + getResCode());\\r\\nvar res = {};\\r\\nvar d = [];\\r\\nfor (var i = 0; i < json.data.items.length; i++) {\\r\\n    var r = {};\\r\\n    var j = json.data.items[i];\\r\\n    r.title = j.title;\\n    if (j.updateText !== null && j.updateText !== undefined && j.updateText !== '') \\r\\n    r.desc = j.area+'·'+j.updateText;\\n    else\\n    r.desc = j.area;\\r\\n    r.img = j.imgUrl;\\r\\n    r.content = j.introduction;\\r\\n    r.url = 'file:///sdcard/Android/data/com.example.hikerview/files/Documents/play.html#http://v2.tgmmvip.com/wolong/gae/video/detail?videoId='+j.videoId;\\r\\n    if (r.title !== null && r.title !== undefined && r.title !== '') d.push(r);\\r\\n}\\r\\nres.data = d;\\r\\nsetSearchResult(res);"}`;
        var k365homekey =
            `海阔视界规则分享，当前分享的是：首页频道￥home_rule￥{"title":"365视频","url":"https://api.365kqzs.cn:4976/api/programmes?limit=21&page=fypage@-1@&sort=fyyear&fyclass&location=fyarea","col_type":"movie_3","class_name":"全部&电视剧&电影&动画","class_url":"&category=5d2d6166eba3e50016617c92&category=5d2d616aeba3e50016617c93&category=5e23bced3204300029a2bd22","area_name":"全部&中国大陆&中国港台&欧美&日本&韩国&印度&泰国&其他","area_url":"&中国大陆&中国港台&欧美&日本&韩国&印度&泰国&其他","year_name":"最新&最热","year_url":"new&hot","find_rule":"js: var json = {};\\r\\neval('json=' + getResCode());\\r\\nvar res = {};\\r\\nvar d = [];\\r\\nfor (var i = 0; i < json.data.programmes.length; i++) {\\r\\n    var r = {};\\r\\n    var j = json.data.programmes[i];\\r\\n    r.title = j.title;\\r\\n    if (j.isSerial == true)\\r\\n        r.desc = '更新到' + j.resourceCount + '集';\\r\\n    else if (j.isSerial == false)\\r\\n        r.desc = '全' + j.episodesCount + '集';\\r\\n    r.pic_url = j.verticalCover;\\r\\n    r.url = 'https://api.365kqzs.cn:4976/api/programmes/' + j.id;\\r\\n    if (r.title !== null && r.title !== undefined && r.title !== '') d.push(r);\\r\\n}\\r\\nres.data = d;\\r\\nsetHomeResult(res);","search_url":"https://api.365kqzs.cn:4976/api/programmes?limit=21&page=fypage@-1@&search=**&sort=new","titleColor":"#673AB7","group":"②影搜","searchFind":"js: var json = getResCode();\\r\\nvar fires = {};\\r\\nvar resJson = {};\\r\\neval('resJson=' + json);\\r\\nvar res = [];\\r\\nif (resJson.data.programmes.length <= 0) {\\r\\n    fires.data = [];\\r\\n    setSearchResult(fires);\\r\\n} else {\\r\\n    for (var i = 0; i < resJson.data.programmes.length; i++) {\\r\\n        var mo = resJson.data.programmes[i];\\r\\n        var r = {};\\r\\n        r.title = mo.title;\\r\\n        r.url = 'https://api.365kqzs.cn:4976/api/programmes/' + mo.id;\\r\\n        if (mo.isSerial == true)\\r\\n            r.desc = '更新到' + mo.resourceCount + '集';\\r\\n        else if (mo.isSerial == false)\\r\\n            r.desc = '全' + mo.episodesCount + '集';\\r\\n        r.content = mo.summary;\\r\\n        r.img = mo.verticalCover;\\r\\n        res.push(r);\\r\\n    }\\r\\n    fires.data = res;\\r\\n    setSearchResult(fires);\\r\\n}"}`;
        var k365modkey =
            `海阔视界规则分享，当前分享的是：365影视￥js_url￥api.365kqzs.cn:4976_365影视@https://greasyfork.org/scripts/396521-365%E5%BD%B1%E8%A7%86/code/365%E5%BD%B1%E8%A7%86.user.js`;
        var k365webkey =
            `海阔视界规则分享，当前分享的是：首页频道￥home_rule￥{"firstHeader":"class","title":"剧汇TV","url":"https://apis.365kqzs.cn/api/programmes?limit=21&page=fypage@-1@&sort=fyyear&fyclass&location=fyarea;get;utf-8;{Device-ID@6}","col_type":"movie_3","class_name":"全部&电视剧&电影&TV动漫&动漫电影","class_url":"&category=5d2d6166eba3e50016617c92&category=5d2d616aeba3e50016617c93&category=5e23bced3204300029a2bd22&category=5e4c9f188e1f500035230080","area_name":"全部&中国大陆&中国港台&欧美&日本&韩国&印度&泰国&其他","area_url":"&中国大陆&中国港台&欧美&日本&韩国&印度&泰国&其他","year_name":"最新&最热","year_url":"new&hot","find_rule":"js: var json = {};\\r\\neval('json=' + getResCode());\\r\\nvar res = {};\\r\\nvar d = [];\\r\\nfor (var i = 0; i < json.data.programmes.length; i++) {\\r\\n    var r = {};\\r\\n    var j = json.data.programmes[i];\\r\\n    r.title = j.title;\\n    if (j.updateState == 2)\\n        r.desc = '全' + j.resourceCount + '集';\\n    else\\n        r.desc = '更新到' + j.resourceCount + '集';\\r\\n    r.pic_url = j.verticalCover;\\r\\n    r.url = 'https://qingbailingyan.gitee.io/plays/play.html#https://apis.365kqzs.cn/api/programmes/' + j.id;\\r\\n    if (r.title !== null && r.title !== undefined && r.title !== '') d.push(r);\\r\\n}\\r\\nres.data = d;\\r\\nsetHomeResult(res);","search_url":"https://apis.365kqzs.cn/api/programmes?limit=21&page=fypage@-1@&search=**&sort=new;get;utf-8;{Device-ID@8}","titleColor":"#673AB7","group":"②影搜","searchFind":"js: var json = getResCode();\\r\\nvar fires = {};\\r\\nvar resJson = {};\\r\\neval('resJson=' + json);\\r\\nvar res = [];\\r\\nif (resJson.data.programmes.length <= 0) {\\r\\n    fires.data = [];\\r\\n    setSearchResult(fires);\\r\\n} else {\\r\\n    for (var i = 0; i < resJson.data.programmes.length; i++) {\\r\\n        var mo = resJson.data.programmes[i];\\r\\n        var r = {};\\r\\n        r.title = mo.title;\\r\\n        r.url = 'https://qingbailingyan.gitee.io/plays/play.html#https://apis.365kqzs.cn/api/programmes/' + mo.id;\\r\\n         if (mo.updateState == 2)\\n        r.desc = '全' + mo.resourceCount + '集';\\r\\n    else\\r\\n        r.desc = '更新到' + mo.resourceCount + '集';\\r\\n        r.content = mo.summary;\\r\\n        r.img = mo.verticalCover;\\r\\n        res.push(r);\\r\\n    }\\r\\n    fires.data = res;\\r\\n    setSearchResult(fires);\\r\\n}"}`;
        var k365filekey =
            `海阔视界规则分享，当前分享的是：首页频道￥home_rule￥{"firstHeader":"class","title":"剧汇TV本地","url":"https://apis.365kqzs.cn/api/programmes?limit=21&page=fypage@-1@&sort=fyyear&fyclass&location=fyarea;get;utf-8;{Device-ID@6}","col_type":"movie_3","class_name":"全部&电视剧&电影&TV动漫&动漫电影","class_url":"&category=5d2d6166eba3e50016617c92&category=5d2d616aeba3e50016617c93&category=5e23bced3204300029a2bd22&category=5e4c9f188e1f500035230080","area_name":"全部&中国大陆&中国港台&欧美&日本&韩国&印度&泰国&其他","area_url":"&中国大陆&中国港台&欧美&日本&韩国&印度&泰国&其他","year_name":"最新&最热","year_url":"new&hot","find_rule":"js: var json = {};\\r\\neval('json=' + getResCode());\\r\\nvar res = {};\\r\\nvar d = [];\\r\\nfor (var i = 0; i < json.data.programmes.length; i++) {\\r\\n    var r = {};\\r\\n    var j = json.data.programmes[i];\\r\\n    r.title = j.title;\\n    if (j.updateState == 2)\\n        r.desc = '全' + j.resourceCount + '集';\\n    else\\n        r.desc = '更新到' + j.resourceCount + '集';\\r\\n    r.pic_url = j.verticalCover;\\r\\n    r.url = 'file:///sdcard/Android/data/com.example.hikerview/files/Documents/play.html#https://apis.365kqzs.cn/api/programmes/' + j.id;\\r\\n    if (r.title !== null && r.title !== undefined && r.title !== '') d.push(r);\\r\\n}\\r\\nres.data = d;\\r\\nsetHomeResult(res);","search_url":"https://apis.365kqzs.cn/api/programmes?limit=21&page=fypage@-1@&search=**&sort=new;get;utf-8;{Device-ID@8}","titleColor":"#673AB7","group":"②影搜","searchFind":"js: var json = getResCode();\\r\\nvar fires = {};\\r\\nvar resJson = {};\\r\\neval('resJson=' + json);\\r\\nvar res = [];\\r\\nif (resJson.data.programmes.length <= 0) {\\r\\n    fires.data = [];\\r\\n    setSearchResult(fires);\\r\\n} else {\\r\\n    for (var i = 0; i < resJson.data.programmes.length; i++) {\\r\\n        var mo = resJson.data.programmes[i];\\r\\n        var r = {};\\r\\n        r.title = mo.title;\\r\\n        r.url = 'file:///sdcard/Android/data/com.example.hikerview/files/Documents/play.html#https://apis.365kqzs.cn/api/programmes/' + mo.id;\\r\\n         if (mo.updateState == 2)\\n        r.desc = '全' + mo.resourceCount + '集';\\r\\n    else\\r\\n        r.desc = '更新到' + mo.resourceCount + '集';\\r\\n        r.content = mo.summary;\\r\\n        r.img = mo.verticalCover;\\r\\n        res.push(r);\\r\\n    }\\r\\n    fires.data = res;\\r\\n    setSearchResult(fires);\\r\\n}"}`;
        var xxhomekey =
            `海阔视界规则分享，当前分享的是：首页频道￥home_rule￥{"title":"小小影视","url":"https://android.xiaoxiaoapps.com/index?tab=fyclass","col_type":"movie_3","class_name":"推荐&电影&电视剧&动漫&综艺","class_url":"&1&2&3&4","area_name":"","area_url":"","year_name":"","year_url":"","find_rule":"js: var json = {};\\neval('json=' + getResCode());\\nvar res = {};\\nvar d = [];\\nfor (var i = 0; i < json.data.nestedrows.length; i++) {\\n    var r = {};\\n    var j = json.data.nestedrows[i];\\n    r.title = j.caption;\\n    r.col_type = 'text_1';\\n    if (r.title !== null && r.title !== undefined && r.title !== '') d.push(r);\\n    for (var i2 = 0; i2 < j.vodrows.length; i2++) {\\n        var r2 = {};\\n        var j2 = j.vodrows[i2];\\n        r2.title = j2.title;\\n        r2.pic_url = j2.coverpic;\\n        r2.desc = j2.episode_statustext;\\n        r2.url = 'https://android.leleapps.com/vod/show/' + j2.vodid;\\n        if (r2.title !== null && r2.title !== undefined && r2.title !== '') d.push(r2);\\n    }\\n}\\nres.data = d;\\nsetHomeResult(res);","search_url":"https://android.xiaoxiaoapps.com/search?page=1&wd=**","titleColor":"#673AB7","group":"②影搜","searchFind":"js: var json = getResCode();\\nvar fires = {};\\nvar resJson = {};\\neval('resJson=' + json);\\nvar res = [];\\nif (resJson.data.vodrows.length <= 0) {\\n    fires.data = [];\\n    setSearchResult(fires);\\n} else {\\n    for (var i = 0; i < resJson.data.vodrows.length; i++) {\\n        var mo = resJson.data.vodrows[i];\\n        var r = {};\\n        r.title = mo.title;\\n        r.url = 'https://android.leleapps.com/vod/show/' + mo.vodid;\\n        r.desc = '评分：' + mo.scorenum;\\n        r.content = mo.intro;\\n        r.img = mo.coverpic;\\n        res.push(r);\\n    }\\n    fires.data = res;\\n    setSearchResult(fires);\\n}"}`;
        var xxflkey =
            `海阔视界规则分享，当前分享的是：首页频道￥home_rule￥{"title":"小小分类","url":"https://android.xiaoxiaoapps.com/vod/listing-fyclass-0-fyyear-fyarea-0-0-fypage","col_type":"movie_3","class_name":"全部&电视剧&电影&动漫&综艺","class_url":"0&3&2&5&4","area_name":"全部&爱情&科幻&喜剧&动作&动画&恐怖&犯罪&惊悚&悬疑&剧情&伦理&言情&神话&穿越&罪案&谍战&青春&家庭&军旅&商战&宫廷&历史&古装&武侠&农村&偶像&年代&都市&网络&播报&音乐&相亲&职场&脱口秀&少儿&美食&曲艺&晚会&情感&时尚&选秀&游戏&搞笑&访谈&真人秀&战争&热血&格斗&体育&宠物&冒险&少女&奇幻&推理&竞技&机战&耽美&百合&纪录片&校园&灾难&经典&儿童&恋爱&魔幻&财经&歌曲选秀&旅游&治愈","area_url":"0&1&2&4&5&6&7&8&9&10&11&12&13&14&15&16&17&18&19&20&21&22&23&24&25&26&27&28&29&30&31&32&33&34&35&36&37&38&39&40&41&42&43&44&45&46&47&48&49&50&51&52&53&54&55&56&57&58&59&744&963&1182&1183&1184&1185&1186&1187&1188&1189&3590","year_name":"全部&2020&2019&2018&2010-2017&00年代&90年代","year_url":"0&8&6&3&5&4&1","find_rule":"js: var json = {};\\r\\neval('json=' + getResCode());\\r\\nvar res = {};\\r\\nvar d = [];\\r\\nfor (var i = 0; i < json.data.vodrows.length; i++) {\\r\\n    var r = {};\\r\\n    var j = json.data.vodrows[i];\\r\\n    r.title = j.title;\\r\\n    r.desc = j.episode_statustext;\\r\\n    r.pic_url = j.coverpic;\\r\\n    r.url = 'https://android.leleapps.com/vod/show/' + j.vodid;\\r\\n    if (r.title !== null && r.title !== undefined && r.title !== '') d.push(r);\\r\\n}\\r\\nres.data = d;\\r\\nsetHomeResult(res);","search_url":"","titleColor":"#673AB7","group":"②影搜","searchFind":""}`;
        var xxmodkey =
            `海阔视界规则分享，当前分享的是：小小影视￥js_url￥android.leleapps.com_小小影视@https://greasyfork.org/scripts/396196-%E5%B0%8F%E5%B0%8F%E5%BD%B1%E8%A7%86/code/%E5%B0%8F%E5%B0%8F%E5%BD%B1%E8%A7%86.user.js`;
        var xxwebkey =
            `海阔视界规则分享，当前分享的是：首页频道￥home_rule￥{"title":"新小小影视","url":"https://android.xiaoxiaoapps.com/index?tab=fyclass","col_type":"movie_3","class_name":"推荐&电影&电视剧&动漫&综艺","class_url":"&1&2&3&4","area_name":"","area_url":"","year_name":"","year_url":"","find_rule":"js: var json = {};\\neval('json=' + getResCode());\\nvar res = {};\\nvar d = [];\\nfor (var i = 0; i < json.data.nestedrows.length; i++) {\\n    var r = {};\\n    var j = json.data.nestedrows[i];\\n    r.title = j.caption;\\n    r.col_type = 'text_1';\\n    if (r.title !== null && r.title !== undefined && r.title !== '') d.push(r);\\n    for (var i2 = 0; i2 < j.vodrows.length; i2++) {\\n        var r2 = {};\\n        var j2 = j.vodrows[i2];\\n        r2.title = j2.title;\\n        r2.pic_url = j2.coverpic;\\n        r2.desc = j2.episode_statustext;\\n        r2.url = 'https://qingbailingyan.gitee.io/plays/play.html#https://android.leleapps.com/vod/show/' + j2.vodid;\\n        if (r2.title !== null && r2.title !== undefined && r2.title !== '') d.push(r2);\\n    }\\n}\\nres.data = d;\\nsetHomeResult(res);","search_url":"https://android.xiaoxiaoapps.com/search?page=fypage&wd=**","titleColor":"#673AB7","group":"②影搜","searchFind":"js: var json = getResCode();\\nvar fires = {};\\nvar resJson = {};\\neval('resJson=' + json);\\nvar res = [];\\nif (resJson.data.vodrows.length <= 0) {\\n    fires.data = [];\\n    setSearchResult(fires);\\n} else {\\n    for (var i = 0; i < resJson.data.vodrows.length; i++) {\\n        var mo = resJson.data.vodrows[i];\\n        var r = {};\\n        r.title = mo.title;\\n        r.url = 'https://qingbailingyan.gitee.io/plays/play.html#https://android.leleapps.com/vod/show/' + mo.vodid;\\n        r.desc = '评分：' + mo.scorenum + '·' + mo.episode_statustext;\\n        r.content = mo.intro;\\n        r.img = mo.coverpic;\\n        res.push(r);\\n    }\\n    fires.data = res;\\n    setSearchResult(fires);\\n}"}`;
        var xxfilekey =
            `海阔视界规则分享，当前分享的是：首页频道￥home_rule￥{"title":"新小小影视本地","url":"https://android.xiaoxiaoapps.com/index?tab=fyclass","col_type":"movie_3","class_name":"推荐&电影&电视剧&动漫&综艺","class_url":"&1&2&3&4","area_name":"","area_url":"","year_name":"","year_url":"","find_rule":"js: var json = {};\\neval('json=' + getResCode());\\nvar res = {};\\nvar d = [];\\nfor (var i = 0; i < json.data.nestedrows.length; i++) {\\n    var r = {};\\n    var j = json.data.nestedrows[i];\\n    r.title = j.caption;\\n    r.col_type = 'text_1';\\n    if (r.title !== null && r.title !== undefined && r.title !== '') d.push(r);\\n    for (var i2 = 0; i2 < j.vodrows.length; i2++) {\\n        var r2 = {};\\n        var j2 = j.vodrows[i2];\\n        r2.title = j2.title;\\n        r2.pic_url = j2.coverpic;\\n        r2.desc = j2.episode_statustext;\\n        r2.url = 'file:///sdcard/Android/data/com.example.hikerview/files/Documents/play.html#https://android.leleapps.com/vod/show/' + j2.vodid;\\n        if (r2.title !== null && r2.title !== undefined && r2.title !== '') d.push(r2);\\n    }\\n}\\nres.data = d;\\nsetHomeResult(res);","search_url":"https://android.xiaoxiaoapps.com/search?page=fypage&wd=**","titleColor":"#673AB7","group":"②影搜","searchFind":"js: var json = getResCode();\\nvar fires = {};\\nvar resJson = {};\\neval('resJson=' + json);\\nvar res = [];\\nif (resJson.data.vodrows.length <= 0) {\\n    fires.data = [];\\n    setSearchResult(fires);\\n} else {\\n    for (var i = 0; i < resJson.data.vodrows.length; i++) {\\n        var mo = resJson.data.vodrows[i];\\n        var r = {};\\n        r.title = mo.title;\\n        r.url = 'file:///sdcard/Android/data/com.example.hikerview/files/Documents/play.html#https://android.leleapps.com/vod/show/' + mo.vodid;\\n        r.desc = '评分：' + mo.scorenum + '·' + mo.episode_statustext;\\n        r.content = mo.intro;\\n        r.img = mo.coverpic;\\n        res.push(r);\\n    }\\n    fires.data = res;\\n    setSearchResult(fires);\\n}"}`;
        var cqwebkey =
            `海阔视界规则分享，当前分享的是：首页频道￥home_rule￥{"title":"春秋影视","url":"http://api.chunqiu.tv/api/vod/vodlist.html?JsonBody=true&page=fypage&type=全部&area=fyarea&year=fyyear&class=fyclass","col_type":"movie_3","class_name":"电影&电视剧&动漫&综艺","class_url":"movies&tv&dongman&zongyi","area_name":"全部&中国&香港&台湾&美国&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大&西班牙&俄罗斯","area_url":"全部&中国&香港&台湾&美国&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大&西班牙&俄罗斯","year_name":"全部&2020&2019&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000","year_url":"全部&2020&2019&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000","find_rule":"js: var json = JSON.parse(getResCode());\\r\\nvar res = {};\\r\\nvar list = json.data.data;\\r\\nvar items = list.map(data => ({\\r\\n    title: data.vod_name,\\r\\n    url: 'https://qingbailingyan.gitee.io/plays/play.html#http://api.chunqiu.tv/api/vod/detail.html?' + data.vod_id,\\r\\n    desc: '点击量:' + data.vod_hits,\\r\\n    pic_url: data.vod_pic\\r\\n}));\\r\\nres.data = items;\\r\\nsetHomeResult(res);","search_url":"http://api.chunqiu.tv/api/vod/query.html?JsonBody=true&page=fypage&keyword=**","titleColor":"#673AB7","group":"②影搜","searchFind":"js: var json = JSON.parse(getResCode());\\r\\nvar res = {};\\r\\nvar list = json.data.query;\\r\\nvar items = list.map(data => ({\\r\\n    title: data.vod_name,\\r\\n    url: 'https://qingbailingyan.gitee.io/plays/play.html#http://api.chunqiu.tv/api/vod/detail.html?' + data.vod_id,\\r\\n    desc: '豆瓣评分:' + data.vod_douban_score,\\r\\n    img: data.vod_pic,\\r\\n    content: data.vod_actor\\r\\n}));\\r\\nres.data = items;\\r\\nsetSearchResult(res);"}`;
        var cqfilekey =
            `海阔视界规则分享，当前分享的是：首页频道￥home_rule￥{"title":"春秋影视本地","url":"http://api.chunqiu.tv/api/vod/vodlist.html?JsonBody=true&page=fypage&type=全部&area=fyarea&year=fyyear&class=fyclass","col_type":"movie_3","class_name":"电影&电视剧&动漫&综艺","class_url":"movies&tv&dongman&zongyi","area_name":"全部&中国&香港&台湾&美国&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大&西班牙&俄罗斯","area_url":"全部&中国&香港&台湾&美国&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大&西班牙&俄罗斯","year_name":"全部&2020&2019&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000","year_url":"全部&2020&2019&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000","find_rule":"js: var json = JSON.parse(getResCode());\\r\\nvar res = {};\\r\\nvar list = json.data.data;\\r\\nvar items = list.map(data => ({\\r\\n    title: data.vod_name,\\r\\n    url: 'file:///sdcard/Android/data/com.example.hikerview/files/Documents/play.html#http://api.chunqiu.tv/api/vod/detail.html?' + data.vod_id,\\r\\n    desc: '点击量:' + data.vod_hits,\\r\\n    pic_url: data.vod_pic\\r\\n}));\\r\\nres.data = items;\\r\\nsetHomeResult(res);","search_url":"http://api.chunqiu.tv/api/vod/query.html?JsonBody=true&page=fypage&keyword=**","titleColor":"#673AB7","group":"②影搜","searchFind":"js: var json = JSON.parse(getResCode());\\r\\nvar res = {};\\r\\nvar list = json.data.query;\\r\\nvar items = list.map(data => ({\\r\\n    title: data.vod_name,\\r\\n    url: 'file:///sdcard/Android/data/com.example.hikerview/files/Documents/play.html#http://api.chunqiu.tv/api/vod/detail.html?' + data.vod_id,\\r\\n    desc: '豆瓣评分:' + data.vod_douban_score,\\r\\n    img: data.vod_pic,\\r\\n    content: data.vod_actor\\r\\n}));\\r\\nres.data = items;\\r\\nsetSearchResult(res);"}`;
        var filerulekey =
            `pyteng's rule ￥file_url￥hiker://files/play.html@https://qingbailingyan.gitee.io/plays/play.html`;
        var cbhzxkey =
            `海阔视界规则分享，当前分享的是：搜索引擎￥search_engine_v2￥{"title":"茶杯狐","find_rule":"js: var json = getResCode();\\nvar fires = {};\\nvar resJson = {};\\neval('resJson=' + json);\\nvar res = [];\\nif (resJson.length <= 0) {\\n    fires.data = [];\\n    setSearchResult(fires);\\n} else {\\n    for (var i = 0; i < resJson.length; i++) {\\n        var mo = resJson[i];\\n        var r = {};\\n        r.title = mo.title.replace(/<.*?>/ig,\\"\\");\\n        r.url = mo.href;\\n        r.desc = '网站评分:'+mo.rating;\\n        res.push(r);\\n    }\\n    fires.data = res;\\n    setSearchResult(fires);\\n}","search_url":"https://www.cupfox.com/search?search_type=online&key=**&_xsrf=2%7C932363e0%7Cfb0f25d019a5ca9f6a40604b22fde9d0%7C1581937850;post","titleColor":"#673AB7","group":"②影搜"}`;
        var cbhxzkey =
            `海阔视界规则分享，当前分享的是：搜索引擎￥search_engine_v2￥{"title":"茶杯狐·下载","find_rule":"js: var json = getResCode();\\nvar fires = {};\\nvar resJson = {};\\neval('resJson=' + json);\\nvar res = [];\\nif (resJson.length <= 0) {\\n    fires.data = [];\\n    setSearchResult(fires);\\n} else {\\n    for (var i = 0; i < resJson.length; i++) {\\n        var mo = resJson[i];\\n        var r = {};\\n        r.title = mo.title.replace(/<.*?>/ig,\\"\\");\\n        r.url = mo.href;\\n        r.desc = '网站评分:'+mo.rating;\\n        res.push(r);\\n    }\\n    fires.data = res;\\n    setSearchResult(fires);\\n}","search_url":"https://www.cupfox.com/search?search_type=download&key=**&_xsrf=2%7Ce24c60bf%7C5c5ecafcf740536e0dcdbb25da30944a%7C1582115323;post","titleColor":"#4CAF50","group":"⑤下载"}`;
        var cbhzmkey =
            `海阔视界规则分享，当前分享的是：搜索引擎￥search_engine_v2￥{"title":"茶杯狐·字幕","find_rule":"js: var json = getResCode();\\nvar fires = {};\\nvar resJson = {};\\neval('resJson=' + json);\\nvar res = [];\\nif (resJson.length <= 0) {\\n    fires.data = [];\\n    setSearchResult(fires);\\n} else {\\n    for (var i = 0; i < resJson.length; i++) {\\n        var mo = resJson[i];\\n        var r = {};\\n        r.title = mo.title.replace(/<.*?>/ig,\\"\\");\\n        r.url = mo.href;\\n        r.desc = mo.label.replace(/<.*?>/ig,\\"\\").replace(\\"字幕下载\\",\\"\\");\\n        res.push(r);\\n    }\\n    fires.data = res;\\n    setSearchResult(fires);\\n}","search_url":"https://www.cupfox.com/search?search_type=sub&key=**&_xsrf=2%7C932363e0%7C5c5ecafcf740536e0dcdbb25da30944a%7C1581937850;post","titleColor":"#795548","group":"⑩字幕"}`;
        var whzzhkey =
            `海阔视界规则分享，当前分享的是：搜索引擎￥search_engine_v2￥{"title":"五号站","find_rule":"body&&.m_list;a&&Text;a&&href;span&&Text","search_url":"http://www.baike567.com/s/**/","titleColor":"","group":"①常用"}`;
        var whzzxkey =
            `海阔视界规则分享，当前分享的是：搜索引擎￥search_engine_v2￥{"title":"五号站·在线","find_rule":".s-box&&ul&&.m_list;a&&Text;a&&href;span&&Text","search_url":"http://www.baike567.com/s/**/","titleColor":"#673AB7","group":"②影搜"}`;
        var whzxzkey =
            `海阔视界规则分享，当前分享的是：搜索引擎￥search_engine_v2￥{"title":"五号站·下载","find_rule":".s-box&&ul,1&&.m_list;a&&Text;a&&href;span&&Text","search_url":"http://www.baike567.com/s/**/","titleColor":"#4CAF50","group":"⑤下载"}`;
        var fkkey =
            `海阔视界规则分享，当前分享的是：搜索引擎￥search_engine_v2￥{"title":"疯狂影视","find_rule":".has-results-container&&.results-item;.m-name&&Text;a&&href;.m-source&&Text","search_url":"http://ifkdy.com/search?key=**&page=fypage","titleColor":"","group":"②影搜"}`;
        var dpskey =
            `海阔视界规则分享，当前分享的是：搜索引擎￥search_engine_v2￥{"title":"度盘搜","find_rule":"js: var json = getResCode();\\r\\neval('resJson=' + json);\\r\\nvar res = {};\\r\\nvar list = resJson.data;\\r\\nvar items = list.map(data => ({\\r\\n    title: data.title,\\r\\n    url: 'https://m.dupanso.com/#/detail?id=' + data.id + '&title=' + data.title,\\r\\n    desc: data.type\\r\\n}));\\r\\nres.data = items;\\r\\nsetSearchResult(res);","search_url":"https://api.nidhsd.top/search?keyword=**&page=fypage&invitecode=需要获取的密钥","titleColor":"#4CAF50","group":"⑤下载"}`;

        function rule() {
            if (document.getElementById("cbCopy").checked == true) {
                document.getElementById("lx").onclick = function () {
                    fy_bridge_app.importRule(lxkey);
                }
                document.getElementById("jbt").onclick = function () {
                    fy_bridge_app.importRule(jbtkey);
                }
                document.getElementById("lm").onclick = function () {
                    fy_bridge_app.importRule(lmkey);
                }
                document.getElementById("xkz").onclick = function () {
                    fy_bridge_app.importRule(xkzkey);
                }
                document.getElementById("wlhome").onclick = function () {
                    fy_bridge_app.importRule(wlhomekey);
                }
                document.getElementById("wlmod").onclick = function () {
                    fy_bridge_app.importRule(wlmodkey);
                }
                document.getElementById("wlweb").onclick = function () {
                    fy_bridge_app.importRule(wlwebkey);
                }
                document.getElementById("wlfile").onclick = function () {
                    fy_bridge_app.importRule(wlfilekey);
                }
                document.getElementById("k365home").onclick = function () {
                    fy_bridge_app.importRule(k365homekey);
                }
                document.getElementById("k365mod").onclick = function () {
                    fy_bridge_app.importRule(k365modkey);
                }
                document.getElementById("k365web").onclick = function () {
                    fy_bridge_app.importRule(k365webkey);
                }
                document.getElementById("k365file").onclick = function () {
                    fy_bridge_app.importRule(k365filekey);
                }
                document.getElementById("xxhome").onclick = function () {
                    fy_bridge_app.importRule(xxhomekey);
                }
                document.getElementById("xxfl").onclick = function () {
                    fy_bridge_app.importRule(xxflkey);
                }
                document.getElementById("xxmod").onclick = function () {
                    fy_bridge_app.importRule(xxmodkey);
                }
                document.getElementById("xxweb").onclick = function () {
                    fy_bridge_app.importRule(xxwebkey);
                }
                document.getElementById("xxfile").onclick = function () {
                    fy_bridge_app.importRule(xxfilekey);
                }
                document.getElementById("cqweb").onclick = function () {
                    fy_bridge_app.importRule(cqwebkey);
                }
                document.getElementById("cqfile").onclick = function () {
                    fy_bridge_app.importRule(cqfilekey);
                }
                document.getElementById("filerule").onclick = function () {
                    fy_bridge_app.importRule(filerulekey);
                }
                document.getElementById("cbhzx").onclick = function () {
                    fy_bridge_app.importRule(cbhzxkey);
                }
                document.getElementById("cbhxz").onclick = function () {
                    fy_bridge_app.importRule(cbhxzkey);
                }
                document.getElementById("cbhzm").onclick = function () {
                    fy_bridge_app.importRule(cbhzmkey);
                }
                document.getElementById("whzzh").onclick = function () {
                    fy_bridge_app.importRule(whzzhkey);
                }
                document.getElementById("whzzx").onclick = function () {
                    fy_bridge_app.importRule(whzzxkey);
                }
                document.getElementById("whzxz").onclick = function () {
                    fy_bridge_app.importRule(whzxzkey);
                }
                document.getElementById("fk").onclick = function () {
                    fy_bridge_app.importRule(fkkey);
                }
            } else if (document.getElementById("cbCopy").checked == false) {
                document.getElementById("lx").onclick = function () {
                    Copy("lx", lxkey);
                }
                document.getElementById("jbt").onclick = function () {
                    Copy("jbt", jbtkey);
                }
                document.getElementById("lm").onclick = function () {
                    Copy("lm", lmkey);
                }
                document.getElementById("xkz").onclick = function () {
                    Copy("xkz", xkzkey);
                }
                document.getElementById("wlhome").onclick = function () {
                    Copy("wlhome", wlhomekey);
                }
                document.getElementById("wlmod").onclick = function () {
                    Copy("wlmod", wlmodkey);
                }
                document.getElementById("wlweb").onclick = function () {
                    Copy("wlweb", wlwebkey);
                }
                document.getElementById("wlfile").onclick = function () {
                    Copy("wlfile", wlfilekey);
                }
                document.getElementById("k365home").onclick = function () {
                    Copy("k365home", k365homekey);
                }
                document.getElementById("k365mod").onclick = function () {
                    Copy("k365mod", k365modkey);
                }
                document.getElementById("k365web").onclick = function () {
                    Copy("k365web", k365webkey);
                }
                document.getElementById("k365file").onclick = function () {
                    Copy("k365file", k365filekey);
                }
                document.getElementById("xxhome").onclick = function () {
                    Copy("xxhome", xxhomekey);
                }
                document.getElementById("xxfl").onclick = function () {
                    Copy("xxfl", xxflkey);
                }
                document.getElementById("xxmod").onclick = function () {
                    Copy("xxmod", xxmodkey);
                }
                document.getElementById("xxweb").onclick = function () {
                    Copy("xxweb", xxwebkey);
                }
                document.getElementById("xxfile").onclick = function () {
                    Copy("xxfile", xxfilekey);
                }
                document.getElementById("cqweb").onclick = function () {
                    Copy("cqweb", cqwebkey);
                }
                document.getElementById("cqfile").onclick = function () {
                    Copy("cqfile", cqfilekey);
                }
                document.getElementById("filerule").onclick = function () {
                    Copy("filerule", filerulekey);
                }
                document.getElementById("cbhzx").onclick = function () {
                    Copy("cbhzx", cbhzxkey);
                }
                document.getElementById("cbhxz").onclick = function () {
                    Copy("cbhxz", cbhxzkey);
                }
                document.getElementById("cbhzm").onclick = function () {
                    Copy("cbhzm", cbhzmkey);
                }
                document.getElementById("whzzh").onclick = function () {
                    Copy("whzzh", whzzhkey);
                }
                document.getElementById("whzzx").onclick = function () {
                    Copy("whzzx", whzzxkey);
                }
                document.getElementById("whzxz").onclick = function () {
                    Copy("whzxz", whzxzkey);
                }
                document.getElementById("fk").onclick = function () {
                    Copy("fk", fkkey);
                }
            }

            function Copy(id, key) {
                var clipboard = new ClipboardJS('#' + id, {
                    text: function () {
                        return key;
                    }
                });
                clipboard.on('success', function () {
                    prompt("😋复制成功", "alert-success", 1500);
                    clipboard.destroy();
                });

                clipboard.on('error', function () {
                    prompt("😥复制失败", "alert-danger", 1500);
                });
            }
        }
        $(function () {
            $('.prompt')
                .transition('shake');
            $("#dpsOK").on("click", function () {
                let sdpwxkey = $(".dpswxkey").val();
                fy_bridge_app.importRule(dpskey.replace("需要获取的密钥", sdpwxkey));
            })
        })
        $(function () {
            $("#wl").on("click", function () {
                $(".ui.modal.wllist").modal("show");
            })
        })
        $(function () {
            $("#k365").on("click", function () {
                $(".ui.modal.k365").modal("show");
            })
        })
        $(function () {
            $("#xx").on("click", function () {
                $(".ui.modal.xx").modal("show");
            })
        })
        $(function () {
            $("#cq").on("click", function () {
                $(".ui.modal.cq").modal("show");
            })
        })
        $(function () {
            $("#cbh").on("click", function () {
                $(".ui.modal.cbh").modal("show");
            })
        })
        $(function () {
            $("#whz").on("click", function () {
                $(".ui.modal.whz").modal("show");
            })
        })
        $(function () {
            $("#dps").on("click", function () {
                $(".ui.modal.dps").modal("show");
            })
        })