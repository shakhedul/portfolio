		 $('.skill-per').each(function(){
		var $this = $(this);
		var per = $this.attr('per');
		$this.css("width",per+'%');
		$({animatedValue: 0}).animate({animatedValue: per},{
			duration: 1000,
			step: function(){
				$this.attr('per', Math.floor(this.animatedValue) + '%');
			},
			complete:function(){
				$this.attr('per', Math.floor(this.animatedValue) + '%');
			}
		});
	});


// Project DONE
$('.num').counterUp({
	delay:10,
	time:1000
});

  /*--------------------------------------------------------------
    6. Progress Bar
  --------------------------------------------------------------*/
  // function progressBarInit() {
  //   $('.st-progressbar').each(function () {
  //     var progressPercentage = $(this).data('progress') + "%";
  //     $(this).find('.st-progressbar-in').css('width', progressPercentage);
  //   });
  // }







 //  var offsetTop = $('#skills').offset().top;
	// $(window).scroll(function() {
 //  var height = $(window).height();
 //  if($(window).scrollTop()+height > offsetTop) {
 //    jQuery('.skill-bar').each(function(){
 //      jQuery(this).find('.skill-per').animate({
 //        width:jQuery(this).attr('per')
 //      },2000);
 //    });
 //  }
 //  });

// jQuery(document).ready(function(){
// 	jQuery('.skill-bar').each(function(){
// 		jQuery(this).find('.skill-per').animate({
// 			width:jQuery(this).attr('per')
// 		},6000);
// 	});
// });


