import Typed from "typed.js"

class Typing{

  constructor(){
    this.start()
  }

  start(){
    // new Typed('#typed', {
    //     strings: [
    //       'My strings are: <i>strings</i> with',
    //       'My strings are: <strong>HTML</strong>',
    //       'My strings are: Chars &times; &copy;'
    //     ],
    //     typeSpeed: 40,
    //     backSpeed: 0,
    //     smartBackspace: true,
    //     loop: true
    //   });

    // new Typed('#typed', {
    //     strings: [
    //       'npm install^1000\n`installing components...` ^1000\n`Fetching from source...`'
    //     ],
    //     typeSpeed: 40,
    //     backSpeed: 0,
    //     loop: true
    //   });
    // new Typed('#typed', { //works
    //     strings: [
    //       '1 Some <i>strings</i> with',
    //       '2 Some <strong>HTML</strong>',
    //       '3 Chars &times; &copy;'
    //     ],
    //     typeSpeed: 0,
    //     backSpeed: 0,
    //     smartBackspace: true,
    //     loop: false
    //   });

    new Typed('#typed', {
        strings: [
          'npm install^1000\n`installing components...` ^1000\n`Fetching from source...`'
        ],
        typeSpeed: 40,
        backSpeed: 0,
        loop: false
      });
    
  }
}
export default Typing