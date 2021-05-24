import '../styles/styles.css'
import 'lazysizes'
import Counter from './modules/Counter';
import StickHeader from './modules/StickHeader'
import MobileMenu from './modules/MobileMenu'

new StickHeader()
new Counter(document.querySelector("#counter"),5000,"entire")
new Counter(document.querySelector("#sales"),5000,"")
new Counter(document.querySelector("#profit"),5000,"")
new MobileMenu()



/** webpack server */
if (module.hot) {
    module.hot.accept()
  }