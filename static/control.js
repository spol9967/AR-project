$(document).ready(function(){
    var x=y=z=0;
    
        $('.x-btn').on('click',function(){
            timeOutX = setInterval(function(){
                x++;
                inc();
              }, 10);
        }).bind('mouseup mouseleave', function() {
            clearInterval(timeOutX);
          });

        $('.y-btn').on('click',function(){
            timeOutY = setInterval(function(){
                y++;
                inc();
              }, 10);
        }).bind('mouseup mouseleave', function() {
            clearInterval(timeOutY);
          });

        $('.z-btn').on('click',function(){
            timeOutZ = setInterval(function(){
                z++;
                inc();
              }, 10);
        }).bind('mouseup mouseleave', function() {
            clearInterval(timeOutZ);
          });

        
    

        function inc(cord){
            $('a-box').attr("rotation",`${x} ${y} ${z}`)
        }
        inc();

})