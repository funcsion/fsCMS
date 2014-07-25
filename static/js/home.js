$(function () {

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        if (elemTop + 50 < docViewBottom) {
            return true
        } else {
            return false
        }
    }

    function animateTop(item, time,callback) {
        if ($(item).attr('init') == 'false'&& isScrolledIntoView($(item).parent()) ){
            $(item).attr('init', 'true');
            setTimeout(function(){
                $(item).animate({'bottom': '0'}, 800, 'easeOutCubic');
                callback;
            },time)
        }
    }

    function ftAnimate(item, time) {
        if ($(item).attr('init') == 'false'&& isScrolledIntoView($(item))) {
            $(item).attr('init', 'true');
            setTimeout(function(){
                $(item).animate({'bottom': '0'}, 800, null);
            },time)
        }
    }


    function animateBot(item, time, callback) {
        $(item).delay(time).animate({'top': '650px'}, 1200, 'easeOutCubic', callback)
    }


    var floor1Init = false,
        boxElemets = $('.J_Box'),
        box2Elemets = $('.J_Box2'),
        tileA = $('.tileA .tile'),
        tileB = $('.tileB .tile'),
        footTags = $('.foot-tags div'),
        fromNav3 = true;

    $.each(tileA, function () {
        $(this).attr('init', 'false');
    });

    $.each(tileB, function () {
        $(this).attr('init', 'false');
    });

    $.each(boxElemets, function () {
        $(this).attr('init', 'false');
    });
    $.each(box2Elemets, function () {
        $(this).attr('init', 'false');
    });
    $.each(footTags, function () {
        $(this).attr('init', 'false');
    });
    $.each($('.services div'), function () {
        $(this).attr('init', 'false');
    });

    function animateInit(){
        $.each(boxElemets, function () {
            if ($(this).attr('init') == 'false' && isScrolledIntoView($(this))) {
                $(this).attr('init', 'true');
                $(this).animate({'left': '50%'}, 1000, 'easeOutCubic');
            }
        });

        $.each(tileA, function () {
            if ($(this).attr('init') == 'false' && isScrolledIntoView($(this))) {
                $(this).attr('init', 'true');
                $(this).animate({'left': '50%'}, 1000, 'easeOutCubic');
            }
        });

        $.each(tileB, function () {
            if ($(this).attr('init') == 'false' && isScrolledIntoView($(this))) {
                $(this).attr('init', 'true');
                $(this).animate({'left': '50%'}, 1000, 'easeOutCubic');
            }
        });

        ftAnimate('.foot-tag1', 0);
        ftAnimate('.foot-tag2', 100);
        ftAnimate('.foot-tag3', 200);
        ftAnimate('.foot-tag4', 300);
        ftAnimate('.foot-tag5', 400);

        ftAnimate('.s1', 0);
        ftAnimate('.s2', 100);
        ftAnimate('.s3', 200);
        ftAnimate('.s4', 300);

        if (!floor1Init) {
            animateTop('.star1', 0);
            animateTop('.star2', 200);
            animateTop('.star3', 400);
            animateTop('.star4', 600,function(){
                floor1Init = true;
            });
        }

    }
    animateInit();
    $(window).scroll(function () {
        animateInit();
    });

    //微博切换
    $('#box2-t1').click(function (ev) {
        ev.preventDefault();
        $('#box2-t2').removeClass('active');
        $(this).addClass('active');
        $('.box2-bd-c2').hide();
        $('.box2-bd-c1').show();
    });
    $('#box2-t2').click(function (ev) {
        ev.preventDefault();
        $('#box2-t1').removeClass('active');
        $(this).addClass('active');
        $('.box2-bd-c1').hide();
        $('.box2-bd-c2').show();
    });



//    //页尾语言展示
//    $('#footer .lang').bind('mouseenter', function (ev) {
//        ev.preventDefault();
//        $(this).addClass('lang-hover');
//    });
//    $('#footer .lang').bind('mouseleave', function (ev) {
//        ev.preventDefault();
//        $(this).removeClass('lang-hover');
//    });


    //轮播
/*    var navflag=false;

    $('.banner-nav li').bind('click',function(e){
        var cur = $(e.currentTarget);
        stopFocusAm();
        if(navflag)return false;
        if(window.console && window.console.log){
           console.log('navgo');
        }
        if(!cur.hasClass('active')){
            navflag=true;


            var i= $.trim($('.banner-nav li.active').attr('class').replace('active','').replace('banner-nav',''));

            //$('.banner'+i+' .banner-img').stop(false,true).css({'left': '-150%'});

            var bannerimg=$('.banner'+i+' .banner-img');

            bannerimg.eq(0).animate({'left':'150%'},1200,'easeOutCubic',function(){

                bannerimg.eq(0).css({'left':'-150%'});
            });
            bannerimg.eq(1).animate({'left':'150%'},1500,'easeOutCubic',function(){
                bannerimg.eq(1).css({'left':'-150%'});
            });
            bannerimg.eq(2).animate({'left':'150%'},800,'easeOutCubic',function(){
                bannerimg.eq(2).css({'left':'-150%'});
            });
            bannerimg.eq(3).animate({'left':'150%'},800,'easeOutCubic',function(){
                bannerimg.eq(3).css({'left':'-150%'});
            });
            bannerimg.eq(4).animate({'left':'150%'},800,'easeOutCubic',function(){
                bannerimg.eq(4).css({'left':'-150%'});
            });
            $('.banner-nav li.active').removeClass('active');
            cur.addClass('active');
            bar.stop();
            bar.css({'width': '0'});
            if(cur.hasClass('banner-nav1')){
                var bg = $('.banner1').attr('data-bg');
                changeBg(bg, function () {
                    $('.banner-nav li').removeClass('active');
                    nav1.addClass('active');
                    img1.animate({'left':'0'},800,'easeOutCubic');
                    img2.animate({'left':'0'},1000,'easeOutCubic');
                    img3.animate({'left':'0'},1200,'easeOutCubic',function(){
                        currentFocusI = 1;
                        changeingFocus = false;
                        navflag=false;
                        starFocustAm();
                    });
                });
            }else if(cur.hasClass('banner-nav2')){
                var bg = $('.banner2').attr('data-bg');
                changeBg(bg, function () {
                    $('.banner-nav li').removeClass('active');
                    nav2.addClass('active');
                    img4.animate({'left':'0'},800,'easeOutCubic');
                    img5.animate({'left':'0'},1000,'easeOutCubic');
                    img6.animate({'left':'0'},1200,'easeOutCubic',function(){
                        currentFocusI = 2;
                        changeingFocus = false;
                        navflag=false;
                        starFocustAm();
                    });
                });
            }else if(cur.hasClass('banner-nav3')){
                var bg = $('.banner3').attr('data-bg');
                changeBg(bg, function () {
                    $('.banner-nav li').removeClass('active');
                    nav3.addClass('active');
                    img7.animate({'left':'0'},800,'easeOutCubic');
                    img8.animate({'left':'0'},1000,'easeOutCubic');
                    img9.animate({'left':'0'},1200,'easeOutCubic',function(){
                        currentFocusI = 3;
                        changeingFocus = false;
                        navflag=false;
                        starFocustAm();
                    });
                });
            }else if(cur.hasClass('banner-nav4')){
                var bg = $('.banner4').attr('data-bg');
                changeBg(bg, function () {
                    $('.banner-nav li').removeClass('active');
                    nav4.addClass('active');
                    img10.animate({'left':'0'},800,'easeOutCubic');
                    img11.animate({'left':'0'},1000,'easeOutCubic');
                    img12.animate({'left':'0'},1200,'easeOutCubic',function(){
                        currentFocusI = 4;
                        changeingFocus = false;
                        navflag=false;
                        starFocustAm();
                    });
                });
            }else if(cur.hasClass('banner-nav5')){
                var bg = $('.banner5').attr('data-bg');
                changeBg(bg, function () {
                    $('.banner-nav li').removeClass('active');
                    nav5.addClass('active');
                    img13.animate({'left':'0'},800,'easeOutCubic');
                    img14.animate({'left':'0'},1000,'easeOutCubic');
                    img15.animate({'left':'0'},1200,'easeOutCubic',function(){
                        currentFocusI = 5;
                        changeingFocus = false;
                        navflag=false;
                        starFocustAm();
                    });
                });
            }

        }
    });

    var img1 = $('.banner1-img1'),
        img2 = $('.banner1-img2'),
        img3 = $('.banner1-img3'),
        img4 = $('.banner2-img1'),
        img5 = $('.banner2-img2'),
        img6 = $('.banner2-img3'),
        img7 = $('.banner3-img1'),
        img8 = $('.banner3-img2'),
        img9 = $('.banner3-img3'),
        img10 = $('.banner4-img1'),
        img11 = $('.banner4-img2'),
        img12 = $('.banner4-img3'),
        img13 = $('.banner5-img1'),
        img14 = $('.banner5-img2'),
        img15 = $('.banner5-img3'),
        bar = $('.banner-bar'),
        bannerBg = $('.banner-bg'),
        nav1 = $('.banner-nav1'),
        nav2 = $('.banner-nav2'),
        nav3 = $('.banner-nav3'),
        nav4 = $('.banner-nav4'),
        nav5 = $('.banner-nav5'),
        index = '',
        st = null,
        changeEnd = false,
        timerFID = null;

    function changeBg(color, callback) {
        bannerBg.fadeOut(300, function () {
            $(this).css('background-image', 'url('+color+')').delay(50).fadeIn(300, callback);
        });
    }
    function barAnimate(callback){
        bar.animate({'width': '100%'}, 2500, 'linear',callback);
    }

    var currentFocusI = 1;
    var changeingFocus = false;

    window.changeBanner=function(){
        if(changeingFocus) return;
        changeingFocus = true;
        if(currentFocusI == 1){

            $('.banner2 .banner-img').stop(false,true);
            $('.banner2 .banner-img').css({'left': '-150%'});
            barAnimate(function(){
                bar.css({'width': '0'});
                changebg2();
            });

        }else if(currentFocusI == 2){
            $('.banner3 .banner-img').stop(false,true);
            $('.banner3 .banner-img').css({'left': '-150%'});
            barAnimate(function(){
                bar.css({'width': '0'});
                changebg3();
            });
        }else if(currentFocusI == 3){
            $('.banner4 .banner-img').stop(false,true);
            $('.banner4 .banner-img').css({'left': '-150%'});
            barAnimate(function(){
                bar.css({'width': '0'});
                changebg4();
            });
        }else if(currentFocusI == 4){
            $('.banner5 .banner-img').stop(false,true);
            $('.banner5 .banner-img').css({'left': '-150%'});
            barAnimate(function(){
                bar.css({'width': '0'});
                changebg5();
            });
        }else if(currentFocusI == 5){
            $('.banner1 .banner-img').stop(false,true);
            $('.banner1 .banner-img').css({'left': '-150%'});
            barAnimate(function(){
                bar.css({'width': '0'});
                changebg1();
            });
        }
    }
    function changebg2(){

        img1.animate({'left':'150%'},1200,'easeOutCubic',function(){
            img1.css({'left':'-150%'});
        });
        img2.animate({'left':'150%'},1500,'easeOutCubic',function(){
            var bg = $('.banner2').attr('data-bg');
            changeBg(bg, function () {
                $('.banner-nav li').removeClass('active');
                nav2.addClass('active');
                img4.animate({'left':'0'},800,'easeOutCubic');
                img5.animate({'left':'0'},1000,'easeOutCubic');
                img6.animate({'left':'0'},1200,'easeOutCubic',function(){
                    currentFocusI = 2;
                    changeingFocus = false;

                });
            });
            img2.css({'left':'-150%'});
        });
        img3.animate({'left':'150%'},800,'easeOutCubic',function(){
            img3.css({'left':'-150%'});
        });
    }

    function changebg1(){
        img13.animate({'left':'150%'},1500,'easeOutCubic',function(){
            var bg = $('.banner1').attr('data-bg');

            changeBg(bg, function () {
                $('.banner-nav li').removeClass('active');
                nav1.addClass('active');
                img1.animate({'left':'0'},800,'easeOutCubic');
                img2.animate({'left':'0'},1000,'easeOutCubic');
                img3.animate({'left':'0'},1200,'easeOutCubic',function(){
                    currentFocusI = 1;
                    changeingFocus = false;
                });
            });
            img13.css({'left':'-150%'});
        });
        img14.animate({'left':'150%'},800,'easeOutCubic',function(){
            img14.css({'left':'-150%'});
        });
        img15.animate({'left':'150%'},1200,'easeOutCubic',function(){
            img15.css({'left':'-150%'});
        });
    }


    function changebg3(){
        img4.animate({'left':'150%'},1500,'easeOutCubic',function(){
            var bg = $('.banner3').attr('data-bg');
            changeBg(bg, function () {
                $('.banner-nav li').removeClass('active');
                nav3.addClass('active');
                img7.animate({'left':'0'},800,'easeOutCubic');
                img8.animate({'left':'0'},1000,'easeOutCubic');
                img9.animate({'left':'0'},1200,'easeOutCubic',function(){
                    currentFocusI = 3;
                    changeingFocus = false;
                });
            });
            img4.css({'left':'-150%'});
        });
        img5.animate({'left':'150%'},800,'easeOutCubic',function(){
            img5.css({'left':'-150%'});
        });
        img6.animate({'left':'150%'},1200,'easeOutCubic',function(){
            img6.css({'left':'-150%'});
        });
    }

    function changebg4(){
        img7.animate({'left':'150%'},1500,'easeOutCubic',function(){
            var bg = $('.banner4').attr('data-bg');
            changeBg(bg, function () {
                $('.banner-nav li').removeClass('active');
                nav4.addClass('active');
                img10.animate({'left':'0'},800,'easeOutCubic');
                img11.animate({'left':'0'},1000,'easeOutCubic');
                img12.animate({'left':'0'},1200,'easeOutCubic',function(){
                    currentFocusI = 4;
                    changeingFocus = false;
                });
            });
            img7.css({'left':'-150%'});
        });
        img8.animate({'left':'150%'},800,'easeOutCubic',function(){
            img8.css({'left':'-150%'});
        });
        img9.animate({'left':'150%'},1200,'easeOutCubic',function(){
            img9.css({'left':'-150%'});
        });
    }
    function changebg5(){
        img10.animate({'left':'150%'},1500,'easeOutCubic',function(){
            var bg = $('.banner5').attr('data-bg');
            changeBg(bg, function () {
                $('.banner-nav li').removeClass('active');
                nav5.addClass('active');
                img13.animate({'left':'0'},800,'easeOutCubic');
                img14.animate({'left':'0'},1000,'easeOutCubic');
                img15.animate({'left':'0'},1200,'easeOutCubic',function(){
                    currentFocusI = 5;
                    changeingFocus = false;
                });
            });
            img10.css({'left':'-150%'});
        });
        img11.animate({'left':'150%'},800,'easeOutCubic',function(){
            img11.css({'left':'-150%'});
        });
        img12.animate({'left':'150%'},1200,'easeOutCubic',function(){
            img12.css({'left':'-150%'});
        });
    }

    function starFocustAm(){
        timerFID = setInterval(function(){
            changeBanner();
        },100);
    }
    function stopFocusAm(){
        clearInterval(timerFID);
    }
    starFocustAm();
*/



//    function changeBg(color, callback) {
//        bannerBg.fadeOut(500, function () {
//            $(this).css('background-image', 'url('+color+')').delay(50).fadeIn(500, callback);
//        });
//    }
//    function barAnimate(){
//
//        bar.animate({'width': '100%'}, 7500, 'linear', function () {
//            bar.css({'width': '0'});
//        });
//    }
//    function changeBanner() {
//
//        if (index == 1) {
//            changeBg2();
//        }
//        else if (index == 2 || index == '') {
//            changeBg1();
//        }
//    }
//    var imgT1,imgT2,imgT3,imgT4,imgT5,imgT6;
//    function changeBg1() {
//        var bg = $('.banner1').attr('data-bg');
//        changeBg(bg, function () {
//            img1.animate({'left': '0'}, 1200, 'easeOutCubic');
//            img2.animate({'left': '0'}, 1500, 'easeOutCubic',function(){
//                barAnimate();
//            });
//            img3.animate({'left': '0'}, 800, 'easeOutCubic');
//
//            bg2out();
//
//            index = 1;
//            nav1.addClass('active');
//            nav2.removeClass('active');
//        });
//    }
//    function bg1out(){
//        imgT1=setTimeout(function(){
//            img1.animate({'left': '150%'}, 1200, 'easeOutCubic',function(){
//                img1.css({'left': '-150%'});
//            });
//        },8500);
//
//        imgT2=setTimeout(function(){
//            img2.animate({'left': '150%'}, 1200, 'easeOutCubic',function(){
//                img2.css({'left': '-150%'});
//            });
//        },8800);
//
//        imgT3=setTimeout(function(){
//            img3.animate({'left': '150%'}, 1200, 'easeOutCubic', function () {
//                img3.css({'left': '-150%'});
//            });
//        },8300);
//    }
//
//    function changeBg2() {
//        var bg = $('.banner2').attr('data-bg');
//        changeBg(bg , function () {
//            img4.animate({'left': '0'}, 1500, 'easeOutCubic',function(){
//                barAnimate();
//            });
//            img5.animate({'left': '0'}, 800, 'easeOutCubic');
//            img6.animate({'left': '0'}, 1200, 'easeOutCubic');
//
//            bg1out();
//
//            index = 2;
//            nav2.addClass('active');
//            nav1.removeClass('active');
//        });
//    }
//
//    function bg2out(){
//        imgT4=setTimeout(function(){
//            img4.animate({'left': '150%'}, 1200, 'easeOutCubic',function(){
//                img4.css({'left': '-150%'});
//            });
//        },8800);
//
//        imgT5=setTimeout(function(){
//            img5.animate({'left': '150%'}, 1200, 'easeOutCubic', function () {
//                img5.css({'left': '-150%'});
//            });
//        },8300);
//
//        imgT6=setTimeout(function(){
//            img6.animate({'left': '150%'}, 1200, 'easeOutCubic', function () {
//                img6.css({'left': '-150%'});
//            });
//        },8500);
//    }
//
//    changeBanner();
//
//    st = setInterval(function () {
//        changeBanner();
//    }, 10000);

    //配件类型选择
    var typeli=$('.jsfittingtype li');
    typeli.bind('click',function(e){
        var cur=$(e.currentTarget);
        typeli.removeClass('selected');
        cur.addClass('selected');
        if(cur.text() =='保护壳'||cur.text() =='耳机'||cur.text() =='贴膜'){
            $('.jsmian').css('display','none');
            $('.jssub').css('display','block');

        }
        if($('.fitting .home').css('display') =='block'){

            $.each(tileA, function () {
                $(this).animate({'left': '-50%'}, 1000, 'easeOutCubic');
            });

            $.each(tileB, function () {
                $(this).animate({'left': '-50%'}, 1000, 'easeOutCubic',function(){
                    $('.fitting .home').css('display','none');
                });

            });
            $('.fitting .list').css('display','block');
        }
    });

    $('.jssub .back').bind('click',function(){
        $('.jsmian').css('display','block');
        $('.jssub').css('display','none');
    });
    // 下拉
    $('body').bind('click',function(){
        $('.selectbox').removeClass('show');
        $('.lang-other').css('display','none');
    });
    $('.selectbox').bind('click',function(e){
        e.stopPropagation();
        var cur=$(e.currentTarget);
        if(cur.hasClass('show')){
            cur.removeClass('show');
        }else{
            cur.addClass('show');
        }
    });
    $('.selectbox .boxlist li').bind('click',function(e){
        var cur=$(e.currentTarget);
        $('.selectbox .name').html(cur.text());

    });

    $('.cartBtn').bind('click',function(e){
        var cur=$(e.currentTarget);
    });

    //detail

    $('.product-detail .tab li').bind('click',function(e){
        var cur=$(e.currentTarget);
        if(!cur.hasClass('active')){
            $('.product-detail .tab li.active').removeClass('active');
            cur.addClass('active');
            $('.detail-item').css('display','none');
            switch (cur.text()){
                case '功能':
                    $('.detail-content .fns').css('display','block');
                    break;
                case '设计':
                    $('.detail-content .design').css('display','block');
                    break;
                case '参数':
                    $('.detail-content .parameter').css('display','block');
                    break;
                case '评论':
                    $('.detail-content .reviews').css('display','block');
                    break;
                case '服务':
                    $('.detail-content .service').css('display','block');
                    break;
            }
        }

    });

    $('.btn-append').bind('click',function(e){
        $('.gotoShoppingCart').css('display','block');
        $('.premiumsBox').css('display','block');
        $('.bg').css('height',document.body.clientHeight);
        $('.bg').css('display','block');
    });
    $('.gotoShoppingCart .close').bind('click',function(e){
        $('.gotoShoppingCart').css('display','none');
    });
    $('.jsxl li').bind('click',function(e){
        var cur=$(e.currentTarget);
        if(!cur.hasClass('selected')){
            cur.addClass('selected');
        }else{
            cur.removeClass('selected');
        }
        quicksand(cur.attr('_type'));
    });
    $('.jsfn li').bind('click',function(e){
        var cur=$(e.currentTarget);
        if(!cur.hasClass('selected')){
            $('.jsfn li.selected').removeClass('selected');
            cur.addClass('selected');
            quicksand(cur.attr('_type'));
        }else{
            cur.removeClass('selected');
        }
    });


    $('.jsnc li').bind('click',function(e){
        var cur=$(e.currentTarget);
        if(!cur.hasClass('selected')){
            $('.jsnc li.selected').removeClass('selected');
            cur.addClass('selected');
            quicksand(cur.attr('_type'));
        }else{
            cur.removeClass('selected');
        }

    });
    $('.jsbb li').bind('click',function(e){
        var cur=$(e.currentTarget);
        if(!cur.hasClass('selected')){
            $('.jsbb li.selected').removeClass('selected');
            cur.addClass('selected');
            quicksand(cur.attr('_type'));
        }else{
            cur.removeClass('selected');
        }
    });
    $('.jscolor li').bind('click',function(e){
        var cur=$(e.currentTarget);
        if(!cur.hasClass('selected')){
            $('.jscolor li.selected').removeClass('selected');
            cur.addClass('selected');
            quicksand(cur.attr('_type'));
        }else{
            cur.removeClass('selected');
        }
    });
    $('.jsstar li').bind('click',function(e){
        var cur=$(e.currentTarget);
        if(!cur.hasClass('selected')){
            $('.jsstar li.selected').removeClass('selected');
            cur.addClass('selected');
            quicksand(cur.attr('_type'));
        }else{
            cur.removeClass('selected');
        }
    });

    $('.increase').bind('click',function(){

        var cur=$('#J_Stock input');
        var _v=parseInt(cur.val())+1;
        if(_v>1){
            $('#J_Stock .reduce').removeClass('disable');
        }else if(_v==1){
            $('#J_Stock .reduce').addClass('disable');
        }

        cur.val(_v);

    });
    $('.reduce').bind('click',function(e){
        var cur=$('#J_Stock input');
        var _v=parseInt(cur.val())-1;
        if(_v>1){
            $('#J_Stock .reduce').removeClass('disable');
        }else if(_v == 1){
            $('#J_Stock .reduce').addClass('disable');
        }
        if(_v>=1){
            cur.val(_v);
        }
    });

    $('.gallery .thumb li').bind('click',function(e){
        var cur=$(e.currentTarget);
        if(!cur.hasClass('selected')){
            $('.gallery .thumb li').removeClass('selected');
            cur.addClass('selected');
            $('.gallery .booth img').attr('src',cur.attr('data'));
        }

    });

    //随心配
    $('.suits .choose').bind('click',function(e){
        var cur=$(e.currentTarget);
        if(cur.hasClass('selected')){
            cur.removeClass('selected');
        }else{
            cur.addClass('selected');
        }
    });

    //
    $('.btn-fav').bind('click',function(){
        if($('.btn-fav a').text()=='收藏'){

            $('.btn-fav a').text('取消');
            $('.favBox .t1').html('收藏宝贝成功');
            $('.favBox .t2').html('您已收藏了5个商品， <a href="#">查看我的收藏>></a>');
            $('.favBox .tip').attr('class','tip s');
        }else{
            $('.favBox .t1').html('您已经收藏过该商品');
            $('.favBox .t2').html('<a href="#">查看我的收藏>></a>');
            $('.favBox .tip').attr('class','tip f');
            $('.btn-fav a').text('收藏');
        }
        $('.favBox').css('display','block');
        $('.bg').css('display','block');
        $('.bg').css('height',document.body.clientHeight);
    });
    $('.favBox .close').bind('click',function(){
        $('.favBox').css('display','none');
        $('.bg').css('display','none');
    });

    // window, "scroll"
    if($('#J_TabBarBox').length>0){
        $(window).bind('scroll',function(){
            if($(window).scrollTop()>1112){
                $('#J_TabBarBox').attr('style','position: fixed;top: 0;width:100%;z-index: 100;');
            }else{
                $('#J_TabBarBox').attr('style','');
            }
        });

    }

    $('.lang-now').bind('click',function(e){
        var cur=$(e.currentTarget);
        e.stopPropagation();
        $('.lang-other').css('display','block');
    });

    //preview
    $('.booth').bind('click',function(){
        $('.preview').css('display','block');
        $('#content').css('display','none');

        $('.preview .photo img').attr('src',$('.booth img').attr('src'));
        //$('.bg').css('display','block');
        //$('.bg').css('height',document.body.clientHeight);
    });
    $('.preview .close').bind('click',function(){
        $('.preview').css('display','none');
        $('#content').css('display','block');
        //$('.bg').css('display','none');
    });


    $('.preview .left').bind('click',function(){
        var p=$('.thumb li.selected').prev();
        if(p.length>0){
            $('.thumb li.selected').removeClass('selected');
            p.addClass('selected');
            $('.preview .photo img').attr('src', p.attr('data'));
        }
    });
    $('.preview .right').bind('click',function(){
        var n=$('.thumb li.selected').next();
        if(n.length>0){
            $('.thumb li.selected').removeClass('selected');
            if(window.console && window.console.log){
               console.log(n);
            }
            n.addClass('selected');
            $('.preview .photo img').attr('src', n.attr('data'));
        }
    });


    /* $('.price').bind('click',function(e){
        e.stopPropagation();
        alert('加入购物车');
        return false;
    }); */


    $('.pifu li').bind('click',function(e){
        var cur=$(e.currentTarget);
        if(!cur.hasClass('on')){
            $('.pifu li.on').removeClass('on');
            cur.addClass('on');

            $('.ahz-img-left img').attr('src',cur.find('img').attr('src').replace('gallery/s','gallery/'));
        }

    });


    //赠品选择框
    $('.premiums').bind('click',function(e){
        $('.premiumsBox').css('display','block');
        $('.bg').css('height',document.body.clientHeight);
        $('.bg').css('display','block');
    });
    $('.premiumsBox .close').bind('click',function(){
        $('.premiumsBox').css('display','none');
        $('.bg').css('display','none');
    });
    $('.premiumsBox .btnok').bind('click',function(){
        $('.premiumsBox').css('display','none');
        $('.bg').css('display','none');
    });
    $('.premiumsBox .btncancel').bind('click',function(){
        $('.premiumsBox').css('display','none');
        $('.bg').css('display','none');
    });

    $('.premiumslist li').bind('click',function(e){
        var cur=$(e.currentTarget);
        if(!cur.hasClass('selected')){
            $('.premiumslist li.selected').removeClass('selected');
            cur.addClass('selected');
        }
    });

    //sandbox 切换特效
    var $applications = $('#applications');
    var i=$applications;
    var quicksand = function (datatype) {
        var d, c = [], o = [], b = 0, e = 0;
        //q = $('.phonelist').find("ul");
        i.find('li').each(function () {
            $(this).removeClass('selected');
            $(this).removeClass('disable');
            if ($(this).attr('data-type') == datatype) {
                $(this).addClass('selected');
            } else {
                $(this).addClass('disable');
            }
        });
        d = i.clone().find('li');
        d.each(function (f, s) {
            if ($(this).hasClass("selected")) {
                c[b] = s;
                b++;
            } else {
                o[e] = s;
                e++;
            }
        });
        d = c.concat(o);

        $applications.quicksand(d, {duration: 800,easing: "easeInOutQuad",adjustHeight: "auto",useScaling: !0});
        setTimeout(function(){
            //$applications.find('li.disable').css('display','none');
        },1000)
    };

});

