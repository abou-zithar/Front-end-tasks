function openNav() {
    
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}






$("a").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
  
    
})












$(document).ready(function()
{
                  
   
    $("#grid h3").click(function(){
    
        
        $(this).next().slideDown(500);
         $("#grid div").not($(this).next()).slideUp(500);
        
    });

    $("#grid h3").dblclick(
        function(){
           
            
            $(this).next().slideUp(500);
             $("#grid div").not($(this).next()).slideUp(500);
            
        }
    );
                  
                  
                  
                  
                  
                  
                  
});




(function ClockCountdown(){
  
				var now = new Date();
				var eventDate = new Date(2022 , 12, 17);

				var currentTiime = now.getTime();
				var eventTime = eventDate.getTime();

				var remTime = eventTime - currentTiime;
               

				var s = Math.floor(remTime / 1000);
				var m = Math.floor(s / 60);
				var h = Math.floor(m / 60);
				var d = Math.floor(h / 24)-30;

				h %= 24;
                // console.log(Math.floor(remTime/1000/60/60) %24 );
				m %= 60;
                // console.log(Math.floor(remTime/1000/60) %60 );
				s %= 60;
                // console.log(Math.floor(remTime/1000) %60 );

				h = (h < 10) ? "0" + h : h;
				m = (m < 10) ? "0" + m : m;
				s = (s < 10) ? "0" + s : s;

				document.getElementById("days").innerHTML = "<h3>"+  d + " day"+"</h3>";
				document.getElementById("hours").innerHTML ="<h3>"+  h + " hour"+"</h3>";
				document.getElementById("minutes").innerHTML = "<h3>"+  m + " minute"+"</h3>";
				document.getElementById("seconds").innerHTML = "<h3>"+  s + " second"+"</h3>";

				setTimeout(ClockCountdown, 1000);
			})();

			


/*---------------------------------------------------------------- textarea */


$(function(){
    
    "use strick";
    var max =100;
    
    $("textarea").keypress(function(){
        
        var length=$(this).val().length;
        var character = max - length;
        
       
        
        if(character<=0)
            {
                 $("#char").text("your available character finished");
                
            }
        else{
        
        $("#char").text(character);
        }
        
    });

    
});


/* ---------------------------------------------------------------END TEXTAREA */