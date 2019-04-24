/**
*  移企秀js 移动终端js库
*  @version 1.1.0
*  @date  2015-07-30
**/

$(function () {
    Mt.init();
});

var Mt = {
    /*视频是否处于播放状态,默认为不播放*/
    isPlayVideo: false,
    yesSubmitArray: [],//已提交过的按钮
    /*滑动触发音乐点击事件次数,防止滑动事件的重复执行*/
    //isSlideMusic: 0,
    init: function () {
        Mt.renderPage();
        Mt.upOrDownSlidePage();
        Mt.playVideo();
        Mt.unALink();
        Mt.checkSite();
        Mt.initVideo();
        Mt.initMusic();
        Mt.initWxJSSDK();
    },
    /*校验是否是微信*/
    isWeixin: function () {
        var a = navigator.userAgent.toLowerCase();
        return "micromessenger" == a.match(/MicroMessenger/i) ? !0 : !1
    },
    /*校验是否是Android*/
    isAndroid: function () {
        var a = navigator.userAgent,
        b = (navigator.appVersion, a.indexOf("Android") > -1 || a.indexOf("Linux") > -1);

        return b
    },
    /*校验是否是手机*/
    isMobile: function () {
        var a = !1;
        return function (b) {
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) && (a = !0)
        }(navigator.userAgent || navigator.vendor || window.opera),
        a
    },
    /*初始化页面布局*/
    renderPage: function () {
        var tplCount;
        var d, e, f = 1,
			g = $(".z-current").width(),
			h = $(".z-current").height();
        if (imageWidth = $(".m-img").width(),
			imageHeight = $(".m-img").height(),
			g / h >= 320 / 486 ? (f = h / 486, d = 320 / 2) : (f = g / 320, e = (h / f - 486) / 2),
			e && $(".edit_area").css({ marginTop: e }),
			d && $(".edit_area").css({ "margin-left": -d, "left": "50%" }),
			tplCount == (
			$("#eqMobileViewport").attr("content", "width=320, initial-scale=" + f + ", maximum-scale=" + f + ", user-scalable=no"),
			320 != clientWidth &&
			clientWidth == document.documentElement.clientWidth ||
			Mt.isWeixin() &&
			(navigator.userAgent.indexOf("Android") > -1 ||
			navigator.userAgent.indexOf("Linux") > -1))
		  ) {
            var i = 320 / g,
				j = 486 / h,
				k = Math.max(i, j);
            k = k > 1 ? k : 160 * k, k = parseInt(k), $("#eqMobileViewport").attr("content", "width=320, target-densitydpi=" + k)
        }

        if (Mt.isAndroid()) {
            $("textarea").keyup(function () {
                var windowsHeight = document.body.clientHeight;
                var textareaHeight = $(this).height();
                var textareaTop = $(this).offset().top;

                if (textareaTop + textareaHeight > windowsHeight) {
                    var objUl = $(this).parents("ul").get(0);
                    objUl.style.marginTop = -(textareaTop + textareaHeight - windowsHeight) + "px";
                }
            });
            $("textarea").blur(function () {
                var a = $(this).parents("ul").get(0);
                a.style.marginTop = 0;
            });
        }
    },
    //滑动翻页操作处理 
    upOrDownSlidePage: function () {
        var element = $("#nr"),
            oWrap = $("#content"),
            iWinH = oWrap.innerHeight(),
            nowPageNum = 1, //当前页
            nowPage = null,
            movePageNum = 1, //当前滑动的页
            movePage = null,
            tiemNum = 0,
            isPanstart = 0,
            totalPage = oWrap.children().length, //总页数
            direction = ""; //滑动方向

        //校验页是否有Id
        if (typeof oWrap.find(".main-page").eq(0).attr("id") == "undefined") {
            oWrap.find(".main-page").each(function (index, obj) {
                $(this).attr("id", (index + 1));
            });
        }

        var hammer = new Hammer(element[0]);
        hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL, threshold: 0 });
        hammer.on("press", function (ev) {
            if (ev.target.tagName == "TEXTAREA") {
                ev.target.focus();
            }
        }),
        //开始滑动
        hammer.on("panstart", function (ev) {
            isPanstart = 1;
            direction = ""; //重置方向变量
            oWrap.find(".main-page").removeAttr("style");
            nowPageNum = $(ev.target).parents(".main-page").attr("id");
            if (typeof nowPageNum == "undefined") {
                oWrap.find(".z-current").css({
                    "-webkit-transition": "none",
                    "transition": "none",
                    "-webkit-transform": "translateY(0px)",
                    "transform": "translateY(0px)"
                });
            }
        }),
        //向上滑动
        hammer.on("panup", function (ev) {
            if (!Mt.slideBefore(ev)) {
                return;
            }
            if (isPanstart == 0) {
                return;
            }
            if (typeof nowPageNum == "undefined") {
                return;
            }
            if (direction == "down") {
                Mt.runUpOrDownSlide(iWinH, nowPage, movePage, "down", ev.distance);
                return;
            }
            direction = "up";

            //首先得判断当前页是第一页还是最后一页
            if (nowPageNum < totalPage) {
                movePageNum = parseInt(nowPageNum, 10) + 1;
            } else {
                movePageNum = 1;
            }
            nowPage = $("#" + nowPageNum);
            movePage = $("#" + movePageNum);

            Mt.runUpOrDownSlide(iWinH, nowPage, movePage, "up", ev.distance);
        }),
        //向下滑动
        hammer.on("pandown", function (ev) {
            if (!Mt.slideBefore(ev)) {
                return;
            }
            if (isPanstart == 0) {
                return;
            }
            if (typeof nowPageNum == "undefined") {
                return;
            }
            if (direction == "up") {
                Mt.runUpOrDownSlide(iWinH, nowPage, movePage, "up", ev.distance);
                return;
            }
            direction = "down";

            //首先得判断当前页是第一页还是最后一页
            if (nowPageNum > 1) {
                movePageNum = parseInt(nowPageNum, 10) - 1;
            } else {
                movePageNum = totalPage;
            }
            nowPage = $("#" + nowPageNum);
            movePage = $("#" + movePageNum);

            Mt.runUpOrDownSlide(iWinH, nowPage, movePage, "down", ev.distance);
        }),
        //滑动停止
        hammer.on("panend", function (ev) {
            if (!Mt.slideBefore(ev)) {
                return;
            }
            if (isPanstart == 0) {
                return;
            }
            isPanstart = 0;
            if (typeof nowPageNum == "undefined") {
                return;
            }
            if (tiemNum > 0 && (ev.timeStam - tiemNum) < 402) {
                return;
            }

            tiemNum = ev.timeStamp; //滑动结束时的时间戳
            movePage.css({
                "transition": "transform 0.4s linear",
                "transform": ((ev.distance >= 80) ? "translateY(0px)" : "translateY(" + (direction == "up" ? "" : "-") + "100%)"),
                "transform-origin": "center top 0px",
                "-webkit-transition": "-webkit-transform 0.4s linear",
                "-webkit-transform": ((ev.distance >= 80) ? "translateY(0px)" : "translateY(" + (direction == "up" ? "" : "-") + "100%)"),
                "-webkit-transform-origin": "center top 0px"
            });
            var time = setInterval(function () {
                clearInterval(time);
                nowPage.removeClass("z-current").removeClass("z-active").removeClass("z-move")
                    .siblings().removeClass("z-current").removeClass("z-active").removeClass("z-move"),
                ((ev.distance >= 80) ? movePage.addClass("z-current") : nowPage.addClass("z-current"));
            }, 400);
        });
    },
    //执行滑动处理
    runUpOrDownSlide: function (iWinH, nowPage, movePage, type, distance) {
        nowPage.removeClass("z-active").addClass("z-current z-move")
               .siblings().removeClass("z-current").removeClass("z-active").removeClass("z-move"),
        movePage.addClass("z-active z-move");
        movePage.css({
            "-webkit-transition": "none",
            "transition": "none",
            "-webkit-transform": "translateY(" + (type == "up" ? (iWinH - distance) : (-iWinH + distance)) + "px)",
            "transform": "translateY(" + (type == "up" ? (iWinH - distance) : (-iWinH + distance)) + "px)"
        });
    },
    //滑动之前处理
    slideBefore: function (ev) {
        if (Mt.isMobile() && ev.target.tagName == "TEXTAREA") {
            ev.target.focus();
            return false;
        }
        if ($(ev.target).parent().attr("id") == "audio_btn") {
            $("#audio_btn").click();
            return false;
        }
        /*判断视频是否在播放中*/
        if (Mt.isPlayVideo == true) {
            return false;
        }
        return true;
    },
    /*初始化音乐播放*/
    initMusic: function () {
        var media = $("#mediaMusic"),
           audioBtn = $("#audio_btn"),
           yinfu = $("#playMusic");
        if (media.length) {
            audioBtn.removeClass("off").addClass("play_music");
            yinfu.addClass("rotate_music");
            media.get(0).play();
        }
    },
    /*播放或停止音乐*/
    playVideo: function () {
        var media = $("#mediaMusic"),
            audioBtn = $("#audio_btn"),
            yinfu = $("#playMusic");

        audioBtn.click(function (e) {
            e.stopPropagation();
            if ($(this).hasClass("off") == true) {
                audioBtn.removeClass("off").addClass("play_music");
                yinfu.addClass("rotate_music");
                media.get(0).play();
            } else {
                audioBtn.removeClass("play_music").addClass("off");
                yinfu.removeClass("rotate_music");
                media.get(0).pause();
            }
        });
    },
    /*屏蔽链接在当前页面跳转*/
    unALink: function () {
        if (!Mt.isMobile() && $("#nr").find("a").length > 0) {
            $("#nr").find("a").each(function (e, o) {
                if (!$(o).hasClass("no_open_tab")) {
                    $(o).click(function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        window.parent.window.open("" + $(this).attr("href") + "");
                    });
                }
            });
        }
    },
    /*检测站点是过期*/
    checkSite: function () {
        try {
            var site_id = $(".edit_wrapper").attr("usiteid");
            var agentId = Mt.isWeixin() ? 1 : 0;

            $.ajax({
                url: apiDomain + "api/Message/SitePageView?siteId=" + site_id + "&agentId=" + agentId, type: "GET", success: function (json) {
                    if (json.status != 200) {
                        if ($(".share_nr").length > 0) {
                            $(".share_nr#nr").append("<div class='sortableTip'>该创意已过期，请您充值！<span>5</span>秒后将跳转...</div>");
                            var sort_div = $(".sortableTip");
                            var sort_span = sort_div.children("span");
                            var Timer;
                            var num = 5;

                            Timer = setInterval(function () {
                                sort_span.text(num);
                                num--;
                                if (num == -1) {
                                    clearInterval(Timer);
                                    window.location.href = mainDomain + "sites/index.html";
                                }
                            }, 1000)
                        }
                    }
                }
            });
        } catch (e) { }
    },
    /*提交表单信息*/
    messSubmit: function () {
        var nowPageId = $(".z-current").attr("id");
        if (Mt.yesSubmitArray.indexOf(nowPageId) >= 0) {
            alert("请不要重复提交！");
            return;
        }

        var page_id = $(".z-current .m-img").attr("id").split("page")[1];
        var userid = $(".edit_wrapper").attr("uid");
        var siteid = $(".edit_wrapper").attr("usiteid");
        //该页面所有的元素对象
        var $objLis = $(".z-current ul li");
        var $objLi;
        var $objDiv;
        var elementType;

        //表单存储对象
        $t_customermess = {};
        $t_customerValues = [];
        $t_customerOneValus = {};

        for (var i = 0; i < $objLis.length; i++) {
            $objLi = $objLis.eq(i);
            $objDiv = $objLi.find(".element-box");
            elementType = $objLi.find(".element-box-contents").attr("elementtype");
            var id = "";
            var name = "";
            var text = "";

            if (elementType == "3") { //表单的情况下，保存数据值
                var elementid = elementType = $objLi.find("textarea").attr("elementid");
                text = $objLi.find("textarea").val();
                id = $objLi.find("textarea").attr("elementid");
                name = $objLi.find("textarea").attr("elementname");

                $t_customerOneValus = { Id: id, Name: name, Value: text }
                $t_customerValues.push($t_customerOneValus);
            }
        }
        $t_customermess = { Users_id: userid, Sites_id: siteid, Sites_pages_id: page_id, ValueList: $t_customerValues }

        $.ajax({
            url: apiDomain + "api/Message/SaveMess", type: "POST", data: $t_customermess, success: function (json) {
                if (json != null && json != "") {
                    if (json.status == "200") {
                        Mt.yesSubmitArray.push(nowPageId);
                        alert("提交成功");
                    } else if (json.status == "400") {
                        alert("提交失败");
                    } else if (json.status == "300") {
                        alert("请先填写信息再提交");
                    } else if (json.status == "350") {
                        alert("当前该页面没有输入框,不允许提交");
                    }
                    else if (json.status == "500") {
                        alert("遇到未知错误，提交失败");
                    }
                }
            }
        });
    },
    /*初始化播放视频模块的点击事件*/
    initVideo: function () {
        /*初始化视频图标的点击事件*/
        $(".video_area").unbind("click").click(function () {
            Mt.videoShow($(this).attr("videourl"));
            return;
        });
    },
    /*播放视频*/
    videoShow: function (url) {

        Mt.isPlayVideo = true;

        //封装视频播放html代码
        var src = $(url).attr("src");

        if (src == "" || src == null || src == undefined) {
            Mt.isPlayVideo = false;
            alert("该视频有问题,无法播放");
            return;
        }

        var videoTemplate = "<iframe width='100%' height='200' src=" + src + " frameborder='0' allowfullscreen='' style='position: absolute;top:0; min-height: 45%; max-height: 100%; top: 20%;'></iframe>";

        //追加到静态页面中
        var html = "<div class='video_mask page_effect lock' style='margin:auto;width:100%;height:100%;'>" + videoTemplate + "</div><a class='close_mask' style='z-index:9999px;'></a>";
        $(".z-current").find(".edit_wrapper").append(html);

        /*初始化视频关闭按钮的点击事件*/
        $(".close_mask").unbind("click").click(function () {
            Mt.videoClose();
        });

        //解绑音乐图标点击事件
        $("#audio_btn").unbind("click");

        //关闭背景音乐
        $("#audio_btn").removeClass("play_music").addClass("off");
        $("#playMusic").removeClass("rotate_music");
        $("#mediaMusic").get(0).pause();
    },
    /*关闭视频*/
    videoClose: function () {

        Mt.isPlayVideo = false;

        //重新绑定音乐图标的点击事件
        Mt.playVideo();

        $(".video_mask").remove();
        $(".close_mask").remove();
    },
    //初始化微信分享接口
    initWxJSSDK: function () {
        //只有当微信打开时才初始化微信接口
        if (!Mt.isWeixin()) {
            return;
        }
        $(function () {
            $.ajax({
                url: apiDomain + "api/Message/WxJSSDKConfig",
                type: "Post"
            }).then(function (response) {
                if (response.status == "200") {
                    //初始化微信接口配置
                    wx.config({
                        debug: false,
                        appId: response.result.AppId,
                        nonceStr: response.result.NonceStr,
                        timestamp: response.result.Timestamp,
                        signature: response.result.Signature,
                        jsApiList: response.result.JsApiList
                    });
                    //初始化微信接口功能api
                    wx.ready(function () {
                        Mt.initWxjsApi();
                    });
                }
            });
        });
    },
    //初始化微信接口功能api
    initWxjsApi: function () {
        var title = $("title").text(),
            desc = $("#metaDescription").attr("content"),
            link = window.location.href,
            imgUrl = $("img")[0].src;

        //分享给朋友
        wx.onMenuShareAppMessage({ title: title, desc: desc, link: link, imgUrl: imgUrl });
        //分享到朋友圈
        wx.onMenuShareTimeline({ title: title, desc: desc, link: link, imgUrl: imgUrl });
        //分享到QQ
        wx.onMenuShareQQ({ title: title, desc: desc, link: link, imgUrl: imgUrl });
        //分享到微博
        wx.onMenuShareWeibo({ title: title, desc: desc, link: link, imgUrl: imgUrl });
        //分享到QQ空间
        wx.onMenuShareQZone({ title: title, desc: desc, link: link, imgUrl: imgUrl });
    }
}



