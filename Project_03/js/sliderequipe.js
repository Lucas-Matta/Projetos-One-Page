$(function(){

	var delay = 3000;
	var posicaoAtual = 0;
	var amt;

	initSlider();
	autoPlay();

	function initSlider(){
		amt = $('.sobre-autor').length
		var sizeContainer = 100 * amt;
		var sizeBoxSingle = 100 / amt;

		$('.sobre-autor').css('width',sizeBoxSingle+'%');
		$('.scrollwraper').css('width',sizeContainer+'%');

		for(var i = 0; i < amt; i++){
			if(i == 0)
				$('.slider-bullets').append('<span style="background-color: rgb(170,170,170);"></span>');
			else
				$('.slider-bullets').append('<span></span');
		}
	}

	function autoPlay(){
		setInterval(function(){
			posicaoAtual++;
			if(posicaoAtual == amt)
				posicaoAtual = 0;
			goToSlider(posicaoAtual);
		},delay)
	}

	function goToSlider(posicaoAtual){

		var offSetX = $('.sobre-autor').eq(posicaoAtual).offset().left - $('.scrollwraper').offset().left;

		$('.slider-bullets span').css('background-color','rgb(200,200,200)');
		$('.slider-bullets span').eq(posicaoAtual).css('background-color','rgb(170,170,170)');

		// STOP para não ter conflito nas animação
		$('.scrollequipe').stop().animate({'scrollLeft':offSetX});
	}

	// STOP para não ter conflito nas animação
	// Para não ter problema com responsivo

	$(window).resize(function(){
		$('.scrollequipe').stop().animate({'scrollLeft':0});
	});


});