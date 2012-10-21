$(document).ready(function(){


	rotateImgs = function() {
		$("#imgs li:last-child").fadeOut(1000,function(){
			$(this).clone().prependTo("#imgs").css({opacity: "1", display: "block"});
			$(this).remove();
		});
	}

	setInterval("rotateImgs()", 5000);

	

}) 