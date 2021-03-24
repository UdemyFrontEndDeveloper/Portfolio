 const divFeature = [...document.querySelectorAll(".feature")];
 let mottoSection = document.querySelector(".motto_background");

window.onload = function(){
    const headerText = document.querySelector(".text");
    headerText.style.left = 0;
}

document.addEventListener("scroll", function(){
    let $windowHeight = $(window).height()/2;
    let $scrollValue = Math.floor($(document).scrollTop());
    const $mottoHeight = Math.floor($(mottoSection).offset().top);
    const $divHeight1 = Math.floor($(divFeature[0]).offset().top);
    const $divHeight2 = Math.floor($(divFeature[1]).offset().top);
    const $divHeight3 = Math.floor($(divFeature[2]).offset().top);

if($scrollValue > $divHeight1 - $windowHeight){
    divFeature[0].style.opacity = 1;
}
if($scrollValue > $divHeight2 - $windowHeight){
    divFeature[1].style.opacity = 1;
}
if($scrollValue > $divHeight3 - $windowHeight){
    divFeature[2].style.opacity = 1;
}
if($scrollValue > $divHeight3 - $windowHeight){
    divFeature[2].style.opacity = 1;
}
if($scrollValue > $mottoHeight - $windowHeight*1.3){
    document.querySelector(".motto h1").style.left = 0;
    document.querySelector("p.text").style.left = 0;
}


})
