
function calc(btn){
    var span=btn.parentElement.querySelector("span");
    var n=parseInt(span.innerHTML);
    if(btn.innerHTML=="+"){
        n++;
    }else if(n>1){
        n--;
    }else{
        n=0;
    }
    span.innerHTML=n;
    var price=btn.parentElement.previousElementSibling.innerHTML.slice(1);
    var subtotal=price*n;
    btn.parentElement.nextElementSibling.innerHTML="&yen;"+subtotal.toFixed(2);
    var tds=document.querySelectorAll("tbody tr td:last-child");
    for(var i= 0,total=0;i<tds.length;i++) {
        total += parseFloat(tds[i].innerHTML.slice(1));
    }
    document.querySelector("tfoot tr td:last-child")
        .innerHTML="&yen;"+total.toFixed(2);
}
$(function(){
    $("#alert>span").html($(".txt2").html());
    $(".btn1").click(function(){
        $("#alert").css({"display":"block"});
        console.log($(".txt2").html());
        $(".zj").html($(".txt2").html());
    });
    $(".close").click(function(){
        $("#alert").css({"display":"none"});
    });


    $("#alert>img:eq(0)").click(function(){
        $(this).css({"border":"3px solid #5580CE","border-radius":"5px"}).siblings().css({"border":"0"});
    })
    $("#alert>img:eq(1)").click(function(){
        $(this).css({"border":"3px solid #5580CE","border-radius":"5px"}).siblings().css({"border":"0"});
    })
    $("#alert>img:eq(2)").click(function(){
        $(this).css({"border":"3px solid #5580CE","border-radius":"5px"}).siblings().css({"border":"0"});
    })
});

