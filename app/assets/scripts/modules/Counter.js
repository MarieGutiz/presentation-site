
class Counter{

    constructor(el, diarkeia,type){
      this.obj = el;
      this.end = this.obj.innerHTML
      this.animateValue(this.obj,0,this.end,diarkeia,type)

    }
   animateValue(obj, start, end, duration,type) {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);

          if(type === "entire"){
            obj.innerHTML = Math.floor(progress * (end - start) + start);
          }
        else
         obj.innerHTML = this.financial((progress * (end - start) + start));
         
          if (progress < 1) {
            window.requestAnimationFrame(step);
           
          }
        };
        window.requestAnimationFrame(step);
       
      }
      financial(x) {
        return Number.parseFloat(x).toFixed(2);
      }
}

export default Counter;