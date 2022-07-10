let whiteDivButton = document.getElementById('spitak_div_button')
let bottomWhiteDiv = document.getElementById('taki_spitak_div')

function clock() {
    let date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(clock, 1000);
clock();

whiteDivButton.addEventListener('click', () => {
    bottomWhiteDiv.style.display = 'none'
})


let left = document.getElementById(`left-arrow`);
let right = document.getElementById(`right-arrow`);
let img1 = document.getElementById(`first-img`);
let img2 = document.getElementById(`second-img`);
let img3 = document.getElementById(`third-img`);

left.innerText = `🠔`;
right.innerText = `➔`;

let one = `https://cdn.shopify.com/s/files/1/0072/2327/9669/products/pestel-templates-01_450x.png?v=1625682454`;
let two = `https://cdn.shopify.com/s/files/1/0072/2327/9669/products/blue-ocean-methodology-slide-templates-for-powerpoint-keynote-google-slides-01_450x.png?v=1623781301`
let three = `https://cdn.shopify.com/s/files/1/0072/2327/9669/products/six-sigma-slide-templates-for-powerpoint-keynote-google-slides-01_450x.png?v=1623770615`
let four = `https://cdn.shopify.com/s/files/1/0072/2327/9669/products/responsability-assignment-matrix-slide-templates-for-powerpoint-keynote-google-slides-01_450x.png?v=1623770160`
let six = `https://cdn.shopify.com/s/files/1/0072/2327/9669/products/Brain-Infographics-for-powerpoint-illustrator-keynote-google-slides-preview-1_450x.png?v=1624636162`
let seven = `https://cdn.shopify.com/s/files/1/0072/2327/9669/products/Porter_sFiveForcesS1Preview01_450x.png?v=1623090886`
let eight = `https://cdn.shopify.com/s/files/1/0072/2327/9669/products/ThankYouSlidesS1Preview01_450x.png?v=1623090546`
let nine = `https://cdn.shopify.com/s/files/1/0072/2327/9669/products/AIDA-Model-Infographics-Preview-01_450x.png?v=1623090209`
let ten = `https://cdn.shopify.com/s/files/1/0072/2327/9669/products/Alphabet-Infographics-S1-Preview-01_450x.jpg?v=1623089685`
let eleven = `https://cdn.shopify.com/s/files/1/0072/2327/9669/products/smile-rating-infographics-powerpoint-keynote-google-slides-illustrator-s1-preview-01_450x.jpg?v=1623089242`
let twelve = `https://cdn.shopify.com/s/files/1/0072/2327/9669/products/306090DayPlanS1Preview01_450x.jpg?v=1624380997`
let i = 2;

let imgs = [one, two, three, four, six, seven, eight, nine, ten, eleven, twelve];
right.addEventListener(`click`, () => {
    i = i + 1;
    if (i == 9) {
        i = i - 8;
    } else {
        img1.src = imgs[i - 2];
        img2.src = imgs[i - 1];
        img3.src = imgs[i]
    }

})

let a = 11;
left.addEventListener(`click`, () => {
    a = a - 1;
    if (a == 1) {
        a = a + 7;
    } else {
        img1.src = imgs[a];
        img2.src = imgs[a - 1];
        img3.src = imgs[a - 2]
    }
})



let img_strelochka1 = document.getElementById(`img_strelochka1`);
let img_strelochka3 = document.getElementById(`img_strelochka3`);
let img_strelochka5 = document.getElementById(`img_strelochka5`);
let img_strelochka7 = document.getElementById(`img_strelochka7`);
let img_strelochka9 = document.getElementById(`img_strelochka9`);
let imgs1 = document.getElementById(`end_div_1`)
let imgs2 = document.getElementById(`end_div_2`)
let imgs3 = document.getElementById(`end_div_3`)
let imgs4 = document.getElementById(`end_div_4`)
let imgs5 = document.getElementById(`end_div_5`)
let imgs6 = document.getElementById(`end_div_6`)
let imgs7 = document.getElementById(`end_div_7`)
let imgs8 = document.getElementById(`end_div_8`)


imgs2.style.display = `none`;
 imgs4.style.display = `none`;
  imgs6.style.display = `none`;
   imgs8.style.display = `none`;


imgs1.addEventListener(`click`, () => {
    if(imgs2.style.display == `none`){
        imgs2.style.display = `inline-block`;
        img_strelochka1.style.transform = `rotate(180deg)`
        img_strelochka1.style.transition = `0.3s`
    } else{    
        img_strelochka1.style.transform = `rotate(0deg)`
        imgs2.style.display = `none`;
        img_strelochka1.style.transition = `0.3s`
    }
    
  
})

imgs3.addEventListener(`click`, () => {
    if(imgs4.style.display == `none`){
        imgs4.style.display = `block`;
        img_strelochka3.style.transform = `rotate(180deg)`
        img_strelochka1.style.transition = `0.3s`
    } else{
        imgs4.style.display = `none`;
        img_strelochka3.style.transform = `rotate(0deg)`
        img_strelochka3.style.transition = `0.3s`
    }
    
  
})




imgs5.addEventListener(`click`, () => {
    if(imgs6.style.display == `none`){
        imgs6.style.display = `block`;
        img_strelochka5.style.transform = `rotate(180deg)`
        img_strelochka5.style.transition = `0.3s`
    } else{
        imgs6.style.display = `none`;
        img_strelochka5.style.transform = `rotate(0deg)`
        img_strelochka5.style.transition = `0.3s`
    }
    
  
})


imgs7.addEventListener(`click`, () => {
    if(imgs8.style.display == `none`){
        imgs8.style.display = `block`;
        img_strelochka7.style.transform = `rotate(180deg)`
        img_strelochka7.style.transition = `0.3s`
    } else{
        imgs8.style.display = `none`;
        img_strelochka7.style.transform = `rotate(0deg)`
        img_strelochka7.style.transition = `0.3s`
    }
    
  
})