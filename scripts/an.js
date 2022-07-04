'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );



jQuery(document).on("ready",function () {
	
});

 new WOW().init();
$('.ui.checkbox').checkbox();


 var App = {
     set_min_height_section: function () {
     	if($(window).width()>992){
     		var window_width=$(window).width()*0.3;
     		$(".page-nomal").css("min-height",window_width);
     		$(".blk-content").css("min-height",window_width);
     		$(".blk-img").css("min-height",window_width);
     	}
     	if($(window).width()<992){
     		var window_width=$(window).width()*1.3;
     		$(".page-nomal").css("min-height",window_width);
     		$(".blk-content").css("min-height",window_width);
     		$(".blk-img").css("min-height",window_width);
     	}
     	if($(window).width()<480){
     		var window_width=$(window).width()*1.6;
     		$(".page-nomal").css("min-height",window_width);
     		$(".blk-content").css("min-height",window_width);
     		$(".blk-img").css("min-height",window_width);
     	}
       
     },
     cta_link:function(){
     	$(".cta-link").click(function(){
     		var data_src=$(this).attr("data-src");
     		$("section").removeClass("active-section");
     		$(data_src).addClass("active-section");
     	})
     },
    progress_bar:function(){
    	$(".active-progress-bar").click(function(){
    		if($(this).hasClass("active")){
    		}else{
    			$('.skillbar').each(function(){
    				jQuery(this).find('.skillbar-bar').animate({
    					width:jQuery(this).attr('data-percent')
    				},1200);
    			});
    			$('.count').each(function () {
    			    $(this).prop('Counter',0).animate({
    			        Counter: $(this).text()
    			    }, {
    			        duration: 1200,
    			        easing: 'swing',
    			        step: function (now) {
    			            $(this).text(Math.ceil(now));
    			        }
    			    });
    			});
    		}
    		$(this).addClass("active");
    	})
    }

    
 };
 jQuery(document).ready(function () {
     App. set_min_height_section();
     App. cta_link(); 
     App. progress_bar(); 
     	jQuery(window).resize(function () {
       		App. set_min_height_section();   
     	});
     window.addEventListener("resize", function(event) {
         // App.absolute_form_1_tablet();
         App. set_min_height_section();

         
     })
 });
 window.onresize = function() {
 }
 $(window).on("load",function(){
    
 });

 jQuery(document).ready(function(){
 	
 });