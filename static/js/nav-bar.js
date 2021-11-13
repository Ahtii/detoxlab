$(document).ready(function(){
    console.log("working");
    if ($(window).width() <= 754)
        $("#navbarCollapseTarget").addClass("navbar-mobile");
    else
        $("#navbarCollapseTarget").removeClass("navbar-mobile");
});