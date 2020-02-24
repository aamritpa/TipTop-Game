/*
more = function() {
    paper = Raphael('container',5000,5000) 
    var size=10
    var rectangle = [];
    var circle = [];
    var i=0
    var n=10
    var category
   for (i=0;i<n;i++){
        rectangle[i] = paper.rect(200, 200, 2500/n, 2500/n)
        if(i%2==0)
        {
          var x_axis= Math.floor((Math.random() * 1000) + 500);
          var y_axis= Math.floor((Math.random() * 1000) + 500);
          translate = 1.5*i
          attribs = {
            x: x_axis,
            y: y_axis,
            transform: 'r'+360,
            AnimationTimeline:10
          }
          rectangle[i].animate(attribs, 20000)
        }

        if(i%2==1)
        {
          var x_axis= -Math.floor((Math.random() * 1000) + 500);
          var y_axis= Math.floor((Math.random() * 1000) + 500);
          hue=i*20
          newcolour = 'hsl(' + hue + ', 100%, 50%)'
          translate = 1.5*i
          attribs = {
            x: x_axis,
            y: y_axis,
            transform: 'r'+360,
            AnimationTimeline:10
        }
          rectangle[i].animate(attribs, 20000)
          
        }
 }

}
 */ /*
setup = function() {
    more()
}
$(document).ready(setup)
*/

make= function(){
    
    var category= $('#option').val()
    var i
    var shape = [];
    for (i=0;i<50;i++){

      if(category=='a'){
        shape[i]=paper.rect(400, 400, 100, 100)
      }


      if(category=='b'){
        shape[i]=paper.circle(400, 400, 60, 60)
      }

    //  if(category==3){}

    //  if(category==4){}
    

    x = Math.floor(Math.random() * 700)-300 ;
    y = Math.floor(Math.random() * 700)-300 ;

  

    shape_attr = {
   'transform': 't' + x + ',' + y,
   'fill': '#f00',
    }
    callback= function () { 
      this.hide() 
    }
    shape[i].animate(shape_attr, 3000, 'linear',callback);
    }
}


setup = function() {
  paper = Raphael('container',1000,1000)
  p= paper.path('M0,0 L1000,0 M1000,0 L1000,1000 M1000,1000 L0,1000 M0,1000 L0,0 Z')// L800,800 M800,800 L800,100 M800,100 L0,0 Z')
  $('button').click(make)
}
$(document).ready(setup)

