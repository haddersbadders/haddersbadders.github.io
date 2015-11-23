new WOW().init();

var controller = new ScrollMagic.Controller();

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#flowers", duration: 500})
					.addTo(controller)

					.on("enter", function () {
            document.getElementById('mountain').play();
					})
          .on("leave", function () {
            $('#mountain').trigger("pause");
          });
