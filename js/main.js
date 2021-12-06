$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    $("header .search").click(function(){
        $(".search_box").addClass("on")
        $("header nav").removeClass("on")
        $("header .close_menu").removeClass("on")
        $("header .open_menu").removeClass("hide")
    });
    $(".on_icon").click(function(){
        // console.log('5')
        $(".search_box").removeClass("on")
    });
    $("header .open_menu").click(function(){
        $("header nav").addClass("on")
        $("header .close_menu").addClass("on")
        $("header .open_menu").addClass("hide")
    });
    $("header .close_menu").click(function(){
        $("header nav").removeClass("on")
        $("header .close_menu").removeClass("on")
        $("header .open_menu").removeClass("hide")
    });
});