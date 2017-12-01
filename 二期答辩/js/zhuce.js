//用户名
function checkName(btn){
    var a=btn.value;
    if(a==""){
        btn.nextElementSibling.innerHTML="姓名不能为空";
    }else if(a.length<4){
        btn.nextElementSibling.innerHTML="姓名不能少于4位";
    }else if(a.length<8){
        btn.nextElementSibling.innerHTML="格式正确";
    }else{
        btn.nextElementSibling.innerHTML="名字太长";
    }
}
//密码输入
function checkPwd(pwd){
    var a=pwd.value;
    if(a==""){
        pwd.nextElementSibling.innerHTML="密码不能为空";
    }else if(a.length<6){
        pwd.nextElementSibling.innerHTML="密码不能少于6位";
    }else if(!isNaN(a)){
        pwd.nextElementSibling.innerHTML="密码不能为纯数字";
    }else if(a.length<16){
        pwd.nextElementSibling.innerHTML="格式正确";
    }else{
        pwd.nextElementSibling.innerHTML="密码太长";
    }
}


//二次密码输入
function checkPwd2(btn){
    var a=document.getElementById("pwd").value;
    var b=btn.value;
    if(a!=b){
        btn.nextElementSibling.innerHTML="两次密码不一致";
    }else if(b==""){
        btn.nextElementSibling.innerHTML="密码不能为空";
    }else{
        btn.nextElementSibling.innerHTML="密码输入一致";
    }
}

//手机号验证
function checkPhone(phone){
    var a=phone.value;
    var b=/^1[3578]\d{9}$/;
    if(b.test(a)){
        phone.nextElementSibling.innerHTML="格式正确";
    }else if(a==""){
        phone.nextElementSibling.innerHTML="手机号不能为空";
    }else{
        phone.nextElementSibling.innerHTML="格式错误";
    }
}
//邮箱验证
function checkEmail(email){
    var a=email.value;
    var b=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (b.test(a)){
        email.nextElementSibling.innerHTML="格式正确";
    }else if(a==""){
        email.nextElementSibling.innerHTML="邮箱不能为空";
    }else{
        email.nextElementSibling.innerHTML="格式错误";
    }
}