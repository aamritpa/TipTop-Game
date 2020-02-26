make= function(){
    
    var category= $('#option').val()
    var totalnumber= $('#quantity').val()
    var shape = [];
    var count=0

    var i
    for (i=0;i<totalnumber;i++){

      if(category=='a'){
        shape[i]=paper.rect(400, 400, 1000/totalnumber, 1000/totalnumber)
      }


      if(category=='b'){
        shape[i]=paper.circle(400, 400, 60/totalnumber, 60/totalnumber)
      }

      if(category=='c'){
        shape[i]=paper.star(400, 400, 80, 60)
      }

    x = Math.floor(Math.random() * 800)-300 ;
    y = Math.floor(Math.random() * 800)-300 ;


    shape_attr = {
   'transform': 't' + x + ',' + y+ 'r'+(x+y),
   'fill': '#f00',
    }

    callback= function () { 
      this.hide()
      document.getElementById("Misses").innerHTML = totalnumber-count;
    }
    zap= function(){
      this.hide()
      count=count+1
      document.getElementById("score").innerHTML = count;
    }
    //Time function not implemented.
    time= function(){

    }

    shape[i].click(zap)
    shape[i].animate(shape_attr,20000, 'linear',callback);
    } 
}


setup = function() {
  paper = Raphael('container',1000,1000)
  p= paper.path('M0,0 L1000,0 M1000,0 L1000,1000 M1000,1000 L0,1000 M0,1000 L0,0 Z')// L800,800 M800,800 L800,100 M800,100 L0,0 Z')
  $('button').click(make)
}
$(document).ready(setup)

