import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'


class StickHeader{
    
    constructor(){
        this.boxHeader = document.querySelector(".box-header")
        this.pageSections = document.querySelectorAll(".page-section")
        this.browserHeight = window.innerHeight
        this.previousScrollY = window.scrollY
        this.events()
      }
    
      events() {
        window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
        window.addEventListener("resize", debounce(() => {
          this.browserHeight = window.innerHeight
        }, 333))
      }

      runOnScroll() {
        this.determineScrollDirection()
    
        if (window.scrollY > 60) {
          this.boxHeader.classList.add("box-header--dark")
        } else {
          this.boxHeader.classList.remove("box-header--dark")
          this.pageSections.forEach(el => this.reset(el))
        }
    
       this.pageSections.forEach(el => this.calcSection(el))
      }
    
      determineScrollDirection() {
        if (window.scrollY > this.previousScrollY) {
          this.scrollDirection = 'down'
        } else {
          this.scrollDirection = 'up'
        }
        this.previousScrollY = window.scrollY
      }

      calcSection(el) {
        if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
          let scrollPercent = el.getBoundingClientRect().top / this.browserHeight * 100
        ///  console.log("scrollPercent  "+scrollPercent)
          if (scrollPercent < 28 && scrollPercent > -0.3 && this.scrollDirection == 'down' || scrollPercent < 28 && this.scrollDirection == 'up') {
            let matchingLink = el.getAttribute("data-matching-link")
            //console.log("el "+el)
            document.querySelectorAll(`.box-header-list-items a:not(${matchingLink})`).forEach(el=>el.classList.remove("is-current-link"))
            document.querySelector(matchingLink).classList.add("is-current-link")
          }
        }
      }
      reset(el){
        let matchingLink = el.getAttribute("data-matching-link")
         //  console.log("reset el "+el)
            document.querySelectorAll(`.box-header-list-items a:not(${matchingLink})`).forEach(el=>el.classList.remove("is-current-link"))
      }

}
export default StickHeader