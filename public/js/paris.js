var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

jQuery(document).ready(function($){

	if (window.BrowserDetect.browser === "Explorer" && window.BrowserDetect.version < 10){
		$('.navbar').addClass('oldie');
	}
	
	if (window.BrowserDetect.browser === "Explorer"){
		$('audio').addClass('ie');
	}
	
	$('.panel-group').each(function(){ $(this).children().first().addClass('active'); });
	
	/*----------------------------------------------------*/
	// ROTATE WORDS SCRIPT
	/*----------------------------------------------------*/ 
	if ($('#myWords').length){
		if (window.BrowserDetect.browser === "Explorer" && window.BrowserDetect.version < 10){
			$('#myWords').addClass('oldie');
		}
		$("#myWords").wordsrotator({
		    autoLoop: true,             //auto rotate words
		    randomize: false,               //show random entries from the words array
		    stopOnHover: false,             //stop animation on hover
		    changeOnClick: true,           //force animation run on click
		    animationIn: "fadeIn",         //css class for entrace animation
		    animationOut: "fadeOut",           //css class for exit animation
		    speed: 3000,                //delay in milliseconds between two words
		    words: ['轻便', '灵活', '多样', '强大']  //Array of words, it may contain HTML values
		});
	}
	
	
	/*----------------------------------------------------*/
	// Open Project from url
	/*----------------------------------------------------*/ 
	if (window.location.hash != ""){
		window.portfolio_link = false;
		if (jQuery('#portfolio').length){
			if (jQuery('#portfolio a[data-title="'+ window.location.hash.substr(1) +'"]').length){
				window.portfolio_link = true;
				window.arrivingfrom = window.location.hash.substring(1);
			}
		}
		if (!window.portfolio_link)	window.arrivingfrom = window.location.hash.substring(0, window.location.hash.length-1);
	}
	
	/*----------------------------------------------------*/
	// CONTACT FORM
	/*----------------------------------------------------*/    
	
	if ($('#contact_form').length){
		$('#contact_form .service-input').val($('#contact_form .service select').val());
		$('#contact_form .service select').change(function(){ $('#contact_form .service-input').val($('#contact_form .service').val()); });
	}
	
	
	/*----------------------------------------------------*/
	// SKILLS BARS
	/*----------------------------------------------------*/ 
	$(window).scroll(function(){
		$('.skillbar').each(function(){
			if ($(this).hasClass('notinview')){
				$(this).find('.pointerval .value').html('0%');
				if (isScrolledIntoView($(this).attr('id'))){
		    		$(this).removeClass('notinview');
		     		$(this).find('.skill-bar-percent').animate({
						width:jQuery(this).closest('.skillbar').attr('data-percent')
					},{
						duration : 2000, //the duration in ms of the bar animation
						easing: 'easeInOutExpo', //the easing effect of the animation
						step: function(now, fx){
							$(this).siblings('.pointerval').css('left',parseFloat(now, 10)+'%').find('.value').text(parseInt(now, 10)+'%');
						}
					});       
		        }
			}
		});
	});
	
	function sliding_horizontal_graph(id, speed){
	    $("#" + id + " li span").each(function(i){                                  
	        var cur_li = $("#" + id + " li").eq(i).find("span");
	        var w = cur_li.attr("title");
	        cur_li.animate({width: w + "%"}, speed);
	    })
	}
	function graph_init(id, speed){
	    $(window).scroll(function(){
	    	if ($('#'+id).hasClass('notinview')){	    	
		    	if (isScrolledIntoView(id)){
		    		$('#'+id).removeClass('notinview');
		            sliding_horizontal_graph(id, speed);
		        }
	    	}
	    });
	    
	    if (isScrolledIntoView(id)){
	        sliding_horizontal_graph(id, speed);
	    }
	}
	
	/*----------------------------------------------------*/
	// PRELOADER CALLING
	/*----------------------------------------------------*/    

	if (isMobile.any() && $('#home-fsslider').length){
		$('body > #load').remove();
	} else {
		$(".everything").queryLoader2({
	        barColor: "#212121",
	        backgroundColor: "#ffffff",
	        percentage: true,
	        barHeight: 1,
	        completeAnimation: "grow",
	        deepSearch: true,
	        minimumTime: 1000,
	        onComplete: function(){
		        if (window.arrivingfrom){
			        setTimeout(function(){
			        	if (window.portfolio_link){
			        		var done = false;
				        	$('html,body').animate({
					        	scrollTop : $('#portfolio').offset().top - 60
				        	},{
					        	duration: 1200,
					        	easing: 'easeInOutExpo',
					        	complete: function(){
						        	if (!done){
						        		done = true;
							        	$('#portfolio a[data-title="'+ window.arrivingfrom +'"]').eq(0).click(); 	
						        	}
					        	}
				        	});
			        	} else {
			        		$('html,body').animate({
				        		scrollTop : $($(window.arrivingfrom)).offset().top - 60
			        		}, {
				        		duration: 1200,
				        		easing: 'easeInOutExpo'
			        		});
			        	}
			        }, 1000);
		        }
	        }
	    });	
	}
	
	/*----------------------------------------------------*/
	// MAKE VIDEOS RESPONSIVES
	/*----------------------------------------------------*/ 
	$(".video-wrapper").fitVids();
	
	$('.grid .figcaption a.thumb-link, .socialdiv a').tooltip()
	
	/*----------------------------------------------------*/
	// MASTER SLIDER
	/*----------------------------------------------------*/
	
	/*
if ($('#masterslider-fullscreen').length){
		var slider = new MasterSlider();
	    slider.setup('masterslider-fullscreen' , {
	        width:1024,
	        height:768,
	        space:5,
	        view:'basic',
	        autofill:true,
	        speed:20
	    });
	     
	    slider.control('arrows' ,{insertTo:'#masterslider-fullscreen'});  
	    slider.control('bullets');
    }
*/
    
	if ($('#masterslider-showcase').length){
		
		var slider = new MasterSlider();
	    slider.setup('masterslider-showcase' , {
	        width:1400 ,
	        height:514,
	        space:0,
	        fullwidth:true,
	        fillMode:'fit',
	        speed:25,
	        preload:'all',
	        view:'basic',
	        swipe:false,
	        grabCursor:false,
	        autoplay:true,
	        loop:true
	    });
	    slider.control('arrows'); 	
	} 
	
	if ($('#masterslider-video').length){
		var slider = new MasterSlider();
		slider.setup('masterslider-video' , {
		     width:1400,   
		     height:580,  
		     space:1,
		     fullwidth:true,
		     loop:true,
		     preload:1,
		     autoplay:true,
		     swipe: 'false',
		     endPause:true,
		     fillmode:'fill',
		     speed:25
		});	
	}
	
	if ($('#masterslider-post-gallery').length){
		var slider = new MasterSlider();
		slider.setup('masterslider-post-gallery' , {
		    width:540,
		    height:386,
		    fullwidth:true,
		    space:5,
		    view:'mask'
		});
		 
		slider.control('arrows');  
		slider.control('thumblist' , {autohide:false ,dir:'h',arrows:false});	
	}
	
	if ($('#masterslider-post-gallery-sidebar').length){
		var slider = new MasterSlider();
		slider.setup('masterslider-post-gallery-sidebar' , {
		    width:540,
		    height:386,
		    fullwidth:true,
		    space:5,
		    view:'mask'
		});
		 
		slider.control('arrows');  
		slider.control('thumblist' , {autohide:false ,dir:'h',arrows:false});	
	}
			
	if ($('#masterslider-posts').length){
		var slider = new MasterSlider();
		slider.setup('masterslider-posts' , {
	        width:800,   
	        height:350,  
	        space:5,
	        fullwidth:true,
	        autoHeight:true,
	        view:"mask"
	       
	    });
	    slider.control('arrows');
	}
	
	if ($('#masterslider-posts2').length){
		var slider = new MasterSlider();
		slider.setup('masterslider-posts2' , {
	        width:800,   
	        height:350,  
	        space:5,
	        fullwidth:true,
	        autoHeight:true,
	        view:"mask"
	    });
	    slider.control('arrows');
	}
	
	
	if ($('#master-team').length){
		var slider = new MasterSlider();
		slider.setup('master-team' , {
			loop:true,
			width:320,
			height:320,
			speed:20,
			view:'stffade',
			preload:0,
			space:0,
			space:20
		});
		slider.control('arrows');
		slider.control('slideinfo',{insertTo:'#staff-info'});
	}
	
	/*----------------------------------------------------*/
	// TABS Bootstrap INIT
	/*----------------------------------------------------*/
	$('#htabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	  
	})
	$('#htabs a:first').tab('show')
	/*----------------------------------------------------*/
	// TABS Blog INIT
	/*----------------------------------------------------*/ 
	$("#blog-tabs").tytabs({
		tabinit:"1",
		fadespeed:"fast"
	});	
	$('.tabs li').eq(0).click();
	
	
	/*----------------------------------------------------*/
	// FLEXSLIDER
	/*----------------------------------------------------*/ 
	if ( $.browser.safari ) {
		  $('.flexslider').flexslider({						
			animation: "slide",
			slideshow: false,
			slideshowSpeed: 3500,
			animationDuration: 500,
			directionNav: true,
			controlNav: false,						
			useCSS: false
		  });
	 }
	$('#testimonials-slider.flexslider').flexslider({						
		animation: "slide",
		slideshow: true,
		slideshowSpeed: 3500,
		animationDuration: 1000,
		directionNav: true,
		controlNav: true,
		smootheHeight:true,
		after: function(slider) {
		  slider.removeClass('loading');
		}
		
	});
	
	$('#office-slider.flexslider').flexslider({						
		animation: "fade",
		slideshow: true,
		slideshowSpeed: 3500,
		animationDuration: 1000,
		directionNav: true,
		controlNav: true,
		smootheHeight:true,
		after: function(slider) {
		  slider.removeClass('loading');
		}
		
	});
	
	$('#text-slider.flexslider').flexslider({						
		animation: "fade",
		slideshow: true,
		slideshowSpeed: 3500,
		animationDuration: 1000,
		directionNav: false,
		controlNav: true,
		smootheHeight:true,
		after: function(slider) {
		  slider.removeClass('loading');
		}
	});

	$('#agency-slider.flexslider').flexslider({						
		animation: "fade",
		slideshow: true,
		slideshowSpeed: 3500,
		animationDuration: 1000,
		directionNav: false,
		controlNav: false,
		smootheHeight:true,
		after: function(slider) {
		  slider.removeClass('loading');
		}
	});
	
	
	/* SCROLL TOP BUTTON */
	$("#back-top").hide();
	
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();

			} else {
				$('#back-top').fadeOut();
			}
		});

		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1200);
			return false;
		});
	});
	
});

