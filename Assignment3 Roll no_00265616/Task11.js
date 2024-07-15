

var arr = ["cake", "apple pie", "cookie", "chips", "patties"];

var input=(prompt("Welcome to AR.rahman Bakery.What do you want to order sir/ma'am?"));

var found = false;

for(var i=0; i<arr.length;i++){

   if(arr[i]=== input){

     document.write(input + "is available at index " + i + " in our bakery");
     found=true;
     break;
   }
   
   }
   if( !found){
      document.write("We are sorry." + input + " is not available in our bakery");

   }