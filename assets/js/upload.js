var objectUrl;
var title = '';
// var jsmediatags = require("jsmediatags");


$("#app-import-track").change(function(e){
    var file = e.currentTarget.files[0];

    title = file.name;

    $("#filename").text(file.name);
    $("#filetype").text(file.type);
    $("#filesize").text(file.size);

    objectUrl = URL.createObjectURL(file);
    $("#import-audio").prop("src", objectUrl);

});

$("#import-audio").on("canplaythrough", function(e){
    var seconds = e.currentTarget.duration;
    var duration = moment.duration(seconds, "seconds");

    var time = "";
    var hours = duration.hours();
    if (hours > 0) { time = hours + ":" ; }

    time = time + duration.minutes() + ":" + duration.seconds();
    $("#duration").text(time);

    URL.revokeObjectURL(objectUrl);

    addTrackToList(title, time);
});

function addTrackToList(title, time) {
    track = '<section class="app-list-view-row"><div class="app-list-view-col" data-app-list-view-item="#">1</div><div class="app-list-view-col" data-app-list-view-item="title">'+ title +'</div><div class="app-list-view-col" data-app-list-view-item="time">'+ time +'</div><div class="app-list-view-col" data-app-list-view-item="artist">Justin Bieber</div><div class="app-list-view-col" data-app-list-view-item="album">Purpose</div><div class="app-list-view-col" data-app-list-view-item="genre">Pop</div><div class="app-list-view-col" data-app-list-view-item="plays">1</div></section>';
    $(track).appendTo($('#list-view'));
}
