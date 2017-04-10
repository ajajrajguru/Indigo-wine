(function() {

jQuery(function(){

jQuery(window).scroll(function(){
  var sticky = jQuery('.ind-custom-menu'),
      scroll = jQuery(window).scrollTop();
      imgSrc = 'img/logo-half.png';

  if (scroll >= 100){
  	sticky.addClass('fixed');
  	// jQuery('.ind-custom-menu #logo img').attr('src',imgSrc);
  } 
  else{
	sticky.removeClass('fixed');
  }
  
});

var owl = jQuery('.owl-carousel').data('owlCarousel');
	owl.destroy();


function slideCarousel(){
	var owl = jQuery('.owl-carousel').data('owlCarousel');
	
	jQuery('.owl-carousel').owlCarousel({
     	//Basic Speeds
	    slideSpeed : 200,
	    paginationSpeed : 800,
	 
	    //Autoplay
	    autoPlay : false,
	    goToFirst : true,
	    goToFirstSpeed : 1000,
	    items : 1,
	    autoHeight: true,
	    itemsDesktop : [1199,1],
    	itemsDesktopSmall : [980,1],
	    itemsTablet: [768,1],
    	itemsMobile : [479,1],
    	addClassActive : true,
    	// rewindNav: false,
	 
	    // Navigation
	    navigation : true,
	    navigationText : ["",""],
	    pagination : true,
	    // paginationNumbers: true,
	    // afterAction: moved	
	    // afterInit: checkfirstlast
	});
}

setTimeout(slideCarousel, 1000);


});



}).call(this);