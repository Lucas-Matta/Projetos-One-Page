$(function(){

    $('nav.menu-desktop a').hover(function(){
        $('nav li').removeClass('selected');
        $(this).parent().addClass('selected');
    });

    $('nav.menu-mobile h3').click(function(){
    	$('ul.nav-desktop').slideToggle();
    });

    $('nav a').click(function(){
    	var href = $(this).attr('href');
    	var offSetTop = $(href).offset().top;

    	$('html,body').animate({'scrollTop':offSetTop},1000);

    	return false;
    });
});