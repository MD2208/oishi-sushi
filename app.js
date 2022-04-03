$(".toggle").click(function(){
  $(".toggle").toggleClass("i-active");
  $(".showcase").toggleClass("i-active");
});
//menu page scrolling
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 5) {
      $(".navbar").addClass("scrolling");
    } else {
      $(".navbar").removeClass("scrolling");
    }
  });
});
//menu sections
var menuParts=["starters","soups","main-course","sushis"];
for(let i=0;i<menuParts.length;i++){
$("."+menuParts[i]).click(function(){
  $("."+menuParts[i] +" .secret-parts").toggleClass("secret");
  $("."+menuParts[i]+" .secret-parts").toggleClass("part-clicked");
});
}
