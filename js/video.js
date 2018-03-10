$(document).ready(function(){


    var v = document.getElementsByTagName('video')[0];
    var t = document.getElementById('time');
    var headLine = document.querySelectorAll('.text-over-video h5');
    var stLine = "FJs Driving on mud"; 
    var ndLine = "bridge, drone, and mud"; 
    var rdLine = "warehouse space"; 
    var thLine = "interiors & exteriors";
    var fthLine = "Last rotating car";
    


    v.addEventListener('timeupdate',function(event){
	
      var cTime = parseInt(v.currentTime);
      // t.innerHTML = cTime;

    if (cTime <= 3){
    	$(headLine).html(stLine);
    
    } else if(cTime >= 4 && cTime < 9){
    	$(headLine).html(ndLine);
    
    } else if(cTime >= 11 && cTime < 17){
    	$(headLine).html(rdLine);
    
    } else if(cTime >= 18 && cTime < 23){
    	$(headLine).html(thLine);
    
    } else if(cTime >= 25 && cTime < 30){
    	$(headLine).html(fthLine);
    };

    },false);




});