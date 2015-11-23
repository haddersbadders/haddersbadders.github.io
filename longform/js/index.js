new WOW().init();

var controller = new ScrollMagic.Controller();

	// build scene
	//var scene = new ScrollMagic.Scene({triggerElement: "#pretty", duration: 5000})
				//	.addTo(controller)
      //    .setPin("#flowers");
				//	.on("enter", function () {
        //    document.getElementById('mountain').play();
			//		})
        //  .on("leave", function () {
        //    $('#mountain').trigger("pause");
      //    });


      $(function () { // wait for document ready
      		// build scene
      		var scene = new ScrollMagic.Scene({triggerElement: "#pretty", duration: 900})
      						.setPin("#flowers")

                  .on("enter", function () {
                      document.getElementById('mountain').play();
                      })
                  .on("leave", function () {
                     $('#mountain').trigger("pause");
                   })
      						.addTo(controller);
      	});

        // $(function () { // wait for document ready
        //     // build scene
        //     var scene = new ScrollMagic.Scene({triggerElement: "#bird_video", duration: 300})
        //
        //
        //             .on("enter", function () {
        //                 document.getElementById('mountain').play();
        //                 })
        //             .on("leave", function () {
        //                $('#mountain').trigger("pause");
        //              })
        //             .addTo(controller);
        //   });
        //

// YouTube Stuff

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 'fBCAOjAS9d4',
    playerVars: {
      controls: 0,
      modestbranding: 0,
      showinfo: 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.pauseVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}


$(function () { // wait for document ready
    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#bird_video", duration: 500})


            .on("enter", function () {
                player.playVideo();
                })
            .on("leave", function () {
               player.pauseVideo();
             })
            .addTo(controller);
  });
