import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'
import Counter from './Counter';

class RevealOnScroll {
  constructor(els,thresholpercent) {
    this.itemsToReveal = els;
    this.thresholpercent = thresholpercent
    this.browserHeight = window.innerHeight
    this.hideInitially()
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
    this.events()
  }

  events() {
    //window.addEventListener("pageshow")
    window.addEventListener("scroll", this.scrollThrottle)
    window.addEventListener("resize",debounce(()=>{ 
        this.browserHeight = window.innerHeight
    },333))
  }

  calcCaller() {
    console.log("Scroll function ran")
    this.itemsToReveal.forEach(el => {
      if (el.isRevealed == false) {
       
        this.calculateIfScrolledTo(el)
      }
    })
  }

  calculateIfScrolledTo(el) {
   // console.log(" el.offsetTop "+ el.offsetTop)//432
   if(window.scrollY+this.browserHeight > el.offsetTop){
    console.log("Element was calculated")
    let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100
    if (scrollPercent < this.thresholpercent) {
      // el.classList.add("reveal-item--is-visible")
      el.isRevealed = true
      this.runCounter()
      if (el.isLastItem) {
        window.removeEventListener("scroll", this.scrollThrottle)
      }
    }
   }
  }
  runCounter(){
    if(el.isRevealed){
      new Counter(document.querySelector("#counter"),5000,"entire")
      // new Counter(document.querySelector("#sales"),5000,"")
      // new Counter(document.querySelector("#profit"),5000,"")
    }
  
  }

  hideInitially() {
    this.itemsToReveal.forEach(el => {
      // el.classList.add("reveal-item")
      el.isRevealed = false
    })
    this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true
  }
}

export default RevealOnScroll