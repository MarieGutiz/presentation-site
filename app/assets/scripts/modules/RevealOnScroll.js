import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'
import Counter from './Counter';
import Typed from "typed.js"

class RevealOnScroll {
  constructor(els,thresholpercent, type=common) {
    this.itemsToReveal = els;
    this.thresholpercent = thresholpercent
    this.type=type
    this.browserHeight = window.innerHeight
    this.hideInitially()
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
    this.events()
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle)
    window.addEventListener("resize",debounce(()=>{ 
        this.browserHeight = window.innerHeight
    },333))
  }

  calcCaller() {
    this.itemsToReveal.forEach(el => {
      if (el.isRevealed == false) {
       
        this.calculateIfScrolledTo(el)
      }
    })
  }

  calculateIfScrolledTo(el) {
   // console.log(" el.offsetTop "+ el.offsetTop)//432
   if(window.scrollY+this.browserHeight > el.offsetTop){
    let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100
    if (scrollPercent < this.thresholpercent) {
      // el.classList.add("reveal-item--is-visible")
      el.isRevealed = true

       if(this.type == "counter")
        this.runCounter(el)
        if(this.type == "bars")
        this.barFilling(el)
        if(this.type =="about")
        this.lightAbout(el)
        if(this.type == "section")
        this.terminal(el)
        //el.classList.add("reveal-item--is-visible")

      if (el.isLastItem) {
        window.removeEventListener("scroll", this.scrollThrottle)
      }
    }
   }
  }
  terminal(el){
    new Typed('#typed', {
      strings: [
        'npm install^1000\n`installing components...` ^1000\n`Fetching from source...`'
      ],
      typeSpeed: 40,
      backSpeed: 0,
      loop: false
    });
  }
  lightAbout(el){
   // about-items
   if(el.isRevealed){
    el.classList.add("about-items--is-visible")
  
   }
   
  }
  runCounter(el){
    if(el.isRevealed){
      new Counter(document.querySelector("#counter"),5000,"entire")
      new Counter(document.querySelector("#sales"),5000,"")
      new Counter(document.querySelector("#profit"),5000,"")
    }
  
  }
  async barFilling(el){
   
    if(el.isRevealed){
     let colors=["green","orange","red","mob"]
     let values=[75,65,55,65]
     let i=0;
   
      for (const key of colors) {
        new Counter(document.querySelector(".progress--"+key+"-bar"),1000,"bars",values[i])      
       await this.sleep(400)
      i++
      }
    }
  }
  sleep(delay){//Threading
    return new Promise((resolve) => setTimeout(resolve, delay))
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