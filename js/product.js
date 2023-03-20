






function calculateAmount(selectObject) {
	
	
	
	        if(selectObject.value=="s"){
				
                var small = document.getElementById('prices').innerHTML;
                var small = 20;
				var small_quantity=document.getElementById("quantity").value;
                document.getElementById("prices").innerHTML =parseInt(small)*small_quantity;
                document.getElementById("pricess").innerHTML =parseInt(small);
				
		    }
			if(selectObject.value=="m"){
				
                var medium = document.getElementById('prices').innerHTML;
                var medium = 30;
				var medium_quantity=document.getElementById("quantity").value;
                document.getElementById("prices").innerHTML =parseInt(medium)*medium_quantity;
                document.getElementById("pricess").innerHTML =parseInt(medium);
				
		    }
								
            if(selectObject.value=="l"){
				
                var large = document.getElementById('prices').innerHTML;
                var large =40;
				var large_quantity=document.getElementById("quantity").value;
                document.getElementById("prices").innerHTML =parseInt(large) *large_quantity;
                document.getElementById("pricess").innerHTML =parseInt(large)
					
			} 
				
                 
                
            }		

				 
		       



function zoom(e){
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}
 
 

