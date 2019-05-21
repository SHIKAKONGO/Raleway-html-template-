$(function() {
		// 1- navbar shrink 
		$(document).ready(function () {
			$(window).scroll(function (){
				if($(document).scrollTop() > 150 ) {
					$('.navbar').addClass('shrink'); 
				} else {
					$('.navbar').removeClass('shrink');
				}
			})
		});
		//2- scroll
		$(document).ready(function (){
			var scrollLink = $('.scroll');
			// smooth scroll 
			scrollLink.click(function (e){
				e.preventDefault();
				$('body,html').animate({
					scrollTop: $(this.hash).offset().top
				}, 1000);
			});
		});
		//3- counter up
		$(".counterup").counterUp({
        delay: 1,
        time: 1000
     	});
		//4- owl carousel for team
		$(document).ready(function () {
			$("#teams").owlCarousel({
				items:3,
		        itemsDesktop:[1000,3],
		        itemsDesktopSmall:[979,2],
		        itemsTablet:[768,2],
		        itemsMobile:[650,1],
		        pagination:true,
		        autoPlay:false
			})
		});
		//5-mixitup
		var mixer = mixitup('.main', {
         selectors: {
            control: '[data-mixitup-control]',
          }
     });

		//6- carousel for clients 
		$(document).ready(function () {
			$("#item").owlCarousel({
				items:1,
		        itemsDesktop:[1000,1],
		        itemsDesktopSmall:[979,1],
		        itemsTablet:[768,1],
		        itemsMobile:[650,1],
		        pagination:true,
		        autoPlay:false
			})
		});
		//7- carousel for brands 
		$('.brand-carousel').owlCarousel({
            loop:true,
            margin:10,
            autoplay:true,
            responsive:{
                0:{
                    items:5
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
		//8-scroll up button
		var scrollButton = $("#scroll-top");
	    $(window).scroll(function()
	       { 
	         $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
	      });     
	            // click on button scroll
	        scrollButton.click(function()
	        {
	            $("html,body").animate({scrollTop: 0}, 600);
	        });
	    //9-gallry for work 
	    $('.view').magnificPopup({
		    type: 'image',
		     gallery: {
		      enabled: true
		    },
		  });
		 $(".grids li").click(function() {
		    $(this).addClass('active').siblings().removeClass('active');
	    });
	    //10-button read 
	    $("#button").click(function(){
        $('html, body').animate ({
          scrollTop: $("#about").offset().top
	        },2000);
	     });
	    //11-active for navabr 
	    $("#mainnav li a").click(function() {
		    $(this).addClass('active').parent().siblings().find('a').removeClass('active');
	    });
	    //12-spinner 
	    // loading elements
	    $(".overlay .spinner").fadeOut(6000, function (){

	        $("body").css("overflow","auto");

	        $(this).parent().fadeOut(5000, function (){

	            // show the scroll
	            
	            $(this).remove();
	            
	        });
	    });
	    //13- change active on scroll for navbar 
	    $(window).scroll(function(){

		        $('.block').each(function(){

		            if($(window).scrollTop() > $(this).offset().top){

		                var blockID = $(this).attr('id');

		                $('.navbar a').removeClass('active');

		                $('.navbar li a[data-scroll="' + blockID + '"]').addClass('active');
		                
		            }

		        });

		    });
 
});