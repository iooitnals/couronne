$(function(){

 /// main visual
  $(".slideList").children("div:gt(0)").hide();  //첫번째 자식빼고 숨기기

  var current=0;
  setInterval(function(){
   var next=(current+1)%4; //계속 반복으로 해주기 
   $(".slideList").find("div").eq(current).fadeOut(); //첫번째 이미지 없어지고 
   $(".slideList").find("div").eq(next).fadeIn(); //두번째이미지 나타내기 
   current=next;  //current++
  }, 3000);

});

$(function(){
//content 1  book slide
var mySlider=$("#best_bg ul").bxSlider({
  mode:"horizontal",   //수평(horizontal) 방향으로 이동합니다.
      speed:300,   //이동 속도(500 : 0.5초)
      pager:false,   //페이징 표시를 제어(false:숨김, true:노출)합니다.
      moveSlides:1,   //이동 슬라이드 수입니다. 
      slideWidth:230,   //슬라이드 폭입니다. 
      minSlides:4,   //최소 노출 슬라이드 수입니다. 
      maxSlides:4,   //최대 노출 슬라이드 수입니다.
      slideMargin:30,   //슬라이드 간의 간격입니다.
      auto:true,   //자동 슬라이드 여부(true : 자동, false:수동)를 설정합니다.
      autoHover:true,   //마우스 오버 시 자동 정지시킵니다.
      controls:false   //이전 , 다음 버튼을 숨깁니다(true: 노출, false:숨김)
});
$(".prev_btn").on("click",function(){   //[이전]버튼을 눌렀을 때 이벤트 핸들러의 실행문을 실행
mySlider.goToPrevSlide();   //슬라이드를 한 단계 이전으로 이동합니다.
return false;   //<a> 태그의 링크를 차단합니다.
});
$(".next_btn").on("click",function(){   //[다음]버튼을 눌렀을 때 이벤트 핸들러의 실행문을 실행
mySlider.goToNextSlide();   //슬라이드를 한 단계 다음으로 이동합니다.
return false;   //<a>태그의 링크를 차단합니다. 
});
});



// content4 visual slide 
jQuery(document).ready(function ($) {

    var jssor_1_options = {
      $AutoPlay: true,
      $SlideDuration: 800,
      $SlideEasing: $Jease$.$OutQuint,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*responsive code begin*/
    /*you can remove responsive code if you don't want the slider scales while window resizing*/
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 1920);
            jssor_1_slider.$ScaleWidth(refSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*responsive code end*/
});




//content4 slide 
jQuery(document).ready(function ($) {

    var jssor_1_options = {
      $AutoPlay: true,
      $SlideDuration: 800,
      $SlideEasing: $Jease$.$OutQuint,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_2", jssor_1_options);

    /*responsive code begin*/
    /*you can remove responsive code if you don't want the slider scales while window resizing*/
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 1920);
            jssor_1_slider.$ScaleWidth(refSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*responsive code end*/
});


//<![CDATA[
  $(function(){
    $(".gnb>li").on("mouseover focus",function(){
     $(this).find(".sub").slideDown();
    });
    $(".gnb>li").on("mouseleave blur",function(){
     $(this).find(".sub").slideUp();
    });


   //login_btn
$(".login_btn").on("click",function(){
  $(".login_box").slideToggle("fast");
 });



}); //function end
//]]>
