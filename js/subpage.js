$(document).ready(function(){

    resonsiveWidth();
    startWidth();

    function resonsiveWidth() {
     var win = $(window).width();
     var timer = null;
     var sec = 300;
     $(window).on('resize', function () {
       clearTimeout(timer);
       console.log(win)
       timer = setTimeout(function () {
         win = $(window).width();
         if (win <= 1200) {
           mobileBox();
         } else {
           pcBox();
         }
         }, sec);
       });
     }
     
     function startWidth(){
        win = $(window).width();
        if (win <= 1200) {
          mobileBox();
        } else {
          pcBox();
        }
     }

     function mobileBox() {
       // 모바일에서 실행 내용
       $(".cont_box").removeClass("on")
       $(".list_box").removeClass("on")
       $(".list_box").click(function(){
        $(".cont_box").addClass("on")
        $(".list_box").addClass("on")
        });
       $(".back").click(function(){
        $(".cont_box").removeClass("on")
        $(".list_box").removeClass("on")
        });
     }
   
     function pcBox() {
       // PC에서 실행 내용
       $(".cont_box").removeClass("on")
       $(".list_box").removeClass("on")
       $(".list_box").click(function(){
            $(".cont_box").addClass("on");
            $(".list_box").removeClass("on")

       });
     }

     $(".now_line").click(function(){
         $(".h_lineup").addClass("on")
     });
     $(".line_new, .line_hot").click(function(){
        $(".h_lineup").removeClass("on")
    });
});