/*----------------------------------------------------*/
/* BLOG ISOTOPE
/*----------------------------------------------------*/
(function(e){"use strict";e.Isotope.prototype._getMasonryGutterColumns=function(){var e=this.options.masonry&&this.options.masonry.gutterWidth||0;var t=this.element.width();this.masonry.columnWidth=this.options.masonry&&this.options.masonry.columnWidth||this.$filteredAtoms.outerWidth(true)||t;this.masonry.columnWidth+=e;this.masonry.cols=Math.floor((t+e)/this.masonry.columnWidth);this.masonry.cols=Math.max(this.masonry.cols,1)};e.Isotope.prototype._masonryReset=function(){this.masonry={};this._getMasonryGutterColumns();var e=this.masonry.cols;this.masonry.colYs=[];while(e--){this.masonry.colYs.push(0)}};e.Isotope.prototype._masonryResizeChanged=function(){var e=this.masonry.cols;this._getMasonryGutterColumns();return this.masonry.cols!==e};e(document).ready(function(){var t=e(".journal");var n=0;var r=0;var i=function(){var e=parseInt(t.data("columns"));var i=t.data("gutterSpace");var s=t.width();var o=0;if(isNaN(i)){i=.02}else if(i>.05||i<0){i=.02}if(s<568){e=1}else if(s<768){e-=2}else if(s<991){e-=1;if(e<2){e=2}}if(e<1){e=1}r=Math.floor(s*i);var u=r*(e-1);var a=s-u;n=Math.floor(a/e);o=r;if(1==e){o=20}t.children(".journal-post").css({width:n+"px",marginBottom:o+"px"})};i();t.isotope({itemSelector:".journal-post",resizable:false,masonry:{columnWidth:n,gutterWidth:r}});t.imagesLoaded(function(){i();t.isotope({itemSelector:".journal-post",resizable:false,masonry:{columnWidth:n,gutterWidth:r}})});e(window).smartresize(function(){i();t.isotope({masonry:{columnWidth:n,gutterWidth:r}})});var s=e(".wc-shortcodes-filtering .wc-shortcodes-term");s.click(function(i){i.preventDefault();s.removeClass("wc-shortcodes-term-active");e(this).addClass("wc-shortcodes-term-active");var o=e(this).attr("data-filter");t.isotope({filter:o,masonry:{columnWidth:n,gutterWidth:r}});return false})})})(jQuery)


