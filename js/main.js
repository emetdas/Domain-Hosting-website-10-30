$(document).ready(function () {
     //===== close navbar-collapse when a  clicked
     $(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });
    $(".one-page .navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });   
    //===== close navbar-collapse when a  clicked 
});