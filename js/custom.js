// JavaScript Document

var currSize;
$( document ).ready(function() {
	
	$("span.toggle-list").click(function(evt) {
		if($(evt.target).parents('ul:first').hasClass("expanded")) {
			$(evt.target).parents('ul:first').find("> li:not(:first-child)").hide();
			$(evt.target).parents('ul:first').removeClass("expanded");
			$(evt.target).text($(evt.target).data("show-text"));
			//$(evt.target).parents('li:first').css("border-bottom-color", "#fff");
			$(window).resize();
		}
		else {
			$(evt.target).parents('ul:first').find("> li:not(:first-child)").show();
			$(evt.target).parents('ul:first').addClass("expanded");
			$(evt.target).text($(evt.target).data("hide-text"));
			//$(evt.target).parents('li:first').css("border-bottom-color", "#f0f4f7");
			$(window).resize();
		}
		$('body').scrollspy('refresh');

	});
	
	$(".mobile .btn").click(function () {
		$("i").toggle();
	});
	

//Windows Resize	
	$(window).bind('resize',function(){

		if($(window).width() > 768 && currSize == 'small') {
			currSize = 'large';
			window.location.href = window.location.href.split("#")[0];
		}
		else if($(window).width() <= 768 && currSize == 'large') {
			currSize = 'small';	
			window.location.href = window.location.href.split("#")[0];
		}					
		
		$('.column1').css('height','auto');
		$('.column2').css('height','auto');
		
		$('.section').each(function( index ) {	
		
		 var first = $(this).find('.column1').height();
		 var second = $(this).find('.column2').height();	 
		
		 if(first < second) {
			
			 $(this).find('.column1').height(second);
			 
		 }
		 else {		 
 			 
			 $(this).find('.column2').height(first);			
						 
		 }
		 
		});
		
		
		//reset on window resize
		$('.sidebar').height($('.content').height());
		$('.sidebar ul , .sidebar .logo').width($('.sidebar').width());
	});


//Remove background of last child under the sections

	$('.section:last-child .span6').css('border','none');
	
	//sticky
		var s = $(".sidebar .nav, .sidebar a.logo ");
		var pos = s.position();                    
		$(window).scroll(function() {
			var windowpos = $(window).scrollTop();
			if (windowpos >= pos.top) {
				s.addClass("stick");
			} else {
				s.removeClass("stick");
			}
		});
		
		
		
//Scroll

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
		
		var target = this.hash;
	    $target = $(target);
		
		if($(e.target).hasClass("accordion-toggle")) {			
			target = $(e.target).parent().next().children().first().children().first().attr('href');
			 $target = $(target); 	 
		}	

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	
		
	});

});

$(window).load(function(){  
//Auto height for Sidebar		
	$('.sidebar').height($('.content').height() + 5);
//Auto width for Sidebar LI	
	$('.sidebar ul , .sidebar .logo').width($('.sidebar').width());

//Auto height for Sections		
	$('.section').each(function( index ) {	 
		
		 var first = $(this).find('.span6').height();
		 var second = $(this).find('.column2').height();	 
		
		 if(first < second) {
			 $(this).find('.span6').height(second);
		 }
		 else {
			 $(this).find('.column2').height(first);
		 }
		 
	});
});