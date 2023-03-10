// JavaScript Document
$(function(){
  /*퀵 메뉴*/
  var defaultTop=parseInt($("#quick_menu").css("top"));
  $(window).on("scroll",function(){
     var scv=$(window).scrollTop();

     $("#quick_menu").stop().animate({top:scv+defaultTop+"px"},1000);
  });
});