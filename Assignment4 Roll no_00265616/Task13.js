var todayDate = new Date("2015/Dec/5 22:32:23");
var Todaymilli = todayDate.getTime();
var todayMin = todayDate.getMinutes();
var diff = Todaymilli - todayMin;
var diffMin = diff/(1000*60*60);
var accurateMin = Math.floor(diffMin);

 
document.write("Current Date: " + todayDate);
document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)