/*----------------------------------------------------*/
/* FULLSCREEN IMAGE HEIGHT
/*----------------------------------------------------*/	     
	  
function homeImgHeight(){
  var window_height = $(window).height();
  $('#home').css({'height':window_height});
}
homeImgHeight();
    
$(window).bind('resize',function() {
  homeImgHeight();
  intro_parallax();
 		  
});	 

function intro_parallax() {
	if (!isMobile.any()){
 	$(window).scroll(function() {
        var yPos = -($(window).scrollTop() / 2); 
            var coords = '50% '+ yPos + 'px';
        $('.intro-parallax').css({ backgroundPosition: coords });
    }); 	
	} 
}
intro_parallax();

/*----------------------------------------------------*/
/* SCROLL PAGE
/*----------------------------------------------------*/
$('a.nav-to').click(function(e){
	if ($(this).children('.sub-arrow').length){
		if (!$(this).children('.sub-arrow').is(':hover')){
			$('html, body').animate({
				scrollTop : $($(this).attr('href')).offset().top - 50
			},{
				duration: 1200,
				easing: 'easeInOutExpo',
				complete: function(){
							 console.log($(this).parents('.navbar').length);
							 if ($('.navbar-toggle').is(':visible')) $('.navbar-toggle').trigger('click');
						  }
			})
		    e.preventDefault();
		}
	} else {
		$('html, body').animate({
			scrollTop : $($(this).attr('href')).offset().top - 50
		},{
			duration: 1200,
			easing: 'easeInOutExpo',
			complete: function(){
						 if ($('.navbar-toggle').is(':visible') && $(this).parents('.navbar').length ) $('.navbar-toggle').trigger('click');
					  }
		})
	    e.preventDefault();
	}
});

/*----------------------------------------------------*/
/* SELECT MENU ITEMS WITH WAYPOINTS
/*----------------------------------------------------*/
$(function() {
	var nav_container = $(".navbar");
	var nav = $(".navbar");
	var top_spacing = 0;
	var sections = $("section.nav-boxes");
	var navigation_links = $(".nav a");
	
	sections.waypoint({
		handler: function(event, direction) {
			var active_section;
			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('.nav a[href="#' + active_section.attr("id") + '"]');
			window.location.hash = active_section.attr("id")+"/";
			navigation_links.removeClass("selected");
			active_link.addClass("selected");
		},
		offset: 80
	});
});
jQuery(window).load(function(){   

	  jQuery(document).ready(function($){  
	/*----------------------------------------------------*/
	/* TWITTER CALLBACK FUNCTION
	/*----------------------------------------------------*/
	  if ($('#twitter-feed').length) {
		$('#twitter-feed').tweet({
				username: 'DesignareThemes',
				join_text: 'auto',
				avatar_size: 0,
				count: 4
			});
			
		  $('#twitter-feed').find('ul').addClass('slides');
		   $('#twitter-feed').find('ul li').addClass('slide');
		  $('#twitter-feed').contents().wrapAll('<div class="flexslider">');
	  };
	  
	   // Twitter feed
	  if ($('#twitter-widget').length) {
		$('#twitter-widget').tweet({
				username: 'DesignareThemes',
				join_text: 'auto',
				avatar_size: 0,
				count: 4
			});
		 };
	
	  });
	  
	  
	  $('.twitter-slider .flexslider').flexslider({						
		animation: "slide",
		slideshow: true,
		slideshowSpeed: 3500,
		animationDuration: 1000,
		directionNav: false,
		controlNav: true,
		smootheHeight:true,
		after: function(slider) {
		  slider.removeClass('loading');
		}
		
	});
	  
});	
/*----------------------------------------------------*/
/* PARALLAX STUFF
/*----------------------------------------------------*/		
$(window).bind('load', function() { 
							  
	parallaxInit();	
	$.waypoints("refresh");
	var t=setTimeout(function(){$.waypoints("refresh");},3000);
	
});

