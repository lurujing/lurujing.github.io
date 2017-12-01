$(function(){
    //���
    $(".a-one").click(function(){
        $(this).css({"color":"red"});
        $(".a-two").css({"color":"#000"})
    });
    $(".a-two").click(function(){
        $(this).css({"color":"red"});
        $(".a-one").css({"color":"#000"})
    });


    //nav����
    $(".more").hover(function(){
        $(this).stop().next().slideDown(500)
    },function(){});
    $(".icon-top>li").hover(function(){},(function(){
        $(".icon-bot").slideUp(500)
    }));




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


    //选项卡
    $("#click>li:eq(0)").click(function(){
        $(".rig1").show().siblings().not("#click").hide();
        $(this).css({"background":"lightsteelblue"}).siblings().css({"background":"#fff"})
    });
    $("#click>li:eq(1)").click(function(){
        $(".rig2").show().siblings().not("#click").hide();
        $(this).css({"background":"lightsteelblue"}).siblings().css({"background":"#fff"})
    });

    //鼠标经过遮罩
    $(".pic>li").hover(function(){
        $(this).find("a").stop().animate({"opacity":"0.7"},500)
    },function(){
        $(this).find("a").stop().animate({"opacity":"0"},500)
        $("a").css("bacground","red")
    })
})
