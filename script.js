make= function(){
    
    var category= $('#option').val()
    var totalnumber= $('#quantity').val()
    var shape = [];
    var count=0

    var i
    for (i=0;i<totalnumber;i++){

      if(category=='a'){
        shape[i]=paper.rect(1200, 400, 1000/totalnumber, 1000/totalnumber)
      }


      if(category=='b'){
        shape[i]=paper.circle(1200, 400, 1000/totalnumber, 1000/totalnumber)
      }

      if(category=='c'){
        shape[i]=ellipse.star(400, 400, 80, 60)
      }

    x = Math.floor(Math.random() * 900)-400 ;
    y = Math.floor(Math.random() * 900)-400 ;


    shape_attr = {
   'transform': 't' + x + ',' + y+ 'r'+(x+y),
   'fill': '#f19',
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
   // time= function(){

    //}
    shape[i].animate(shape_attr,10000, 'linear',callback);
    shape[i].click(zap)
    } 
    //default the score and misses to 0
    document.getElementById("Misses").innerHTML = 0;
    document.getElementById("score").innerHTML = 0;
}


setup = function() {
  paper = Raphael('container',2000,1000)
  $('button').click(make)
}
$(document).ready(setup)

