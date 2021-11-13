$(function(){
	$(document).scroll(function(){
		var $nav = $(".fixed-top");
		var $navbar = $(".navbar");
		var $navlink = $(".nav-link");
		var $logo_brand = $(".navbar-brand");
		var $img = $(".navbar-brand img");
		if ($(this).scrollTop() > $nav.height()){
			$nav.toggleClass('scrolled', true);
			$logo_brand.toggleClass('scrolled', true);
			$navbar.toggleClass('shadow', true);
			$img.attr('src', '/static/media/images/logos/branding_logo_updated.png')
			$navlink.toggleClass('scrolled', true);
		}else{
			$nav.toggleClass('scrolled', false);
			$logo_brand.toggleClass('scrolled', false);
			$navbar.toggleClass('shadow', false);
			$img.attr('src', '/static/media/images/logos/branding_logo_updated_white.png');
			$navlink.toggleClass('scrolled', false);
		}
	});
});

$(document).ready(function(){
    console.log("working");
    if ($(window).width() <= 754)
        $("#navbarCollapseTarget").addClass("navbar-mobile");
    else
        $("#navbarCollapseTarget").removeClass("navbar-mobile");
});