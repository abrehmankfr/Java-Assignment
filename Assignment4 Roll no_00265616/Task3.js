var a = ["0","1","2","3","4","5","6","7","8","9"];
var b = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var c = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","R","U","V","W","X","Y","Z"];
var pwd = prompt("Enter Password");

var con_number = false;
var con_SmallLetter = false;
var con_CapLetter = false;
var con_length = true;
var con_StNum = true;

if(pwd.length < 8){
    alert("Password must at least 8 character length");
    con_length = false
}
else if(a.includes(pwd[0])){
        alert("Password should not start with number");    
        con_S=um = false
}
else{
    for(var j=0; j<pwd.length; j++){
        if(a.includes(pwd[j])){
            con_number = true;
        }
        else if(b.includes(pwd[j])){
            con_SmallLetter = true;
        }
        else if(c.includes(pwd[j])){
            con_CapLetter = true;
        }
    }
}
if(con_length && con_StNum && con_number && con_SmallLetter && con_CapLetter){
    alert("Password is Ok");
}
else{
    alert("Enter a valid Password, For character codes of a-z, A-Z & 0-9");
}
