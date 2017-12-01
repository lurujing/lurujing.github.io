$(function(){
    //背景轮播
    var c=0;
    function run(){
        c++;
        c = (c == 3) ? 0 : c;
        $("#pic img").eq(c).fadeIn(1000).siblings("img").fadeOut(1000);
    }
    var timer=setInterval(run,3000);

    //点击
    $(".a-one").click(function(){
        $(this).css({"color":"red"});
        $(".a-two").css({"color":"#fff"})
    });
    $(".a-two").click(function(){
        $(this).css({"color":"red"});
        $(".a-one").css({"color":"#fff"})
    });

    //nav下拉
    $(".more").hover(function(){
        $(this).stop().next().slideDown(500)
    },function(){});
    $(".icon-top>li").hover(function(){},(function(){
        $(".icon-bot").slideUp(500)
    }));

    //鼠标经过
    $(".li1").hover(function(){
        $(".bto1").css({"display":"block"});
        $(".bto2").css({"display":"none"});
        $(".bto3").css({"display":"none"})
    });
    $(".li2").hover(function(){
        $(".bto1").css({"display":"none"});
        $(".bto2").css({"display":"block"});
        $(".bto3").css({"display":"none"})
    });
    $(".li3").hover(function(){
        $(".bto1").css({"display":"none"});
        $(".bto2").css({"display":"none"});
        $(".bto3").css({"display":"block"})
    });
    $(".li4").hover(function(){
        $(".bto1").css({"display":"none"});
        $(".bto2").css({"display":"none"});
        $(".bto3").css({"display":"none"})
    });


    //联系我们
    $(".btn_top").hide();
    $(".btn_top").live("click",function(){
        $('html, body').animate({scrollTop: 0},300);return false;
    })
    $(window).bind('scroll resize',function(){
        if($(window).scrollTop()<=300){
            $(".btn_top").hide();
        }else{
            $(".btn_top").show();
        }
    });

    //图片轮播
    $("#marquee").kxbdMarquee({direction:"left",scrollAmount:1});
});