      //https://www.youtube.com/watch?v=AixAmLWzXYg
      var balls = document.getElementsByClassName("ball");
      document.onmousemove = function() {
        var x = event.clientX *100 / window.innerWidth + "%";
        var y = event.clientY *100 / window.innerHeight + "%";
        var x1 = event.clientX/window.innerWidth;
        var y2 = event.clientY/window.innerHeight;
        var pct = 360*(Math.sqrt(x1*x1 + y2*y2));
        document.body.style.background = "linear-gradient(" + pct + "deg,#448753,#795bb0)";
        for (var i = 0; i < 2; i++) {
          balls[i].style.left = x;
          balls[i].style.top = y;
          balls[i].style.transform = "translate(- "+x+", "+y+")";       
         }
      }