function parallaxInit(){
	if (!isMobile.any()){
		$('.parallax').each(function(){
			$(this).parallax();
		});
	}
}		
/*----------------------------------------------------*/
/* ACCORDION
/*----------------------------------------------------*/
(function() {
	var $container = $('.acc-container'),
		$trigger   = $('.acc-trigger');

	$container.hide();
	$trigger.first().addClass('active').next().show();

	var fullWidth = $container.outerWidth(true);
	$trigger.css('width', fullWidth);
	$container.css('width', fullWidth);
	
	$trigger.on('click', function(e) {
		if( $(this).next().is(':hidden') ) {
			$trigger.removeClass('active').next().slideUp(300);
			$(this).toggleClass('active').next().slideDown(300);
		}
		e.preventDefault();
	});
	// Resize
	$(window).on('resize', function() {
		fullWidth = $container.outerWidth(true)
		$trigger.css('width', $trigger.parent().width() );
		$container.css('width', $container.parent().width() );
	});
})();
/*----------------------------------------------------*/
/* TABS Blog
/*----------------------------------------------------*/
(function($){$.fn.tytabs=function(options){var defaults={prefixtabs:"tab",prefixcontent:"content",classcontent:"tabscontent",tabinit:"1",catchget:"tab",fadespeed:"normal"},opts=$.extend({},defaults,options);return this.each(function(){var obj=$(this);opts.classcontent="."+opts.classcontent;opts.prefixcontent="#"+opts.prefixcontent;function showTab(id){$(opts.classcontent,obj).stop(true,true);var contentvisible=$(opts.classcontent+":visible",obj);if(contentvisible.length>0){contentvisible.fadeOut(opts.fadespeed,function(){fadeincontent(id)})}else{fadeincontent(id)}$("#"+opts.prefixtabs+opts.tabinit).removeAttr("class");$("#"+opts.prefixtabs+id).attr("class","current");opts.tabinit=id}function fadeincontent(id){$(opts.prefixcontent+id,obj).fadeIn(opts.fadespeed)}$("ul.tabs li",obj).click(function(){showTab($(this).attr("id").replace(opts.prefixtabs,""));return false});var tab=getvars(opts.catchget);showTab(((tab&&$(opts.prefixcontent+tab).length==1)?tab:($(opts.prefixcontent+opts.tabinit).length==1)?opts.tabinit:"1"))})};function getvars(q,s){s=(s)?s:window.location.search;var re=new RegExp("&"+q+"=([^&]*)","i");return(s=s.replace(/^\?/,"&").match(re))?s=s[1]:s=""}})(jQuery);
	
