var c_temperature = 25;
var f_temperature;

f_temperature = (c_temperature * 9 / 5) + 32;
document.write(c_temperature + "°C is " + f_temperature + "°F<br><br>");

var f_temperature = 70;
c_temperature = (f_temperature - 32) * 5 / 9;
document.write(f_temperature + "°F is " + c_temperature + "°C");