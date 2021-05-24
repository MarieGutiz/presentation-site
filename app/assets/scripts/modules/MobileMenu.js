class MobileMenu {
    constructor() {
      this.menuIcon = document.querySelector(".box-header__menu-icon")
      this.menuContent = document.querySelector(".box-header-list-items")
      this.boxHeader = document.querySelector(".box-header")
      this.events()
    }
  
    events() {
      this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }
  
    toggleTheMenu() {
      this.menuContent.classList.toggle("box-header-list-items--is-visible")
      this.boxHeader.classList.toggle("box-header--is-expanded")
      this.menuIcon.classList.toggle("box-header__menu-icon--close-x")
    }
  }
  
  export default MobileMenu