/*----------------------------------------------------*/
/* PORTFOLIO STUFF
/*----------------------------------------------------*/
jQuery(window).load(function(){   
	if (jQuery('#portfolio').length){
	
		if (isMobile.any()){
			$('#portfolio .masonry_item figure').each(function(){
				$(this).hover(function(){
					$(this).find('img').addClass('iFigureHover');
					$(this).find('.figcaption').addClass('iFigCaption');
				}, function(){
					$(this).find('img').removeClass('iFigureHover');
					$(this).find('.figcaption').removeClass('iFigCaption');
				});
			});
		}
		
		if (window.BrowserDetect.browser === "Explorer" && window.BrowserDetect.version < 10){
			$('#portfolio .cs-style-3').addClass('oldie');
			$('#portfolio .masonry_item figure').each(function(){
				$(this).hover(function(){
					$(this).find('img').stop().animate({top: '-50px'}, 300, 'easeInOutExpo');
					$(this).find('.figcaption').stop().animate({bottom: $(this).find('.figcaption').outerHeight()}, 300, 'easeInOutExpo');
				}, function(){
					$(this).find('img').stop().animate({top: '0px'}, 300, 'easeInOutExpo');
					$(this).find('.figcaption').stop().animate({bottom: '0px'}, 300, 'easeInOutExpo');
				});
			});
		}
	
		$(".projects-overlay #pagecontent").find('.viewport').height($(window).height());
		if (isMobile.any()){
			$(".projects-overlay #pagecontent").tinyscrollbar({ scrollInvert: true });
		} else {
			$(".projects-overlay #pagecontent").tinyscrollbar();	
		}
		
		/* Portfolio Isotope */
		var worksisotope = $('#works_masonry > ul');
		worksisotope.isotope({
			animationEngine : 'best-available',
		  	animationOptions: {
		     	duration: 180,
		     	queue: false
		   	},
			layoutMode: 'fitRows'
		});	
		/* Set Columns with */
		function setColumns() { 
			var winWidth = $(window).width(), 
				columnNumb = 1;
			if (winWidth > 1500) {
				columnNumb = 5;
			} else if (winWidth > 900) {
				columnNumb = 4;
			} else if (winWidth > 600) {
				columnNumb = 3;
			} else if (winWidth > 450) {
				columnNumb = 2;
			}
			return columnNumb;
		}		
		function divideInColumns() { 
			var winWidth = $(window).width(), 
				columnNumb = setColumns(), 
				postWidth = Math.floor(winWidth / columnNumb);
			
			worksisotope.find('.masonry_item').each(function () { 
				$(this).css( { 
					width : postWidth + 'px' 
				});
			});
		}		
		
		function runProjects() { 
			divideInColumns();
			worksisotope.isotope('reLayout');
		}
		
		worksisotope.imagesLoaded(function () { 
			divideInColumns();
		});
		
		$(window).bind('resize', function () { 
			runProjects();			
		});
		
		/* Category Filter */
		$('.filter:not(.gallery) li a').click(function(){
			$('.filter li a').removeClass('active');
			$(this).addClass('active');
			
			var selector = $(this).attr('data-option-value');
			$(this).closest('.filter').attr('data-option-selected',selector);
			worksisotope.isotope({ filter: selector });
		});
		
		var triggerBttn = document.querySelectorAll( 'a.trigger-overlay' );
		$(triggerBttn).each(function(e){
			$(this).click(function(){
				toggleOverlay($(this).closest('.masonry_item'));
			});
		});
		
		if (window.BrowserDetect.browser === "Explorer" && window.BrowserDetect.version < 10){
			$('.projects-overlay').addClass('oldie');
		}
		
		/* Projects Overlay */
		function toggleOverlay(projitem) {
			$('.projects-overlay').addClass('open');
			if ($('.projects-overlay').hasClass('oldie')){
				$('.projects-overlay').animate({
					'height': '100%',
					'top': '0%',
					'overflow': 'visible'
				}, 500);
			}
			var dataselected = $('#projects-filter').attr('data-option-selected');
			switch (dataselected){
				case "*": 
					var projindex = $(projitem).index();
					$('.projects-overlay').attr('data-index', projindex );
					if ($('#works_masonry li').length > 1){
						// needs nav
						$('.pageXofY .pageX').html(projindex+1);
						$('.pageXofY .ofY').html($('#works_masonry li').length);
						if (projindex == 0) $('.projects-navigation .prev-proj').addClass('disable');
						else $('.projects-navigation .prev-proj').removeClass('disable');
						if (projindex == $('#works_masonry li').length-1) $('.projects-navigation .next-proj').addClass('disable');
						else $('.projects-navigation .next-proj').removeClass('disable');
						$('.projects-navigation .next-proj a').click(function(){ 
						
							if (!$(this).parent('.disable').length){
								$('.projects-overlay #projects-loader').removeClass('transitioned').css({'width': '0%', 'opacity':1});
								projindex++;
								$('.pageXofY .pageX').html(projindex+1);
								
								if ($('.projects-overlay').hasClass('oldie')){
									$('#pageloader #projects').animate({
										'margin-top': '-100%',
										opacity: 0
									}, 500);
								} else {							
									$('#pageloader #projects').css({'transform':'translateY(-100%)', 'opacity':0});
								}
								setTimeout(function(){
									loadContent($('#works_masonry li').eq(projindex).find('a.loadcontent').attr('href'), $('#works_masonry li').eq(projindex).find('a.loadcontent').attr('data-title'), "up");
									if ($(".projects-overlay #pagecontent").find('.overview').height() < $(window).height()){
						                $(".projects-overlay #pagecontent").data("plugin_tinyscrollbar")['contentRatio'] = 1;
					                } else {
						                $(".projects-overlay #pagecontent").data("plugin_tinyscrollbar").update("relative");
					                }
								}, 500);
								if (projindex == 0) $('.projects-navigation .prev-proj').addClass('disable');
								else $('.projects-navigation .prev-proj').removeClass('disable');
								if (projindex == $('#works_masonry li').length-1) $('.projects-navigation .next-proj').addClass('disable');
								else $('.projects-navigation .next-proj').removeClass('disable');		
							}
						
						});
						$('.projects-navigation .prev-proj a').click(function(){
						
							if (!$(this).parent('.disable').length){
								$('.projects-overlay #projects-loader').removeClass('transitioned').css({'width': '0%', 'opacity':1});
								projindex--;
								$('.pageXofY .pageX').html(projindex+1);
								if ($('.projects-overlay').hasClass('oldie')){
									$('#pageloader #projects').animate({
										'margin-top': '100%',
										opacity: 0
									}, 500);
								} else {
									$('#pageloader #projects').css({'transform':'translateY(100%)', 'opacity':0});
								}
								setTimeout(function(){
									loadContent($('#works_masonry li').eq(projindex).find('a.loadcontent').attr('href'), $('#works_masonry li').eq(projindex).find('a.loadcontent').attr('data-title'), "down");
									if ($(".projects-overlay #pagecontent").find('.overview').height() < $(window).height()){
						                $(".projects-overlay #pagecontent").data("plugin_tinyscrollbar")['contentRatio'] = 1;
					                } else {
						                $(".projects-overlay #pagecontent").data("plugin_tinyscrollbar").update("relative");
					                }
								}, 500);
								if (projindex == 0) $('.projects-navigation .prev-proj').addClass('disable');
								else $('.projects-navigation .prev-proj').removeClass('disable');
								if (projindex == $('#works_masonry li').length-1) $('.projects-navigation .next-proj').addClass('disable');
								else $('.projects-navigation .next-proj').removeClass('disable');											
							}

						});
					} else {
						// disable nav
						$('.projects-navigation div').addClass('disable');
					}
				break;
				default:
					
					var projindex = $(projitem).siblings(dataselected).addBack().index($(projitem))
					
					$('.projects-overlay').attr('data-index', projindex );
					
					if ($('#works_masonry li'+dataselected).length > 1){
						// needs nav
						$('.pageXofY .pageX').html(projindex+1);
						$('.pageXofY .ofY').html($('#works_masonry li'+dataselected).length);
						if (projindex == 0) $('.projects-navigation .prev-proj').addClass('disable');
						else $('.projects-navigation .prev-proj').removeClass('disable');
						if (projindex == $('#works_masonry li'+dataselected).length-1) $('.projects-navigation .next-proj').addClass('disable');
						else $('.projects-navigation .next-proj').removeClass('disable');
						$('.projects-navigation .next-proj a').click(function(){

							if (!$(this).parent('.disable').length){
								$('.projects-overlay #projects-loader').removeClass('transitioned').css({'width': '0%', 'opacity':1});
								projindex++;
								$('.pageXofY .pageX').html(projindex+1);
								if ($('.projects-overlay').hasClass('oldie')){
									$('#pageloader #projects').animate({
										'margin-top': '-100%',
										opacity: 0
									}, 500);
								} else {
									$('#pageloader #projects').css({'transform':'translateY(-100%)', 'opacity':0});
								}
								setTimeout(function(){
									loadContent($('#works_masonry li'+dataselected).eq(projindex).find('a.loadcontent').attr('href'), $('#works_masonry li'+dataselected).eq(projindex).find('a.loadcontent').attr('data-title'), "up");
									if ($(".projects-overlay #pagecontent").find('.overview').height() < $(window).height()){
						                $(".projects-overlay #pagecontent").data("plugin_tinyscrollbar")['contentRatio'] = 1;
					                } else {
						                $(".projects-overlay #pagecontent").data("plugin_tinyscrollbar").update("relative");
					                }
								}, 500);
								if (projindex == 0) $('.projects-navigation .prev-proj').addClass('disable');
								else $('.projects-navigation .prev-proj').removeClass('disable');
								if (projindex == $('#works_masonry li'+dataselected).length-1) $('.projects-navigation .next-proj').addClass('disable');
								else $('.projects-navigation .next-proj').removeClass('disable');	
							}
							
						});
						$('.projects-navigation .prev-proj a').click(function(){

							if (!$(this).parent('.disable').length){
								$('.projects-overlay #projects-loader').removeClass('transitioned').css({'width': '0%', 'opacity':1});
								projindex--;
								$('.pageXofY .pageX').html(projindex+1);
								if ($('.projects-overlay').hasClass('oldie')){
									$('#pageloader #projects').animate({
										'margin-top': '100%',
										opacity: 0
									}, 500);
								} else {
									$('#pageloader #projects').css({'transform':'translateY(100%)', 'opacity':0});
								}
								setTimeout(function(){
									loadContent($('#works_masonry li'+dataselected).eq(projindex).find('a.loadcontent').attr('href'), $('#works_masonry li'+dataselected).eq(projindex).find('a.loadcontent').attr('data-title'), "down");
									if ($(".projects-overlay #pagecontent").find('.overview').height() < $(window).height()){
						                $(".projects-overlay #pagecontent").data("plugin_tinyscrollbar")['contentRatio'] = 1;
					                } else {
						                $(".projects-overlay #pagecontent").data("plugin_tinyscrollbar").update("relative");
					                }
								}, 500);
								if (projindex == 0) $('.projects-navigation .prev-proj').addClass('disable');
								else $('.projects-navigation .prev-proj').removeClass('disable');
								if (projindex == $('#works_masonry li'+dataselected).length-1) $('.projects-navigation .next-proj').addClass('disable');
								else $('.projects-navigation .next-proj').removeClass('disable');
							}

						});
					} else {
						// disable nav 
						$('.projects-navigation div').addClass('disable');
						$('.pageXofY .pageX').html('1');
						$('.pageXofY .ofY').html('1');
					}
					
					
				break;
			}
		}
		
		$('button.overlay-close').click(function(){
			$('.projects-overlay').removeClass('open');
			if ($('.projects-overlay').hasClass('oldie')){
				$('.projects-overlay').animate({
					'height': '0%',
					'top': '50%',
					'overflow': 'hidden'
				}, 500);
			}
			window.location.hash = '#portfolio/';
			$('.projects-overlay').attr('data-index',-1);
			$('#pageloader').html('');
			$('.projects-navigation a').unbind();
		});
	}
	
});

