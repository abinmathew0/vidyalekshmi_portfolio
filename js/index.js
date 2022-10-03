
/* -------- navanimation ---------- */
window.addEventListener("scroll", function() {
if (window.scrollY > 180) {
    $('.navbar').css({
    "box-shadow": "0px 6px 9px -11px",
    paddingTop: "0.5%",
    opacity:"0.9"});
}
else {
    $('.navbar').css({
    "box-shadow": "none",
    paddingTop: "2%"});
}
},false); 
/* -------- navanimation-end ---------- */


