var _num = prompt("Input any Number: ");
_num = Number(_num);

if(_num == 0){
    alert("Your entered Value is Zero: " + _num);
} 
else if(_num > 0){
    alert("Your entered Value is Positive: " + _num);
}
else if(_num < 0){
    alert("Your entered Value is Negative: " + _num);
}