/*----------------------------------------------------*/
/* Classie
/*----------------------------------------------------*/
( function( window ) {
	'use strict';
	function classReg( className ) {
	  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
	}
	var hasClass, addClass, removeClass;
	
	if ( 'classList' in document.documentElement ) {
	  hasClass = function( elem, c ) {
	    return elem.classList.contains( c );
	  };
	  addClass = function( elem, c ) {
	    elem.classList.add( c );
	  };
	  removeClass = function( elem, c ) {
	    elem.classList.remove( c );
	  };
	}
	else {
	  hasClass = function( elem, c ) {
	    return classReg( c ).test( elem.className );
	  };
	  addClass = function( elem, c ) {
	    if ( !hasClass( elem, c ) ) {
	      elem.className = elem.className + ' ' + c;
	    }
	  };
	  removeClass = function( elem, c ) {
	    elem.className = elem.className.replace( classReg( c ), ' ' );
	  };
	}
	
	function toggleClass( elem, c ) {
	  var fn = hasClass( elem, c ) ? removeClass : addClass;
	  fn( elem, c );
	}
	
	var classie = {
	  hasClass: hasClass,
	  addClass: addClass,
	  removeClass: removeClass,
	  toggleClass: toggleClass,
	  has: hasClass,
	  add: addClass,
	  remove: removeClass,
	  toggle: toggleClass
	};
	
	if ( typeof define === 'function' && define.amd ) {
	  define( classie );
	} else {
	  window.classie = classie;
	}
})( window );
/*----------------------------------------------------*/
/* ANIMATE HEADER
/*----------------------------------------------------*/
var cbpAnimatedHeader = (function() {
	var docElem = document.documentElement,
		header = document.querySelector( '.navbar' ),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
			$('.hide-on-start.oldie').animate({ top: '0px' },1000);
		}
		else {
			classie.remove( header, 'navbar-shrink' );
			$('.hide-on-start.oldie').animate({ top: '-300px' },1000);
			$('.navbar-collapse').removeClass("in");
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();

$(window).load(function(){
	$(window).resize();
	if ($('#team .master-slider .ms-nav-prev').length && $('#team .master-slider .ms-nav-prev').length){
		$('#team .master-slider').css({'z-index':10,'left':'10px'});
		$('#team .ms-staff-carousel').append('<div class="nav-bearer" style="position:absolute;width:100%;height:100%;top:0;left:0;-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;"><div class="container" style="height:100%;"></div></div>');
		$('#team .ms-staff-carousel .nav-bearer .container').append($('#team .master-slider .ms-nav-prev')).append($('#team .master-slider .ms-nav-next'));
		$('#team .ms-staff-carousel .nav-bearer .container div').css({'position':'relative', 'top':'20%'});
		$('#team .ms-staff-carousel .nav-bearer .container .ms-nav-prev').css({'float':'left','left':'0px'});
		$('#team .ms-staff-carousel .nav-bearer .container .ms-nav-next').css({'float':'right','right':'0px'});
	}

});
/*----------------------------------------------------*/
/* WAYPOINTS SCROLL INTO VIEW
/*----------------------------------------------------*/
function isScrolledIntoView(id){
    var elem = "#" + id;
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    if ($(elem).length > 0){
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
    }

    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
      && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
}
/*----------------------------------------------------*/
/* NUMERICAL INCREMENTS
/*----------------------------------------------------*/
function incrementNumerical(id, percent, speed){
	setTimeout(function(){
		var newVal = parseInt($(id+' .value').html(),10)+speed;

		if (newVal > percent) newVal = percent;
		$(id+' .value').html(newVal);
		if (newVal < percent){
			incrementNumerical(id, percent, speed);
		}
	}, 1);
}

/* BEGIN: ANIMATED CONTENTS */
$(document).ready(function(){
	
	/* define if you want to display the contents animation (true|false) */
	var effectsOnMobiles = false;
	
	var doAnimations = false;
	if (isMobile.any() && effectsOnMobiles) doAnimations = true;
	if (isMobile.any() && !effectsOnMobiles) doAnimations = false;
	if (!isMobile.any()) doAnimations = true;
	
	if (isMobile.any()){
		$('.parallax').css('background-attachment','scroll');
		$('#intro-block .intro-text .intro-big').css('opacity', '1');
	}
	
	if (doAnimations){
		$('.animated').each(function(e){
			var el = $(this);
			var classes = $(el).attr('class').split(" ");
			var delay = false;
			for (var i=0; i<classes.length; i++){
				if (classes[i].indexOf("delay-") > -1){
					delay = classes[i].slice(6,classes[i].length)/1000;
				}
			}
			if (window.BrowserDetect.browser === "Explorer" && window.BrowserDetect.version < 10){
				$(el).removeClass(effect).addClass('notinview').css({
					opacity: 0
				});
				$(el).waypoint({
					handler: function() {
						if ($(this).hasClass('notinview')){
							$(this).removeClass('notinview');	
							var elem = $(this);
							setTimeout(function(){
								$(elem).animate({
									opacity: 1
								}, 1000);
							}, delay*1000);
						}
					},
					offset: '95%',
					triggerOnce: true
				}, function(){ $.waypoints("refresh"); });
			} else {
				var effect = getEffect($(el));
				$(el).removeClass(effect).addClass('notinview').css({
					'-webkit-animation-delay': delay+'s',
					'-moz-animation-delay': delay+'s',
					'animation-delay': delay+'s',
					opacity: 0
				});
				$(el).waypoint({
					handler: function() {
						if ($(this).hasClass('notinview')){
							$(this).addClass(effect).removeClass('notinview');	
							$(this).css('opacity', 1);	
						}
					},
					offset: '75%',
					triggerOnce: true
				}, function(){ $.waypoints("refresh"); });	
			}
		});
	}
});


function getEffect(el){
	var effects = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp", "bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig", "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "fadeOutUpBig", "flip", "flipInX", "flipInY", "flipOutX", "flipOutY", "lightSpeedIn", "lightSpeedOut", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight", "slideInDown", "slideInLeft", "slideInRight", "slideOutLeft", "slideOutRight", "slideOutUp", "hinge", "rollIn", "rollOut"]
	var effect = false;
	for (var i=0; i<effects.length; i++){
		if (el.hasClass(effects[i])) {
			effect = effects[i];
		} 
	}
	effect = effect.toString();
	return effect;
}


/*----------------------------------------------------*/
/* CONTACT FORM
/*----------------------------------------------------*/
jQuery(document).ready(function(){

	if (window.BrowserDetect.browser === "Explorer" && window.BrowserDetect.version < 10){
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			}
		}).blur(function() {
			var input = $(this);
			if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			}
		}).blur();
	}
	
	if (window.BrowserDetect.browser === "Explorer"){
		$('.contact-form select').focus(function(){ $(this).css('color','black'); }).blur(function(){ $(this).css('color','white'); }).blur();	
	}
	
	//if submit button is clicked
	$('.contact-form #submit').click(function () {		
		
		$(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
			}
		});
		
		var name = $('input[name=name]');
		var email = $('input[name=email]');
		var subject = $('input[name=subject]');
		var comment = $('textarea[name=message]');

		if (name.val()=='') {
			name.addClass('hightlight');
			return false;
		} else name.removeClass('hightlight');
		
		if (email.val()=='') {
			email.addClass('hightlight');
			return false;
		} else email.removeClass('hightlight');

		//E-mail address validation
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if(reg.test(email.val()) == false) {		 
			email.addClass('hightlight');
			return false;
		} else email.removeClass('hightlight');	  
		
		if (comment.val()=='') {
			comment.addClass('hightlight');
			return false;
		} else comment.removeClass('hightlight');
		
		//organize the data properly
		var data = 'name=' + name.val() + '&email=' + email.val() + '&subject=' + 
		subject.val() + '&comment='  + encodeURIComponent(comment.val());
		
		//disabled all the text fields
		$('.contact input, .contact textarea').attr('disabled','true');
		
		//show the loading sign
		$('.loading').show();
		
		//start the ajax
		$.ajax({
			//this is the php file that processes the data and send mail
			url: "contact-form/send.php",	
			type: "GET",
			data: data,				
			cache: false,
			
			//success
			success: function (html) {				
				//if process.php returned 1/true (send mail success)
				if (html==1) {					
					//clear the form
					$('.contact-form input, .contact-form textarea').val('');
					$('.contact-form select').val($('.contact-form select option').eq(0).val());
					if (window.BrowserDetect.browser === "Explorer" && window.BrowserDetect.version < 10){
						$('[placeholder]').focus(function() {
							var input = $(this);
							if (input.val() == input.attr('placeholder')) {
								input.val('');
								input.removeClass('placeholder');
							}
						}).blur(function() {
							var input = $(this);
							if (input.val() == '' || input.val() == input.attr('placeholder')) {
								input.addClass('placeholder');
								input.val(input.attr('placeholder'));
							}
						}).blur();
					}
					//show the success message
					$('.form-success').slideDown('slow');
					setTimeout(function(){
						$('.form-success').slideUp('slow');
					}, 5000);
					
				//if process.php returned 0/false (send mail failed)
				} else alert('An unexpected error occured. Please try again later.');				
			}		
		});
		return false;
	});	
});	



