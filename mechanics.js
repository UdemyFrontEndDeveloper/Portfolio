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
// $(document).on("scroll", function(){
//   const scrollValue = $(this).scrollTop();
//   // console.log(scrollValue);

// SEKCJA PIERWSZA

//   const $art2 = $(".art2");
//   const art2FromTop = $art2.offset().top;
// const art2Height = $art2.outerHeight();

//   const $art3 = $(".art3");
//   const art3FromTop = $art3.offset().top;
// const art3Height = $art3.outerHeight();

// const $art4 = $(".art4");
//   const art4FromTop = $art4.offset().top;
// const art4Height = $art4.outerHeight();

// SEKCJA DRUGA

// const $op1 = $(".op1");
// const $op2 = $(".op2");

// const op1FromTop = $op1.offset().top;
// const op2FromTop = $op2.offset().top;

// const op1Height = $op1.height()/4;
// const op2Height = $op2.height()/4;

// if(scrollValue > op1FromTop + op1Height - windowHeigth){
//   $op1.addClass("active");
// }

// if(scrollValue > op2FromTop + op2Height - windowHeigth){
//   $op2.addClass("active");
// }


// if( scrollValue > art2FromTop +  art2Height - windowHeigth){
//   $art2.addClass("active");
// }
// if( scrollValue > art3FromTop +  art3Height - windowHeigth){
//   $art3.addClass("active");
// }
// if( scrollValue > art4FromTop +  art4Height - windowHeigth){
//   $art4.addClass("active");
// }

// if( scrollValue < 100){
//   $("article").removeClass("active");
// }
// })const windowHeigth = $(window).height();
  