console.log("Script Loaded");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ($(window).scrollTop() > 10) {
    document.getElementsByClassName("nav ul").style.top = "45px";
    window.alert(5 + 6);
  } else {
  	document.getElementsByClassName("nav ul").style.top = "60px";
  	window.alert(5 + 6);
   }
} 