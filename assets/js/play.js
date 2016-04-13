var activeTrack = new Howl({
	src: ['/library/test.mp3']
});

$(document).ready(function(){
	$(".app-list-view-col").on("click", function(){
		var data = $(this).data("appListViewItem");
		if (data === "title") {
			activeTrack.play();
		}
		return false;
	});

});