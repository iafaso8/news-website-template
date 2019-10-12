$(document).ready(function(){
   

    // REMOVES FADEIN CLASSES WHEN SCREEN WIDTH IS SMALL
    function screenClass() {
        if($(window).innerWidth() < 900) {
            $('.fadein-left-slowly').removeClass('fadein-left-slowly');
            $('.fadein-left-quickly').removeClass('fadein-left-quickly');
            $('.fadein').removeClass('fadein');
        }
    }
    screenClass();
    
    // ON RESIZE
    $(window).bind('resize',function(){
        screenClass();
    });
    // ON RESIZE
    // REMOVES FADEIN CLASSES WHEN SCREEN WIDTH IS SMALL


    $(window).scroll( function(){
        // FADEIN-LEFT-SLOWLY - SLOWLY FADEIN FROM LEFT 
        $('.fadein-left-slowly').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','left':'0px'}, 1500);
            }        
        }); 
        // FADEIN-LEFT-SLOWLY - SLOWLY FADEIN FROM LEFT 

        // FADEIN-LEFT-QUICKLY - QUICKLY FADEIN FROM LEFT 
        $('.fadein-left-quickly').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','left':'0px'}, 1000);
            }        
        }); 
        // FADEIN-LEFT-SLOWLY - SLOWLY FADEIN FROM LEFT 

        // FADEIN 
        $('.fadein').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'}, 1800);
            }        
        }); 
        // FADEIN
    });
});