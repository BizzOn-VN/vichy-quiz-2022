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
$('.ui.dropdown')
  .dropdown()
;
 new WOW().init();
$('.ui.checkbox').checkbox();
$('[data-fancybox]').fancybox();
$(".content-the-le").mCustomScrollbar({
	theme:"dark",
});
//gọi popup dăng ký thành công 

// $("#success").fancybox().trigger('click');
function showMessage(set_text_alert) {
    $(".text-alert").text(set_text_alert);
    $("#popup-alert").fancybox().trigger('click');
}
// showMessage("Chào mừng bạn đến với Vichy");


 var App = {
     set_min_height_section: function () {
     	if($(window).width()>992){
     		var window_width=$(window).width()*0.49;
     		$(".page-nomal").css("min-height",window_width);
     		$(".blk-content").css("min-height",window_width);
     		$(".blk-img").css("min-height",window_width);
     		$("#page-register").css("min-height",$(window).width()*0.49);
     	}
     	if($(window).width()<992){
     		var window_width=$(window).width()*1.3;
     		$(".page-nomal").css("min-height",window_width);
     		$(".blk-content").css("min-height",window_width);
     		$(".blk-img").css("min-height",window_width);
            
            // $("#page-mun-noi-tiet .blk-content").css("min-height", window_width*1.4);
            // $("#page-da-stress .blk-content").css("min-height", window_width*1.4);
            // $("#page-tham-nam .blk-content").css("min-height", window_width*1.4);
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
     cta_slide_question:function(){
     	$(".data-slide-question").click(function(){
     		var data_slide_question=$(this).attr("data-slide-question");
     		$(this).parents(".blk-quizz").find(".pakage-faq").removeClass("active-pakage-faq");
     		$(data_slide_question).addClass("active-pakage-faq");


     		$('.skillbar').each(function(){
     			jQuery(this).find('.skillbar-bar').animate({
     				width:jQuery(this).attr('data-percent')
     			},900);
     		});
     		$('.count').each(function () {
     		    $(this).prop('Counter',0).animate({
     		        Counter: $(this).text()
     		    }, {
     		        duration: 900,
     		        easing: 'swing',
     		        step: function (now) {
     		            $(this).text(Math.ceil(now));
     		        }

     		    });
     		});
     	})
     },
     data_question:function(){
     	$(".data-question").click(function(){
     		var data_question=$(this).attr("data-question");
     		$(this).parents("section").find(".ico-next").attr("data-src",data_question);
     		$(".prev-result").attr("data-src",data_question);
     		$(".cta-back-result").attr("data-src",data_question);


     		var data_result=$(this).attr("data-result");
     		$(this).closest(".page-main").find(".result-item").removeClass("active-result-item");
     		$(data_result).addClass("active-result-item");

     		var title_form_fill=$(this).attr("title-form-fill");
     		$(".title-form-fill").text(title_form_fill);

            var title_form_fill_price=$(this).attr("title-form-fill-price");
            $(".title-form-fill-price").text(title_form_fill_price);
     	})
     },
    progress_bar:function(){
    	$(".active-progress-bar").click(function(){
    		// if($(this).hasClass("active")){
    		// }else{
    			$('.skillbar').each(function(){
    				jQuery(this).find('.skillbar-bar').animate({
    					width:jQuery(this).attr('data-percent')
    				},900);
    			});
    			$('.count').each(function () {
    			    $(this).prop('Counter',0).animate({
    			        Counter: $(this).text()
    			    }, {
    			        duration: 900,
    			        easing: 'swing',
    			        step: function (now) {
    			            $(this).text(Math.ceil(now));
    			        }
    			    });
    			});
    		// }
    		// $(this).addClass("active");
    	})
    }

    
 };
 jQuery(document).ready(function () {
     App. set_min_height_section();
     App. cta_link(); 
     App. progress_bar(); 
     App. data_question();
     App. cta_slide_question(); 
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