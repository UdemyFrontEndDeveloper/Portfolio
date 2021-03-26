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
const $hobbyWrapper = $(".wrapper");
// const $img1 = $(".projects img:nth-of-type(1)");
// const $img2 = $("#2");


const feature1Height = $feature1.innerHeight();
const feature2Height = $feature2.innerHeight();
const feature3Height = $feature3.innerHeight();
const mottoHeight = $motto.innerHeight();
const hobbyWrapperHeight = $hobbyWrapper.innerHeight();
// const img1Height = $img1.innerHeight();
// const img2Height = $img2.innerHeight();

const feature1Poz = $feature1.offset().top;
const feature2Poz = $feature2.offset().top;
const feature3Poz = $feature3.offset().top;
const mottoPoz = $motto.offset().top;
const hobbyWrapperPoz = $hobbyWrapper.offset().top;
// const img1Poz = $img1.offset().top;
// const img2Poz = $img2.offset().top;

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
if(scrollPoz > hobbyWrapperPoz + hobbyWrapperHeight - windowHeight*1.5){
    $hobbyWrapper.addClass("activeWrapper");
}
// if(scrollPoz > img1Poz + img1Height - windowHeight){
//     $img1.style.transform= `translateX(0)`;
// }
// if(scrollPoz > img2Poz + img2Height - windowHeight){
//     $img2.style.transform= `translateX(0)`;
// }

if(scrollPoz < 200){
    $feature1.removeClass("activeFeature");
    $feature2.removeClass("activeFeature");
    $feature3.removeClass("activeFeature");
    $mottoH1.removeClass("activeH1");
    $mottoP.removeClass("activeP");
    $hobbyWrapper.removeClass("activeWrapper");
    // ($img1,$img2).removeClass("activeImg");
}
})
