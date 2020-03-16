var integrityurl = window.location.href;
var integrityurl = integrityurl.split("#")[1];
$(function () {
    $("#info").on("click", function () {
        $(".modal").modal("hide");
        $(".ui.modal.info").modal("show");
    })
    $("#plays").on("click", function () {
        $(".modal").modal("hide");
        $(".ui.modal.plays").modal("show");
    })
    $(".luck").on("click", function () {
        let url = "https://ipfs" + $(".lucknumber").val() + ".365kqzs.cn:9081/ipfs/" +
            $(
                ".lucknumber").attr("hash");
        fy_bridge_app.playVideo(url);
    })
})

/*豆瓣信息拉取*/
function doupan(keyword) {
    requestAsync('https://www.douban.com/search?q=' + keyword, function (key, result) {
        try {
            let html = result;
            let li = html.split('class="result"')[1];
            $("title").html(li.split('class="nbg"')[1].split('</a>')[0].split('title="')[1].split('"')[0] + "-南瓜影视");
            fy_bridge_app.setWebTitle(li.split('class="nbg"')[1].split('</a>')[0].split('title="')[1].split('"')[0] + "-南瓜影视");
            $(".cover-url").attr("src", 'https://images.weserv.nl/?url=' + li.split('img src="')[1].split('"')[0]);
            $(".title").html(li.split('class="nbg"')[1].split('</a>')[0].split('title="')[1].split('"')[0]);
            $(".desc").html(li.split('"subject-cast">')[1].split('</span>')[0].replace(' / ','•'));
            $(".info-text").html(li.split('<p>')[1].split('</p>')[0]);
        } catch (e) {
            alert(e);
        }
    });
}

