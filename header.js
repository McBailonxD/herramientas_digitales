$(document).ready(function(){

    $(window).scroll(function(){
        if( $(this).()>0 ){
            $('header').addClass('header2');
        } else {
            $('header').removeClass('header2');
        }
    });
});