import '../styles/styles.css'
import 'lazysizes'
import Counter from './modules/Counter';
import StickHeader from './modules/StickHeader'
import MobileMenu from './modules/MobileMenu'
import LineGraph from './modules/LineGraph'
import RevealOnScroll from './modules/RevealOnScroll';

window.addEventListener('load', (event) => {
  window.addEventListener("load", event => {
    var image = document.querySelector('#bnr-img');
    var isLoaded = image.complete && image.naturalHeight !== 0;
    if(isLoaded){
      new Counter(document.querySelector("#counter"),5000,"entire")
      new Counter(document.querySelector("#sales"),5000,"")
      new Counter(document.querySelector("#profit"),5000,"")
    }
    
}); 
  new StickHeader()
   new MobileMenu()
 new LineGraph(document.querySelector('#svglinegraph'));
 new RevealOnScroll(document.querySelectorAll(".eaz-num"), 100,"counter")
 new RevealOnScroll(document.querySelectorAll("#about-section"), 40,"section")
 new RevealOnScroll(document.querySelectorAll(".about-items"), 60,"about")
 new RevealOnScroll(document.querySelectorAll(".skills"),75,"bars")
 new RevealOnScroll(document.querySelectorAll(".promise"),75,"promise")
 new RevealOnScroll(document.querySelectorAll(".feature-item"),75,"feature-item")
 const date = new Date();
 let year = date.getFullYear();
document.getElementById("year").innerHTML = year;
});


let modal

document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault()
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
        modal = new x.default()
        setTimeout(() => modal.openTheModal(), 20)
      }).catch(() => console.log("There was a problem."))
    } else {
      modal.openTheModal()
    }
  })
})

/** webpack server */
if (module.hot) {
    module.hot.accept()
  }