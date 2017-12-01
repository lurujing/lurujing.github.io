$(function(){
    var c=0;
    function run(){
        c++;
        c = (c == 3) ? 0 : c;
        $("#pic img").eq(c).fadeIn(1000).siblings("img").fadeOut(1000);
    }
    var timer=setInterval(run,3000)
})