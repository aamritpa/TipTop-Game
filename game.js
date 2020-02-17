more = function() {
    paper = Raphael('container',1000,1000) 
    var i;
    for (i =1;i<=5;i++)
    {
        if (i==1){
            rect = paper.rect(250, 250, 50, 80)
        slide = {
           // 'transform': 't2000,2000'
            'transform': 't2000,1000r450t-100,0'
        }
        rect.animate(slide, 50000)
        }
        if (i==2){
            rect1 = paper.rect(250, 250, 50, 80)
        slide = {
           // 'transform': 't2000,2000'
            'transform': 't2000,1000r450t-100,0'
        }
        rect1.animate(slide, 50000)
        }

        
    
          /*
        recolour = function() {
            blush = {
                'fill': '#f99'
            }
            rect1.animate(blush, 1000)
        }
        */
    }
  
    
}
setup = function() {
    more()
}
$(document).ready(setup)


/*
grow = function() {
    bigger = {
      'transform': 's2'
    }
    c.animate(bigger, 1000, 'linear', shrink)
  }
  shrink = function() {
    smaller = {
      'transform': 's1'
    }
    c.animate(smaller, 1000, 'linear', grow)
  }
setup = function() {
    paper = Raphael('container', 200, 200)
    c = paper.circle(100, 100, 40)
    grow()
  }
$(document).ready(setup)
*/