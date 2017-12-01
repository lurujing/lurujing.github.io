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
    $("#click>li:eq(2)").click(function(){
        $(".rig3").show().siblings().not("#click").hide();
        $(this).css({"background":"lightsteelblue"}).siblings().css({"background":"#fff"})
    });
    $("#click>li:eq(3)").click(function(){
        $(".rig4").show().siblings().not("#click").hide();
        $(this).css({"background":"lightsteelblue"}).siblings().css({"background":"#fff"})
    });
    $("#click>li:eq(4)").click(function(){
        $(".rig5").show().siblings().not("#click").hide();
        $(this).css({"background":"lightsteelblue"}).siblings().css({"background":"#fff"})
    });
    $("#click>li:eq(5)").click(function(){
        $(".rig6").show().siblings().not("#click").hide();
        $(this).css({"background":"lightsteelblue"}).siblings().css({"background":"#fff"})
    });
    $("#click>li:eq(6)").click(function(){
        $(".rig7").show().siblings().not("#click").hide();
        $(this).css({"background":"lightsteelblue"}).siblings().css({"background":"#fff"})
    });
    $("#click>li:eq(7)").click(function(){
        $(".rig8").show().siblings().not("#click").hide();
        $(this).css({"background":"lightsteelblue"}).siblings().css({"background":"#fff"})
    });
    $("#click>li:eq(8)").click(function(){
        $(".rig9").show().siblings().not("#click").hide();
        $(this).css({"background":"lightsteelblue"}).siblings().css({"background":"#fff"})
    });
    $("#click>li:eq(9)").click(function(){
        $(".rig10").show().siblings().not("#click").hide();
        $(this).css({"background":"lightsteelblue"}).siblings().css({"background":"#fff"})
    });

});
