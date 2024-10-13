$(document).ready(function(){
    // Xử lý menu mobile:
    $(".bars").click(function(){
        $(".menu-mobile").slideDown();
        $(this).hide();
        $(".exit").show();
    });

    $(".exit").click(function(){
        $(".menu-mobile").slideUp();
        $(this).hide();
        $(".bars").show();
    });

    $(window).resize(function(){
        if(window.innerWidth >= 992){
            $(".bars").hide();
            $(".exit").hide();
            $(".menu-mobile").hide();
        }else{
            $(".bars").show();
            $(".exit").hide();
            $(".menu-mobile").hide();
        }
    });

    // Xử lý nút phát Video
    $(".btn-icon-play").click(function(){
        $(".inner-video").show();
        $(this).hide();
        $(".btn-icon-exit").show();
        $(".section-nine .box-body").removeClass("show-before").addClass("hide-before");
    });
    $(".btn-icon-exit").click(function(){
        $(".inner-video").hide();
        $(this).hide();
        $(".btn-icon-play").show();
        $(".section-nine .box-body").removeClass("hide-before").addClass("show-before");
    });
});