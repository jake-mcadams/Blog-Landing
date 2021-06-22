let productClicked  = false; 
let companyClicked = false;
let connectClicked  = false; 
let sub_productClicked = false;
const productnav = document.getElementById('product-link');
const companynav = document.getElementById('company-link');
const connectnav = document.getElementById('connect-link');
const hamburger = document.getElementById('bars');
const subProduct = document.getElementById('footer-product-button');
const subCompany = document.getElementById('footer-company-button');
const subConnect = document.getElementById('footer-connect-button');
const mobileSubProduct = document.getElementById('mobile-product-sub');
const mobileSubCompany = document.getElementById('mobile-company-sub');
const mobileSubConnect = document.getElementById('mobile-connect-sub');
let hamClicked = false;
const Bars = document.getElementById('bars');
const mainMobile = document.getElementById('main-mobile-container');
let mobileNavClicked = false;
const header = document.getElementsByTagName('header')
const buttonBars = document.getElementById('bars')
const prodMobileCarrot = document.getElementById('footer-product-button');
const compMobileCarrot = document.getElementById('footer-company-button');
const connMobileCarrot = document.getElementById('footer-connect-button');
const allKids = document.getElementById('main-mobile-container').childNodes;
const prodCarrot = document.getElementById('prod-carrot')
const compCarrot = document.getElementById('comp-carrot')
const connCarrot = document.getElementById('conn-carrot')









productnav.addEventListener('click', function(){
  if(productClicked == false){
    // console.log(productClicked)
    productClicked = true;
    // console.log('click')
    // console.log(productClicked)
    const dropProd = document.getElementById('product-sub');
    dropProd.classList.toggle('classAdd');
  }else{
    return;
  }
})

hamburger.addEventListener('click', ()=>{

})

subProduct.addEventListener('click', function(){
  mobileSubProduct.classList.toggle('mobile-sub-nav');
  mobileSubProduct.classList.toggle('default-mobile-sub');
  // console.log(document.getElementById('mobile-product-sub').classList)
})

subCompany.addEventListener('click', function(){
  mobileSubCompany.classList.toggle('mobile-sub-nav');
  mobileSubCompany.classList.toggle('default-mobile-sub');
  // console.log(document.getElementById('mobile-company-sub').classList)
})

subConnect.addEventListener('click', function(){
  mobileSubConnect.classList.toggle('mobile-sub-nav');
  mobileSubConnect.classList.toggle('default-mobile-sub');
  console.log(document.getElementById('mobile-company-sub').classList)
})

// function newbard(){
//   Bars.addEventListener('click', function(){
//     if(mobileNavClicked == false){
//       mobileNavClicked = true;
//       mainMobile.classList.toggle('default-mobile-sub');
//       mainMobile.classList.toggle('mobile-nav-container');
//       // console.log(document.getElementById('mobile-company-sub').classList)
//       // console.log(mobileNavClicked);
//     }else{
//       // mobileNavClicked = false;
//       mainMobile.classList.toggle('default-mobile-sub');
//       mainMobile.classList.toggle('mobile-nav-container');
//     }
//   })
// }

function newbard() {
  if(mobileNavClicked == false){
    mobileNavClicked = true;
    mainMobile.classList.toggle('default-mobile-sub');
    mainMobile.classList.toggle('mobile-nav-container');
    // console.log(document.getElementById('mobile-company-sub').classList)
    // console.log(mobileNavClicked);
  }else{
    mobileNavClicked = false;
    mainMobile.classList.toggle('default-mobile-sub');
    mainMobile.classList.toggle('mobile-nav-container');
  }
}

function cancel() {
  mobileNavClicked = false;
  mainMobile.classList.toggle('default-mobile-sub');
  mainMobile.classList.toggle('mobile-nav-container');
}

// subProduct.addEventListener('click', function(){
//   mobileSubProduct.classList.toggle('mobile-sub-nav');
//   mobileSubProduct.classList.toggle('default-mobile-sub');
//   console.log(document.getElementById('mobile-product-sub').classList)
// })

// window.onclick = function(event) {
//   if (event.target == buttonBars) {
//     newbard()
//     console.log(allKids);
//   }else{
//     console.log('no event')
//     mobileNavClicked = false;
//     mainMobile.classList.toggle('default-mobile-sub');
//     mainMobile.classList.toggle('mobile-nav-container');
//   }
// }


prodMobileCarrot.addEventListener('click', (event)=>{
  if(event.target.childNodes[1].className == 'fa fa-caret-down'){
    prodCarrot.classList.toggle('fa-caret-down');
    prodCarrot.classList.toggle('fa-caret-up');
  }else{
    prodCarrot.classList.toggle('fa-caret-up');
    prodCarrot.classList.toggle('fa-caret-down');
  }
})

compMobileCarrot.addEventListener('click', (event)=>{
  if(event.target.childNodes[1].className == 'fa fa-caret-down'){
    compCarrot.classList.toggle('fa-caret-down');
    compCarrot.classList.toggle('fa-caret-up');
  }else{
    compCarrot.classList.toggle('fa-caret-up');
    compCarrot.classList.toggle('fa-caret-down');
  }
})

connMobileCarrot.addEventListener('click', (event)=>{
  if(event.target.childNodes[1].className == 'fa fa-caret-down'){
    connCarrot.classList.toggle('fa-caret-down');
    connCarrot.classList.toggle('fa-caret-up');
  }else{
    connCarrot.classList.toggle('fa-caret-up');
    connCarrot.classList.toggle('fa-caret-down');
  }
})
 