//轮播组件
(function(win){
    win.timerFID='';
    win.slider={
        currentFocusI:0,
        changeingFocus:false,
        navflag:false,
        speed:800,
        init:function(o){
            var that=this;
            that.o=o;
            that.list= o.find('a.banner');
            that.bar = o.find('.banner-bar');
            that.bannerBg = o.find('.banner-bg');
            that.nav= o.find('.banner-nav li');
            that.initlist();
            that.bindNav();
            that.starFocustAm();
        },
        bindNav:function(){
            var that=this;
            that.nav.bind('click',function(e){
                var cur = $(e.currentTarget), i=0;
                that.bar.stop();
                that.bar.css({'width': '0'});
                if(that.navflag)return false;
                if(!cur.hasClass('active')){
                    that.navflag=true;
                    //计算当前active 值
                    that.animateOut(that.o.find('.banner-nav li.active').attr('i'));
                    if(cur.attr('i')=='0'){
                        i=that.nav.length-1;
                    }else{
                        i=parseInt(cur.attr('i'))-1;
                    }
                    that.animateIn(i);
                }
            });
        },
        initlist:function(){
            var that=this;
            //计算当前active 值
            for(i=0;i<that.nav.length;i++){
                that.nav.eq(i).attr('i',i);
            }
        },
        barAnimate:function(callback){
            var that=this;
            that.bar.animate({'width': '100%'}, 7500, 'linear',callback);
        },
        animateIn:function(i){
            var that=this, o,bg,ci;
            that.stopFocusAm();
            if(i ==that.list.length-1){
                o = that.list.eq(0);
                ci=0;
            }else{
                o = that.list.eq(i+1);
                ci= i+1;
            }
            bg = o.attr('data-bg');
            that.changeBg(bg, function () {
                that.nav.removeClass('active');
                that.nav.eq(ci).addClass('active');

                o.find('.banner-img').eq(0).animate({'left':'0'},that.speed,'easeOutCubic');
                o.find('.banner-img').eq(1).animate({'left':'0'},that.speed+200,'easeOutCubic');
                o.find('.banner-img').eq(2).animate({'left':'0'},that.speed+400,'easeOutCubic',function(){
                    that.currentFocusI = ci;
                    that.changeingFocus = false;
                    that.navflag=false;
                    that.starFocustAm();
                });
            });
        },
        animateInNext:function(i){
            var that=this, o,bg,ci;
            that.stopFocusAm();
            if(i ==that.list.length-1){
                o = that.list.eq(0);
                ci=0;
            }else{
                o = that.list.eq(that.currentFocusI+1);
                ci=that.currentFocusI+1;
            }
            bg = o.attr('data-bg');
            that.changeBg(bg, function () {
                that.nav.removeClass('active');
                that.nav.eq(ci).addClass('active');

                o.find('.banner-img').eq(0).animate({'left':'0'},that.speed,'easeOutCubic');
                o.find('.banner-img').eq(1).animate({'left':'0'},that.speed+200,'easeOutCubic');
                o.find('.banner-img').eq(2).animate({'left':'0'},that.speed+400,'easeOutCubic',function(){
                    that.currentFocusI = ci;
                    that.changeingFocus = false;
                    that.navflag=false;
                    that.starFocustAm();
                });
            });
        },
        /**
         * 当前slider 退出动画
         * @param i
         */
        animateOut:function(i,callback){

            var that=this,o=that.list.eq(i);
            o.find('.banner-img').eq(0).animate({'left':'150%'},that.speed+200,'easeOutCubic',function(){
                o.find('.banner-img').eq(0).css({'left':'-150%'});
                callback&&callback();
            });
            o.find('.banner-img').eq(1).animate({'left':'150%'},that.speed,'easeOutCubic',function(){
                o.find('.banner-img').eq(1).css({'left':'-150%'});
            });
            o.find('.banner-img').eq(2).animate({'left':'150%'},that.speed+400,'easeOutCubic',function(){
                o.find('.banner-img').eq(2).css({'left':'-150%'});
            });
        },
        nextSlider:function(){
            var that=this,_slider,i;
            if(that.changeingFocus) return;
            that.changeingFocus = true;
            //判断是否是最后一个
            if(that.currentFocusI==that.list.length-1){
                _slider = that.list.eq(0);
                i=0;
            }else{
                _slider = that.list.eq(that.currentFocusI+1);
                i=that.currentFocusI+1;
            }

            //初始化下个slider img的位置

            _slider.find('.banner-img').stop(false,true);
            _slider.find('.banner-img').css({'left': '-150%'});

            //初始化进度条
            that.barAnimate(function(){
                that.bar.stop();
                that.bar.css({'width': '0'});

                var ci=that.currentFocusI;
                that.animateOut(ci,function(){
                    that.animateInNext(ci);
                });
            });

        },
        changeBg:function(color, callback){
            var that=this;
            that.bannerBg.fadeOut(500, function () {
                $(this).css('background-image', 'url('+color+')').delay(50).fadeIn(500, callback);
            });
        },
        starFocustAm:function(){
            var that=this;
            win.timerFID = setInterval(function(){
                that.nextSlider();
            },100);
        },
        stopFocusAm:function(){
            clearInterval(win.timerFID);
        }

    };

	window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if( t >= 350 ) {
        $('.pendant').css("display","inline");
    } else {
        $('.pendant').css('display', 'none');
    }
}
})(window);
//初始化轮播组件
window.slider.init($('.slide-banner'));



