var password = "js123";
var input_pwd = prompt("Enter your Password: ");

//console.log(input_pwd);
if(input_pwd === null || input_pwd === "") {
    alert("Please Enter your password");
}
else if(input_pwd === password) {
    alert('“Correct! The password you entered matches the original password”.');
}
else {
    alert('“Incorrect password”');
}