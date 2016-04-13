$(".app-play").on("click", function(){
	activeTrack.play();
	$(this).addClass('app-control-hide');
	$(".app-pause").removeClass('app-control-hide').addClass('app-control-show');
	return false;
});

$(".app-pause").on("click", function(){
	activeTrack.pause();
	$(".app-play").removeClass('app-control-hide').addClass('app-control-show');
	$(this).addClass('app-control-hide');
	return false;
});