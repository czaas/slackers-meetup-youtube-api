$(document).ready(function(){
	
	var videoArray,
		currentVideo = 0;

	loadVideo();

	$('#next').on('click', function(){
		// enable next button
		if(currentVideo > videoArray.length){
			currentVideo = 0;
		} else {
			currentVideo++;
		}
		playVideo();
	});

	
	$('#last').on('click', function(){
		// enable last button
		if(currentVideo === 0){
			currentVideo = videoArray.length - 1;
		} else {
			currentVideo--;
		}
		playVideo();
	});

	// function to load videos
	function loadVideo(){
		var myKey = 'AIzaSyB8DNIkjWjz5kOXkGsYIl4zzLNy6-S481I',
			maxResults = 10,
			order = 'date',
			type = 'video',
			videoCaption = 'any',
			videoCategoryId = 24,
			q = 'teaser',
			videoEmbeddable = true;

		var request = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=' + maxResults + '&type=' + type + '&videoCaption=' + videoCaption + '&videoCategoryId=' + videoCategoryId + '&videoEmbeddable=' + videoEmbeddable + '&key=' + myKey;

		$.ajax({
			url: request,
			success:function(data){
				// handle data from your request here
				//data.items[0].videoId
				videoArray = data.items;
				playVideo();

			}
		});
	}

	function playVideo(){
		// use playVideo to display your videos in the app

		var videoId = videoArray[currentVideo].id.videoId;
		var myVideoSrc= 'https://www.youtube.com/embed/' + videoId;

		$('#myVideoEmbeded').attr('src', myVideoSrc);


	}

});
	