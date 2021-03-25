window.onload = function(){
    const text = document.querySelector(".headerIn .text");
    text.classList.add("activeHeader");
}

document.addEventListener("scroll", ()=>{

let scrollPoz = $(document).scrollTop();
const windowHeight = $(window).height();

const $feature1=$(".feature1");
const $feature2=$(".feature2");
const $feature3=$(".feature3");
const $motto = $(".motto");
const $mottoH1 = $(".motto h1");
const $mottoP = $(".motto p.text");

const feature1Height = $feature1.innerHeight();
const feature2Height = $feature2.innerHeight();
const feature3Height = $feature3.innerHeight();
const mottoHeight = $motto.innerHeight();

const feature1Poz = $feature1.offset().top;
const feature2Poz = $feature2.offset().top;
const feature3Poz = $feature3.offset().top;
const mottoPoz = $motto.offset().top;

if(scrollPoz > feature1Poz + feature1Height - windowHeight*1.3){
    $feature1.addClass("activeFeature");
}
if(scrollPoz > feature2Poz + feature2Height - windowHeight*1.3){
    $feature2.addClass("activeFeature");
}
if(scrollPoz > feature3Poz + feature3Height - windowHeight*1.3){
    $feature3.addClass("activeFeature");
}
if(scrollPoz > mottoPoz + mottoHeight - windowHeight*1.3){
    $mottoH1.addClass("activeH1");
    $mottoP.addClass("activeP");
}

if(scrollPoz < 200){
    $feature1.removeClass("activeFeature");
    $feature2.removeClass("activeFeature");
    $feature3.removeClass("activeFeature");
    $mottoH1.removeClass("activeH1");
    $mottoP.removeClass("activeP");
}
})