/*----------------------------------------------------*/
/* Master Slider Team Member
/*----------------------------------------------------*/
(function(){window.MSStfFadeView=function(n){MSWaveView.call(this,n),this.$element.removeClass("ms-wave-view").addClass("ms-stf-view"),this._3dreq=!0},MSStfFadeView.extend(MSWaveView);var n=MSStfFadeView.prototype,t=MSStfFadeView.prototype;n.__updateSlidesHoriz=function(n,t){var i=Math.abs(t*.6/this.__width);i=1-Math.min(i,.6),n.$element.css("opacity",i)},n.__updateSlidesVertic=function(n,t){this.__updateSlidesHoriz(n,t)},MSSlideController.registerView("stffade",MSStfFadeView)})(),function(){window.MSStfView=function(n){MSWaveView.call(this,n),this.$element.removeClass("ms-wave-view").addClass("ms-stf-view"),this._3dreq=!0,this.options.centerSpace=this.options.centerSpace||1},MSStfView.extend(MSWaveView),MSStfView._3dreq=!0,MSStfView._fallback=MSStfFadeView;var n=MSStfView.prototype,t=MSStfView.prototype;n.__calcview=function(n,t){var i=t/2*n/(n+2e3);return i*(n+2e3)/2e3},n.__updateSlidesHoriz=function(n,t){var i=Math.abs(t*100/this.__width);i=-Math.min(i,100)*15,n.$element.css(window._csspfx+"transform","translateZ("+i+"px) rotateY(0.01deg) translateX("+(t<0?1:-1)*-this.__calcview(i,this.__width)*this.options.centerSpace+"px)")},n.__updateSlidesVertic=function(n,t){this.__updateSlidesHoriz(n,t)},MSSlideController.registerView("stf",MSStfView)}()

