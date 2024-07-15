let email="ab.rahmanedu@gmail.com";
let emailPattern=/@[^\s@]+?\.[a-zA-Z]{2,}/g;
if(email.match(emailPattern)){
    console.log("Matched");
}
else{
    console.log("Not Matched");
}