make= function(){
    
    var category= $('#option').val()
    var i
    var shape = [];
    var totalnumber=5
    var count=0
    var miss=0
    for (i=0;i<totalnumber;i++){

      if(category=='a'){
        shape[i]=paper.rect(400, 400, 100, 100)
      }


      if(category=='b'){
        shape[i]=paper.circle(400, 400, 60, 60)
      }

      if(category=='c'){
        shape[i]=paper.ellipse(400, 400, 80, 60)
      }

    
    

    x = Math.floor(Math.random() * 700)-300 ;
    y = Math.floor(Math.random() * 700)-300 ;

  

    shape_attr = {
   'transform': 't' + x + ',' + y,
   'fill': '#f00',
    }

    callback= function () { 
      miss=totalnumber-count
      this.hide() 
      
    }
    zap= function(){
      this.hide()
      count=count+1
    }

    shape[i].click(zap)
    shape[i].animate(shape_attr,2000, 'linear',callback);
    }

}


setup = function() {
  paper = Raphael('container',1000,1000)
  p= paper.path('M0,0 L1000,0 M1000,0 L1000,1000 M1000,1000 L0,1000 M0,1000 L0,0 Z')// L800,800 M800,800 L800,100 M800,100 L0,0 Z')
  $('button').click(make)
}
$(document).ready(setup)

