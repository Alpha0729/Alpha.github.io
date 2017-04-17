/*
-----------头部------------
*/
$(document).ready(function(){
    $(".navbar-nav li").click(function () {
        $(".nav li").each(function () {
            $(".nav li").attr('class','');
        });
        $(this).attr('class','active');
    })
});
window.onload= function () {
    var oF=document.getElementsByClassName("footer-bottom")

    //alert(oF)
    /*window.addEventListener('scroll', function () {
        alert(1)
    },false);*/
}