+function ($) {
				// init controller
				var controller = new ScrollMagic();

				// build scene
				// build tween
				var elements = $("h3");

				$.each(elements, function(index) {
					var tween = TweenMax.from(elements[index], 0.5, {y:-20, scale: 0});
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

				var elements = $("p");
				$.each(elements, function(index) {
					var tween = TweenMax.from(elements[index], 0.5, { scale: 0});
					var scene = new ScrollScene({triggerElement: elements[index],reverse:false,triggerHook:1})
								.setTween(tween)
								.addTo(controller);
				})



				// build scene

}(jQuery);