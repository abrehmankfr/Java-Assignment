var u_time = prompt("Enter time 24 hours clock format like: 1900");
u_time = parseInt(u_time);
if(u_time >= 0 && u_time < 1200){
    alert('"Good Morning"')
}
else if(u_time >= 1200 && u_time < 1700){
    alert('"Good Afternoon"')
}
else if(u_time >= 1700 && u_time < 2100){
    alert('"Good Evening"')
}
else if(u_time >= 2100 && u_time < 2359){
    alert('"Good Night"')
}
