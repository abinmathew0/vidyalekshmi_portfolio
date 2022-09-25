<!-- ------navAnimation- --->
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.querySelector(".navbar").style.padding = "0.5% 0px 0px 0px";
   }else {
    document.querySelector(".navbar").style.padding = "2% 0px 0px 0px";
   }
   }
