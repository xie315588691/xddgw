$(function () {

    function themax()
    {
        var a=document.getElementById("left").offsetHeight;
        var b=document.getElementById("center").offsetHeight;
        var c=document.getElementById("right").offsetHeight;
        var themax=Math.max(Math.max(a,b),c)
        document.getElementById("left").style.height=themax+"px";
        document.getElementById("center").style.height=themax+"px";
        document.getElementById("right").style.height=themax+"px";
    }

    function killErrors() {
        return true;
    }
    window.onerror = killErrors;
    //导航

    var _this1 = null;
    $('.nav>li').hover(function () {
        _this1 = $(this);
        _this1.find('.second-nav').show();
        var _this2 = null;
        _this1.find('.second-nav').find('li').hover(function () {
            _this2 = $(this);
            _this2.find('.third-nav').show();
            _this2.find('.third-nav').hover(function () {
                $(this).show();
            }, function () {
                $(this).hide();
            });
        }, function () {
            _this2.find('.third-nav').hide();
        });
    }, function () {
        _this1.find('.second-nav').hide();
    });
    //列表鼠标切换

    $('.case_convert .case_row2 ul').width(1200 * $('.case_convert .case_row2 li').length + 'px');
    $(".case_convert .case_tab a").mouseover(function () {
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        number = index;
        var distance = -1200 * index;
        $('.case_convert .case_row2 ul').stop().animate({
            left: distance
        });
    });

    var auto = 1; //等于1则自动切换，其他任意数字则不自动切换
    if (auto == 1) {
        var number = 0;
        var maxNumber = $('.case_convert .case_tab a').length;

        function autotab() {
            number++;
            number == maxNumber ? number = 0 : number;
            $('.case_convert .case_tab a:eq(' + number + ')').addClass('on').siblings().removeClass('on');
            var distance = -1200 * number;
            $('.case_convert .case_row2 ul').stop().animate({
                left: distance

            });
        }

        var tabChange = setInterval(autotab, 3000);
        //鼠标悬停暂停切换
        $('.case_convert').mouseover(function () {
            clearInterval(tabChange);
        });
        $('.case_convert').mouseout(function () {
            tabChange = setInterval(autotab, 3000);
        });
    }

    $('.lanrenzhijia .content .ul').width(1200 * $('.lanrenzhijia .content li').length + 'px');
    $(".lanrenzhijia .news_t a").mouseover(function () {
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        number = index;
        var distance = -1200 * index;
        $('.lanrenzhijia .content .ul').stop().animate({
            left: distance
        });
    });

    var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
    if (auto == 1) {
        var number = 0;
        var maxNumber = $('.lanrenzhijia .news_t a').length;

        function autotab() {
            number++;
            number == maxNumber ? number = 0 : number;
            $('.lanrenzhijia .news_t a:eq(' + number + ')').addClass('on').siblings().removeClass('on');
            var distance = -1200 * number;
            $('.lanrenzhijia .content .ul').stop().animate({
                left: distance
            });
        }

        var tabChange = setInterval(autotab, 3000);
        //鼠标悬停暂停切换
        $('.lanrenzhijia').mouseover(function () {
            clearInterval(tabChange);
        });
        $('.lanrenzhijia').mouseout(function () {
            tabChange = setInterval(autotab, 3000);
        });
    }


    $(".content > ul >  li > .news_dl > .news_dl_d > div > div > .news_div_item_content").each(function () {
        proatext = $(this).find('div').find('a').html();
        proaurl = $(this).find('div').find('a').attr('href');
        $(this).append("<div class='news_t_rgo'>" + "<a>" + proatext + "<p class='p3'>查看详情 +</p>" + "</a>" + "</div>");
        $(this).find('.news_t_rgo').find('a').attr('href', proaurl)

    });

    $(".content > ul >  li > .news_dl > .news_dl_d >  div > div > .divdgweb_new_div_item_content").each(function () {
        proatext = $(this).find('div').find('a').html();
        proaurl = $(this).find('div').find('a').attr('href');
        $(this).append("<div class='news_t_rgo'>" + "<a>" + proatext + "<p>查看详情 +</p>" + "</a>" + "</div>");
        $(this).find('.news_t_rgo').find('a').attr('href', proaurl)

    });


});
