/*-----------头部------------*/
$(document).ready(function(){
    $(".navbar-nav li").click(function () {
        $(".nav li").each(function () {
            $(".nav li").attr('class','');
        });
        $(this).attr('class','active');
    })
})