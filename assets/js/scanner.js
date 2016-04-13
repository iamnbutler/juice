var dir = "/library";
var fileextension = ".mp3";
var count = 1;
var title = "Title";

$.ajax({
    url: dir,
    success: function (data) {
        // List all mp4 file names in the page
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http:///", "");
            // getTags(filename);
            addTrackToLibrary(filename);
            count++;
        });
    }
});

// function getTags(filename){
// 	console.log('/' + filename);
// 	jsmediatags.read('/' + filename, {
// 	  onSuccess: function(tag) {
// 	    console.log(tag);
// 	  },
// 	  onError: function(error) {
// 	    console.log(':(', error.type, error.info);
// 	  }
// 	});
// }

function addTrackToLibrary(filename) {
	track = '<section class="app-list-view-row" id="track-id' + count + '"><div class="app-list-view-col" data-app-list-view-item="metadata"><data data-meta="src"> /' + filename + '</data><audio src="/' + filename + '"></audio></div><div class="app-list-view-col" data-app-list-view-item="#">' + count + '</div><div class="app-list-view-col app-body-clickable" data-app-list-view-item="title">'+ title +'</div><div class="app-list-view-col" data-app-list-view-item="time">2:01</div><div class="app-list-view-col app-body-clickable" data-app-list-view-item="artist">Justin Bieber</div><div class="app-list-view-col app-body-clickable" data-app-list-view-item="album">Purpose</div><div class="app-list-view-col" data-app-list-view-item="genre">Pop</div><div class="app-list-view-col" data-app-list-view-item="plays">1</div></section>';
  $(track).appendTo($('#list-view'));
}