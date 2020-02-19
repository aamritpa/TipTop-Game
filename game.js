more = function() {
    paper = Raphael('container',5000,5000) 
    var size=10
    var rectangle = [];
    var circle = [];
    var i=0
    var n=5
   for (i=0;i<n;i++){
        rectangle[i] = paper.rect(2000, 2000, 2500/n, 2500/n)
        if(i%2==0)
        {
          var x_axis= Math.floor((Math.random() * 1000) + 500);
          var y_axis= Math.floor((Math.random() * 1000) + 500);
          translate = 1.5*i
          attribs = {
            x: x_axis,
            y: y_axis,
            transform: 'r'+360
        }
          rectangle[i].animate(attribs, 20000)
        }

        if(i%2==1)
        {
          var x_axis= -Math.floor((Math.random() * 1000) + 500);
          var y_axis= Math.floor((Math.random() * 1000) + 500);
          translate = 1.5*i
          attribs = {
            x: x_axis,
            y: y_axis,
            transform: 'r'+360
        }
          rectangle[i].animate(attribs, 20000)
        }
 }
}
  
setup = function() {
    more()
}
$(document).ready(setup)


///Circle Implementation

/*
    for (i=0;i<10;i++){
        circle[i] = paper.circle(700, 200, 60, 60)
        if(i%2==0)
        {
          slide = {
            'transform': 't-2000,100r1000t-100,t200'
          }
          circle[i].animate(slide, 5000*i)
        }

        if(i%2==1)
        {
          slide = {
              'transform': 't2000,100r1000t-100,t200'
          }
          circle[i].animate(slide, 5000*i)
        }
      }
      */