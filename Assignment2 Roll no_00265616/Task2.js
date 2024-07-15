var arr1 = ["Red"];
var arr2=["Yellow"];
var arr3=["Green"];

var input=(prompt("Enter number to find"));

console.log(" User input = "  +  input);

var found = false;

for(var i=0; i<arr1.length;i++){

   if(arr1[i]=== input){

     document.write(" Must stop");
     found=true;
     break;
   }
   if(arr2[i]=== input){

    document.write("Redy to Move");
    found=true;
    break;
  }
  if(arr3[i]=== input){

    document.write("Move Now");
    found=true;
    break;
  }
   }
   if( !found){
      document.write("Not Found");

   }