$(function () {
    window.callback = function (key, result) {
        $("#pageload").removeClass("active").addClass("disabled");
        try {
            /*小小影视的布局添加*/
            function xiaoxiao() {
                let json = JSON.parse(result);
                $("title").html(json.data.vodrow.title + '-小小影视');
                fy_bridge_app.setWebTitle(json.data.vodrow.title + "-小小影视");
                $(".cover-url").attr("src", json.data.vodrow.coverpic);
                $(".title").html(json.data.vodrow.title);
                $(".desc").html(json.data.vodrow.langvoicename + "•" + json.data.vodrow.catename +
                    "•" +
                    json.data.vodrow.episode_statustext);
                $(".info-text").html(json.data.vodrow.intro);
                let playlist = json.data.vodrow.playlist;
                let playlistbtn = "";
                for (i = 0; i < playlist.length; i++) {
                    let j = playlist[i];
                    let url = "https://android.leleapps.com/vod/reqplay/" + json.data.vodrow.vodid +
                        "?playindex=" + j.playindex;
                    playlistbtn +=
                        '<div class="four wide mobile two wide computer column"><button onclick="play(\'' +
                        url +
                        '\',' + i + ');" class="ui button play' + i + '">' +
                        j.play_name + '</button></div>';
                }
                $(".playslist").html(playlistbtn);
            }

            /*剧汇TV的布局添加*/
            function juhui() {
                let json = JSON.parse(result);
                $("title").html(json.data.programme.title + '-剧汇TV');
                fy_bridge_app.setWebTitle(json.data.programme.title + "-剧汇TV");
                $(".cover-url").attr("src", json.data.programme.verticalCover);
                $(".title").html(json.data.programme.title);
                let episodes = '';
                if (json.data.programme.episodesCount != json.data.programme.resourceCount)
                    episodes = "更新至" + json.data.programme.resourceCount + "集/共" + json.data
                    .programme.episodesCount + "集";
                else
                    episodes = "全" + json.data.programme.episodesCount + "集";
                $(".desc").html(json.data.programme.location + "•" + json.data.programme.category
                    .name +
                    "•" +
                    episodes);
                $(".info-text").html(json.data.programme.summary);
                let playlist = json.data.programme.resources;
                let playlistbtn = "";
                for (i = 0; i < playlist.length; i++) {
                    let j = playlist[i];
                    sharpnesslist = JSON.stringify(j.data).replace(/\"/g, "YongTeng");
                    playlistbtn +=
                        '<div class="four wide mobile two wide computer column"><button onclick="sharpness(\'' +
                        sharpnesslist + '\');" class="ui button">' +
                        j.episode + '</button></div>';
                }
                $(".playslist").html(playlistbtn);
            }

            /*卧龙的布局添加*/
            function wolong() {
                let json = JSON.parse(result);
                $("title").html(json.data.title + '-卧龙影视');
                fy_bridge_app.setWebTitle(json.data.title + "-卧龙影视");
                let imgUrl = json.data.imgUrl;
                if (json.data.imgUrl.indexOf("doubanio") != -1) {
                    imgUrl = "https://images.weserv.nl/?url=" + imgUrl;
                }
                $(".cover-url").attr("src", imgUrl);
                $(".title").html(json.data.title);
                if (json.data.updateText !== null && json.data.updateText !== undefined && json.data
                    .updateText !== '')
                    $(".desc").html(json.data.area + "•" + json.data.year +
                        "•" +
                        json.data.updateText);
                else
                    $(".desc").html(json.data.area + "•" + json.data.year);
                $(".info-text").html(json.data.introduction);
                /*由于卧龙的集数需要再请求一个接口，所以另写一个方法*/
                wolongEpisode(json.data.videoId);
            }

            /*春秋影视的布局添加*/
            function chunqiu() {
                let json = JSON.parse(result);
                $("title").html(json.data.vod.vod_name + '-春秋影视');
                fy_bridge_app.setWebTitle(json.data.vod.vod_name + "-春秋影视");
                $(".cover-url").attr("src", json.data.vod.vod_pic);
                $(".title").html(json.data.vod.vod_name);
                if (json.data.vod.remarks !== null && json.data.vod.remarks !== undefined && json
                    .data.vod.remarks !== '')
                    $(".desc").html(json.data.vod.vod_area + "•" + json.data.vod.vod_year +
                        "•" +
                        json.data.vod.remarks);
                else
                    $(".desc").html(json.data.vod.vod_area + "•" + json.data.vod.vod_year);
                $(".info-text").html(json.data.vod.vod_content);
                let playlist = json.data.vod.vod_url;
                let playlistbtn = "";
                for (i = 0; i < playlist.length; i++) {
                    let j = playlist[i];
                    let url = j.url;
                    playlistbtn +=
                        '<div class="four wide mobile two wide computer column"><button onclick="fy_bridge_app.playVideo(\'' +
                        url +
                        '\');" class="ui button play' + i + '">' +
                        j.name + '</button></div>';
                }
                $(".playslist").html(playlistbtn);
            }

            /*南瓜影视的布局添加*/
            function nangua() {
                doupan(integrityurl.split("#")[1]);
                let html = result;
                let playlist = html.split('<table>')[1].split('</table>')[0].split('</tr>');
                let playlistbtn = "";
                for (i = 0; i < playlist.length; i++) {
                    let j = playlist[i];
                    let title = j.split('<title>')[1].split('</title>')[0];
                    let url = j.split('<id>')[1].split('</id>')[0];
                    playlistbtn +=
                        '<div class="four wide mobile two wide computer column"><button onclick="fy_bridge_app.playVideo(\'' +
                        url +
                        '\');" class="ui button play' + i + '">' +
                        title + '</button></div>';
                }
                $(".playslist").html(playlistbtn);
            }

            /*卧龙集数*/
            function wolongEpisode(id) {
                requestAsync("http://v2.tgmmvip.com/wolong/gae/video/plays?videoId=" + id,
                    function (key, result) {
                        try {
                            let json = JSON.parse(result);
                            let playlist = json.data.plays;
                            let playlistbtn = "";
                            for (let i = 0; i < playlist.length; i++) {
                                let j = playlist[i];
                                let url = "";
                                if (j.source == 0)
                                    playlistbtn +=
                                    '<div class="four wide mobile two wide computer column"><button onclick="fy_bridge_app.playVideo(\'' +
                                    j.playUrl +
                                    '\')" class="ui button">' +
                                    (i + 1) + '</button></div>';
                                else
                                    playlistbtn +=
                                    '<div class="four wide mobile two wide computer column play' +
                                    i + '"><button onclick="sharpnessPost(\'' +
                                    j.playUrl + '\',' + j.source +
                                    ');$(this).addClass(\'loading\');" class="ui button">' +
                                    (i + 1) + '</button></div>';
                            }
                            $(".playslist").html(playlistbtn);
                        } catch (e) {
                            alert(e);
                        }
                    });
            }

            if (integrityurl.indexOf("leleapps.com/vod/show") != -1) xiaoxiao();
            else if (integrityurl.indexOf("api.365kqzs.cn:4976/api/programmes") != -1) juhui();
            else if (integrityurl.indexOf("v2.tgmmvip.com/wolong/gae/video/detail") != -1) wolong();
            else if (integrityurl.indexOf("api.chunqiu.tv/api/vod/detail.html") != -1) chunqiu();
            else if (integrityurl.indexOf("47.107.130.93:443/play/ng.php?id=") != -1) nangua();
        } catch (e) {
            alert(e);
        }
    }
    if (integrityurl.indexOf("api.chunqiu.tv/api/vod/detail.html") != -1)
        requestAsync(integrityurl.split('?')[0], {
            headers: {
                "content-type": "application/json"
            },
            body: '{"id": ' + integrityurl.split('?')[1] + '}',
            method: 'POST'
        }, callback);
    else
        requestAsync(integrityurl, callback);
});

/*POST请求获取清晰度与播放链接（主要用于卧龙影视）*/
function sharpnessPost(playurl, source) {
    requestAsync('http://v2.tgmmvip.com/wolong/parse/video/play', {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: 'timestamp=' + Math.round(new Date() / 1000) + '&sign=852772226371378&source=' + source +
            '&deviceid=852772226371378&url=' + playurl.replace("&", "＆＆"),
        method: 'POST'
    }, function (key, result) {
        try {
            console.log(result);
            let json = JSON.parse(result);
            let sharpnesslist = json.data.items;
            let sharpnesslistbtn = "";
            for (let i = 0; i < sharpnesslist.length; i++) {
                let j = sharpnesslist[i];
                sharpnesslistbtn += '<button onclick="fy_bridge_app.playVideo(\'' +
                    j.mediaUrl +
                    '\')" class="ui basic button">' + j.mediaName + '</button><br><br>';
            }
            $(".centered.content.sharpness").html(sharpnesslistbtn);
            $(".loading").removeClass("loading");
            $(".modal").modal("hide");
            $(".ui.modal.sharpness").modal("show");
        } catch (e) {
            alert(e);
        }

    });
}

/*清晰度*/
function sharpness(sharpnesslist) {
    sharpnesslist = sharpnesslist.replace(/YongTeng/g, "\"")
    sharpnesslist = JSON.parse(sharpnesslist);
    let sharpnesslistbtn = "";
    for (i = 0; i < sharpnesslist.length; i++) {
        $(".lucknumber").attr("hash", sharpnesslist[i].hash);
        let url = "https://api.365kqzs.cn:4976/api/resource_url?hash=" + sharpnesslist[i].hash;
        sharpnesslistbtn += '<button onclick="play(\'' + url + '\',' + i +
            ')" class="ui basic button play' + i +
            '">' + sharpnesslist[i].displayName + '</button><br><br>';
    }
    $(".centered.content.sharpness").html(sharpnesslistbtn);
    $(".modal").modal("hide");
    $(".ui.modal.sharpness").modal("show");
}

/*播放*/
function play(url, playbtn) {
    var playbtnclass = ".play" + playbtn;
    $(playbtnclass).addClass("loading");
    window.callbackplay = function (key, result) {
        try {
            let json = JSON.parse(result);

            /*小小影视的视频播放*/
            function xiaoxiaoplay() {
                if (json.retcode == 3)
                    url = json.data.httpurl_preview.replace("?300", "");
                else
                    url = json.data.httpurl;
                fy_bridge_app.playVideo(url);
            }

            /*剧汇TV的视频播放*/
            function juhuiplay() {
                if (json.success == true) {
                    url = json.data.url;
                    fy_bridge_app.playVideo(url);
                } else {
                    $("#cw").html(json.message);
                    $(".modal").modal("hide");
                    $(".ui.modal.textselect").modal("show");
                    $(".lucklist").html("");
                    for (let i = 1; i < 30; i++) {
                        $.ajax({
                            type: 'HEAD',
                            url: 'https://ipfs' + i +
                                '.365kqzs.cn:9081/ipfs/SnXh8po4sFr2XN93cFUMZktPH8YU7WgWPWUDZ7pBKe9a7BxZM',
                            complete: function (xhr, data) {
                                if (xhr.readyState == 4 && xhr.status == 200)
                                    $(".lucklist").append(
                                        '<div class="four wide mobile two wide computer column"><button onclick="fy_bridge_app.playVideo(\'https://ipfs' +
                                        i +
                                        '.365kqzs.cn:9081/ipfs/SnXh8po4sFr2XN93cFUMZktPH8YU7WgWPWUDZ7pBKe9a7BxZM\');" class="ui button">' +
                                        i + '</button></div>'
                                    );
                            }
                        });

                    }
                }
            }

            if (integrityurl.indexOf("leleapps.com/vod/show") != -1) xiaoxiaoplay();
            else if (integrityurl.indexOf("api.365kqzs.cn:4976/api/programmes") != -1) juhuiplay();
        } catch (e) {
            alert(e);
        }
        $(".loading").removeClass("loading");
    }
    requestAsync(url, callbackplay);
}