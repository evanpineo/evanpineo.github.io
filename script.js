$(document).ready(function () {
    
    $('.icon-menu').click(function () {
        $('.menu').animate({right: "0px"}, 200);
        
        $('.h-top').animate({right: "-5px"}, 250, function() {
            $(this).addClass('rotateRight');
        });
        
        $('.h-mid').animate({right: "-5px"}, 250, function() {
            $(this).addClass('vanish');
        });
        
        $('.h-bottom').animate({right: "-5px"}, 250, function() {
            $(this).addClass('rotateLeft');
        });
        
        $('.menu').scroll(function() {
            if ($(this).scrollTop()>0) {
                $('.icon-menu').css('z-index','-1');
            } else {
                $('.icon-menu').css('z-index','1000');
            }
        });
        
        $('.icon-menu').css('pointer-events','none');
        // $('body').css('overflow-y','hidden');
        
    });
    
    $('.icon-close').click(function () {
        $('.menu').animate({right: "-285px"}, 200);
        
        $('.h-top').animate({right: "30px"}, 250, function() {
            $(this).removeClass('rotateRight');
        });
        
        $('.h-mid').animate({right: "30px"}, 250, function() {
            $(this).removeClass('vanish');
        });
        
        $('.h-bottom').animate({right: "30px"}, 250, function() {
            $(this).removeClass('rotateLeft');
        });
        
        $('.icon-menu').css('pointer-events','auto');
        // $('body').css('overflow-y','auto');
    });
});
