class Modal{

    constructor(){       
        this.injectHTML();
        this.modal= document.querySelector(".modal");
        this.closeIcon =document.querySelector(".modal__close");
        this.events();
    }
    events(){
        //closing
        
        this.closeIcon.addEventListener("click",()=>this.closeTheModal())

        //close by any key

        document.addEventListener("keyup",e=>this.keyPressHandler(e))
    }

    openTheModal(e){
      console.log("Open sesame")
        this.modal.classList.add("modal--is-visible")
    }
    closeTheModal(){
        this.modal.classList.remove("modal--is-visible")
    }
    keyPressHandler(e){
        if(e.keyCode==27){
            this.closeTheModal();
        }
    }

   injectHTML(){   
     document.body.insertAdjacentHTML('beforeend',`
     <div class="modal">
     <div class="modal__inner">
       <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>
       <div class="wrapper wrapper--narrow">
         <p class="modal__description">Thanks for comming until this section. You can send me a message through <a href="#">here</a>,
          I'll be pleased to answer you and help you with any of your questions!</p>
       </div>
     
       <div class="social-icons">
         <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
         <a href="#" class="social-icons__icon"><img src="assets/images/icons/mailicon.svg" alt="Email"></a>
       </div>
     </div>
     <div class="modal__close">X</div>
     </div>
     `)

   }
}

export default Modal;