function fc(){
        $('.kf_a').hover(function(){
        $('.pendant_k').show();
        $('.pendant_kf').css('background','url("../resource/www/images/deepblue/right/kf_h.png"/*tpa=http://www.manyvisions.net/resource/www/images/deepblue/right/kf_h.png*/) no-repeat center top transparent');
    },function(){
        $('.pendant_k').hide();
        $('.pendant_kf').css('background','url("../resource/www/images/deepblue/right/kf.png"/*tpa=http://www.manyvisions.net/resource/www/images/deepblue/right/kf.png*/) no-repeat center top transparent');
    });

    $('.wx_a').hover(function(){
        $('.pendant_w').show();
        $('.pendant_wx').css('background','url("../resource/www/images/deepblue/right/wx_h.png"/*tpa=http://www.manyvisions.net/resource/www/images/deepblue/right/wx_h.png*/) no-repeat center top transparent');
    },function(){
        $('.pendant_w').hide();
        $('.pendant_wx').css('background','url("../resource/www/images/deepblue/right/wx.png"/*tpa=http://www.manyvisions.net/resource/www/images/deepblue/right/wx.png*/) no-repeat center top transparent');
    }); 
}
function chat(type) {
	if(parseInt(Math.random()*10)<5){
		var urls =['http://bizapp.qq.com/webc.htm?new=0&sid=800098768&o=b.qq.com&q=7'];
	}else{
		var urls =['http://crm2.qq.com/page/portalpage/wpa.php?uin=4001666888&cref=&f=1&ty=1&ap=&as=&aty=&a=&dm=undefined&sv=&sp='];
	}

	var chat_url = urls[parseInt(Math.random() * 1000) % urls.length];                
    window.open(chat_url,'', 'width=500, height=400, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );                    return false;
    
}   