/*----------------------------------------------------*/
/* LOAD PROJECTS INTO THE PAGE LOADER
/*----------------------------------------------------*/
$(document).ready(function() {
	/* SETTINGS */
	var slideToSpeed = 1000;
	var slideUpSpeed = 700;
	var $easingType= 'easeInOutQuart';
	var $close_button = $('#close');	
	var $load_items = $('a.loadcontent');
	var hash = window.location.hash.substr(1);
	/* OPEN PANEL FOR PAGE LOADER */
	$load_items.click(function() {
		$load_items.removeClass('active');
		$(this).addClass('active');					   
		var $this = $(this);	
		var rel = $this.attr('data-title');
		var href = $this.attr('href');
		
		loadContent(href, rel);
		return(false);
	});
});

var slideToSpeed = 1000;
var slideUpSpeed = 700;
var $easingType= 'easeInOutQuart';
var $close_button = $('#close');	
var $load_items = $('a.loadcontent');
var hash = window.location.hash.substr(1);

function loadContent(href, rel, direction) { 

	var LoadContentWrapper = href+' .pageloader_inner';
	$('#pageloader').queue(function() { 

		$(this).load(LoadContentWrapper, function(response) {
			var elements = $(response)[0];
			var totalImages = $(elements).contents().find('img').length;
			var eachPercent = 100/totalImages;
			var loadedPercent = 0;
			$('.projects-overlay #projects-loader').css('width', loadedPercent+'%').addClass('transitioned');
			
			if ($(elements).contents().find('img').length){
				$(elements).contents().find('img').each(function(){
					
					$(this).imagesLoaded(function(){
						loadedPercent += eachPercent;
					    $('.projects-overlay #projects-loader').css('width', loadedPercent+'%');
					}, true);
					
				});	
			} else {
				setTimeout(function(){
					loadedPercent = 100;
					$('.projects-overlay #projects-loader').css('width', loadedPercent+'%');
				}, 1000);
			}

			window.projectLoaded = setInterval(function(){
				if (Math.ceil(loadedPercent) >= 100){
					$('.projects-overlay #projects-loader').removeClass('transitioned');
					setTimeout(function(){
						$('.projects-overlay #projects-loader').animate({'opacity':0}, 300);
					}, 1000);
					if (direction === "down"){
						if ($('.projects-overlay').hasClass('oldie')){
							$('#pageloader #projects').animate({
								'margin-top': '-100%'
							}, 500);
						} else {
							$('#pageloader #projects').addClass('down');
						}
					}
					
					setTimeout(function(){
							window.location.hash = rel;
							$('#pagecontent').fadeIn(slideUpSpeed, $easingType, function() {
								$(".projects-overlay #pagecontent").data("plugin_tinyscrollbar").update(0);
								setTimeout(function(){
									if ($(".projects-overlay #pagecontent").find('.overview').height() < $(window).height()){
						                $(".projects-overlay #pagecontent").data("plugin_tinyscrollbar")['contentRatio'] = 1;
					                } else {
						                $(".projects-overlay #pagecontent").data("plugin_tinyscrollbar").update("relative");
					                }
								}, 1000);
				
				                $(window).resize(function(){
									$(".projects-overlay #pagecontent").find('.viewport').height($(window).height());
					                $(".projects-overlay #pagecontent").data("plugin_tinyscrollbar").update("relative");
					                if ($(".projects-overlay #pagecontent").find('.overview').height() < $(window).height()){
						                $(".projects-overlay #pagecontent").data("plugin_tinyscrollbar")['contentRatio'] = 1;
					                }
				                });
							
								$close_button.fadeIn(500);
					        	
					        	$('.flexslider').each(function(){
						        	$(this).flexslider();
					        	});

					        	/*----------------------------------------------------*/
								// Read More / Less Description Overlay Projects
								/*----------------------------------------------------*/ 
								$('.read-more-content').addClass('hide');
							
								// Set up the toggle.
								$('.read-more-toggle').on('click', function() {
									if ($(this).html() === " Read More"){
										$(this).html(" Read Less");
									} else {
										$(this).html(" Read More");
									}
									$('.read-more-content').toggleClass('hide');
									if ($(".projects-overlay #pagecontent").find('.overview').height() < $(window).height()){
						                $(".projects-overlay #pagecontent").data("plugin_tinyscrollbar")['contentRatio'] = 1;
					                } else {
						                $(".projects-overlay #pagecontent").data("plugin_tinyscrollbar").update("relative");
					                }
								});							    

							    $(".video-wrapper").fitVids();
							    if ($('.projects-overlay').hasClass('oldie')){
									$('#pageloader #projects').animate({
										'margin-top': '0%',
										opacity: 1
									}, 500);
								} else {
							    	$('#pageloader #projects').css({'transform':'translateY(0%)', 'opacity': 1});
							    }
							    
						    });
					}, 200);
					clearInterval(window.projectLoaded);
				}
				
			}, 200);
		
		// after loading is complete initialise all scripts
		});
		$(this).dequeue();
	});
}

$.fn.imagesLoaded = function(callback, fireOne) {
  var
    args = arguments,
    elems = this.filter('img'),
    elemsLen = elems.length - 1;

  elems
    .bind('load', function(e) {
        if (fireOne) {
            !elemsLen-- && callback.call(elems, e);
        } else {
            callback.call(this, e);
        }
    }).each(function() {
        // cached images don't fire load sometimes, so we reset src.
        if (this.complete || this.complete === undefined){
            this.src = this.src;
        }
    });
}