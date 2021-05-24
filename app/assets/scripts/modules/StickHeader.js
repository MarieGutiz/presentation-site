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
        }
    
       // this.pageSections.forEach(el => this.calcSection(el))
      }
    
      determineScrollDirection() {
        if (window.scrollY > this.previousScrollY) {
          this.scrollDirection = 'down'
        } else {
          this.scrollDirection = 'up'
        }
        this.previousScrollY = window.scrollY
      }
}
export default StickHeader