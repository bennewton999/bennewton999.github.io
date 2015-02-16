+function ($) {
				// init controller
				var controller = new ScrollMagic();

				// build scene
				// build tween
        var elements = $("h2,h3");



				$.each(elements, function(index) {

					var mySplitText = new SplitText(elements[index], {type:"chars,words"}),
          //tl = new TimelineLite();
          //numWords = mySplitText.words.length;
          chars = mySplitText.chars;

					var tween = TweenMax.staggerFrom(chars, 0.5, {opacity:0,scale: 0},0.0125);
					var scene = new ScrollScene({triggerElement: elements[index],reverse:false,triggerHook:1})
								.setTween(tween)
								.addTo(controller);
				});



				var elements = $("h5");
				$.each(elements, function(index) {
					var tween = TweenMax.from(elements[index], 0.5, { scale: 0});
					var scene = new ScrollScene({triggerElement: elements[index],reverse:false,triggerHook:1})
								.setTween(tween)
								.addTo(controller);
				});

				var elements = $("p").not(":first");
				$.each(elements, function(index) {

					var mySplitText = new SplitText(elements[index], {type:"words"}),
          //tl = new TimelineLite();
          //numWords = mySplitText.words.length;
          chars = mySplitText.words;

					var tween = TweenMax.staggerFrom(chars, 0.5, {opacity:0,scale: 0},0.125);
					var scene = new ScrollScene({triggerElement: elements[index],reverse:false,triggerHook:1})
								.setTween(tween)
								.addTo(controller);
				});



				// build scene

}(jQuery);