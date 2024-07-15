var arr = ["Karachi"];

var input=(prompt("Enter City Name"));

for(var i=0; i<arr.length;i++){

   if(arr[i]=== input){

     document.write("Welcome to city of lights")
        
     found=true;
     break;
   }
   
   }
   if( !found){
      console.log("Not Found");

   }