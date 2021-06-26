
import Snap from 'snapsvg';


class LineGraph{

  constructor(el){
    // this.obj = el;
       //CHART VALUES
      //  this.chartH = this.obj.clientHeight;
      //  this.chartW = this.obj.clientWidth; //Attempting to authenticate

         this.chartH =531.2;
         this.chartW =409.8;
      
       this.prices = [];
       this.myPath = [];
       this.circle = [];
       this.setValues();    

       this.injectHTML();

    }
    injectHTML(){   
      let banner = document.querySelector(".banner-section_a_container");     

      banner.insertAdjacentHTML('beforeend',`
      <div class="content">      
      <h2 class="frame-1">Interested in datailed reports </h2>
      <h2 class="frame-2">For your business or research?</h2>
      <h2 class="frame-3">...Realized with the latest technology</h2>
      <h2 class="frame-4">Ask now!</h2>
      <h2 class="frame-5">
        <span>Get your business analysis.</span> 
        <span>Get knowledge of it.</span> 
        <span>Help your business grow!!</span>
      </h2> 
      <svg id="svglinegraph" viewBox="0 0 600 600">
      </svg>
     
    </div>
 
      `)
     
     this.repeatedGreetings()
 
    }
    async repeatedGreetings(){
      await this.sleep(12900)
     //Locks
      this.draw()
      this.animate()
    }
    sleep(delay){//Threading
     return new Promise((resolve) => setTimeout(resolve, delay))
    }
    setValues(){
    // PARSE PRICES TO ALIGN WITH BOTTOM OF OUR SVG
    // let price = [0,-95, -30, -65, -35, -215, -95, -70, -115];
    let price = [0,-190, -60, -130, -70, -400, -190, -140, -335];
    for (let i = 0; i < price.length; i++) {
      this.prices[i] = price[i]+this.chartH;
      
    }
     
    }
   step(i, chartW) {
        return chartW / this.prices.length * i;
    }
    draw(){
        //DEFINE SNAP SVG AND DETERMINE STEP NO.
    var paper = Snap('#svglinegraph');

    var steps = this.prices.length;
    // EVENLY DISTRIBUTE OUR POINTS ALONG THE X AXIS
    var points = [];
    var breakPointsX = [];
    var breakPointsY = [];
    var point = {};

    for (let i = 1; i < this.prices.length; i++) {

        //CALCULATE CURRENT POINT

        var currStep = this.step(i, this.chartW);
        var y = this.prices[i];
        point.x = Math.floor(currStep);
        point.y = y;

        //CALCULATE PREVIOUS POINT

        var prev = i - 1;
        var prevStep = this.step(prev, this.chartW);
        var prevY = this.prices[prev];
        point.prevX = Math.floor(prevStep);
        point.prevY = prevY;
        if (point.prevX === 0 || point.prevY === 0){
          point.prevX = 15;
          point.prevY = this.chartH - 15;
        }
        // SAVE PATH TO ARRAY
        points[i] = " M" + point.prevX + "," + point.prevY + " L" + point.x + "," + point.y;

        // SAVE BREAKPOINTS POSITION

        var r = 30;
        breakPointsX[i] = point.x;
        breakPointsY[i] = point.y;
    }

    // DRAW LINES

    for (let i = 0; i < this.prices.length; i++) {
        this.myPath[i] = paper.path(points[i]);
        var len = this.myPath[i].getTotalLength();
        this.myPath[i].attr({
            'stroke-dasharray': len,
                'stroke-dashoffset': len,
                'stroke': 'white',
                'stroke-linecap': 'round',
                'stroke-width': 4,
                'stroke-linejoin': 'round',
                'id': 'myLine' + i,
                'class':'line'
        });
    }
  
    // DRAW BREAKPOINTS
    for (let i = 0; i < points.length; i++) {
        this.circle[i] = paper.circle(breakPointsX[i], breakPointsY[i], 5);
        this.circle[i].attr({
            'fill': '#005996',
                'stroke': 'white',
                'stroke-width': 3,
                'id': 'myCirc' + i,
                'class':'breakpoint'
        });
    }
  //DRAW COORDINATE SYSTEM
    var xAxis = paper.path('M0,'+this.chartH+'L'+this.chartW+","+this.chartH);
    var yAxis = paper.path('M0,'+this.chartH+'L0,0');
  
  var xOff = xAxis.getTotalLength();
  var yOff = yAxis.getTotalLength();
  var start = (this.prices.length*250+"ms");
 
  yAxis.attr({
    'stroke':'black',
    'stroke-width':2,
    'stroke-dasharray':yOff,
    'stroke-dashoffset':yOff,
    'id':'yAxis'
  });
  xAxis.attr({
    'stroke':'black',
    'stroke-width':2,
    'stroke-dasharray':xOff+600,
    'stroke-dashoffset':xOff+600,
    'id':'xAxis'
  });
  console.log(start);

  xAxis.animate({
    'stroke-dashoffset':'0'
},1200, mina.easeinout)

  yAxis.animate({
    'stroke-dashoffset':'0'
},1000, mina.backout)
    }
    animate(){
    
     
       for (let i=0;i<this.prices.length;i++){
        var circ = document.querySelector('#myCirc'+i)
        var line = document.querySelector('#myLine'+i);

        this.css(circ, {
          '-webkit-transition':'all 550ms cubic-bezier(.84,0,.2,1)',
          'transition':'all 550ms cubic-bezier(.84,0,.2,1)',
          'transition-delay':375+(i*125)+"ms",
          '-webkit-transition-delay':375+(i*125)+"ms"
      });
      this.css(line, {
        '-webkit-transition':'all 550ms cubic-bezier(.84,0,.2,1)',
        'transition':'all 550ms cubic-bezier(.84,0,.2,1)',
        'transition-delay':375+(i*125)+"ms",
        '-webkit-transition-delay':375+(i*125)+"ms"
    });
      this.myPath[i].animate({
        'stroke-dashoffset':'0'
      },2000, mina.easein)
      this.css(circ, {
        'transform':'scale(1)'
    });
       
       }
          }

         css(element, style) {
            for (const property in style)
                element.style[property] = style[property];
        }

    }


export default LineGraph