import '../styles/styles.css'
import 'lazysizes'
import Counter from './modules/Counter';
import StickHeader from './modules/StickHeader'
import MobileMenu from './modules/MobileMenu'
import LineGraph from './modules/LineGraph'
import RevealOnScroll from './modules/RevealOnScroll';

window.addEventListener('load', (event) => {
  new Counter(document.querySelector("#counter"),5000,"entire")
  new Counter(document.querySelector("#sales"),5000,"")
  new Counter(document.querySelector("#profit"),5000,"")
  new StickHeader()
   new MobileMenu()
 new LineGraph(document.querySelector('#svglinegraph'));
 new RevealOnScroll(document.querySelectorAll(".eaz-num"), 10)
});





/** webpack server */
if (module.hot) {
    module.hot.accept()
  }