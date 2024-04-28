// Question # 01
var newDte= new Date  
document.write(newDte)

// Question # 02
var today = new Date();
var month = today.toLocaleString('default', { month: 'long' });

document.write(`Current Month: ${month}`);

// Question # 03
var now = new Date();
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var nowTime = daysOfWeek[now.getDay()];

document.write(`Today is ${nowTime}`);

// Question # 04
var currentDate = new Date();
var b = currentDate.toString();
var c = b.slice(0,3);
if (c === "Sat"){
    document.write("It's Fun Day")
}else if(c === "Sun"){
    document.write("It's Fun Day")
}else if(c === "Mon"){
    document.write("It's Monday")
}else if(c === "Tue"){
    document.write("It's Tuesday")
}else if(c === "Wed"){
    document.write("It's Wednesday")
}else if(c === "Thr"){
    document.write("It's Thursday")
}else if(c === "Fri"){
    document.write("It's Friday")
}else {
    document.write("Not a WeekDay")
}

// Question # 05
var dates= new Date
var result= dates.toString().slice(7,10)

if (result <= result){
    document.write ("“First fifteen days of the month”")
}else if (result >= result){
    document.write("“Last days of the month”")
}

// // Question # 06
var todayDate = new Date("Sat Dec 05, 2015 22:32:23");
var Todaymilli = todayDate.getTime();
var todayMin = todayDate.getMinutes();
var diff = Todaymilli - todayMin;
var diffMin = diff/(1000*60*60);
 
document.write("Current Date: " + todayDate);
document.write("<br> Elapsed milliseconds since January 1, 1970: " + Todaymilli);
document.write("<br> Elapsed minutes since January 1, 1970: " + diffMin)

// Question # 07
var todayDate= new Date
var copy= todayDate.toString().slice(15,24)

if(copy >= "24:00:00"){
document.write("It's AM")
}else if (copy <= "24:00:00"){
    document.write("It's PM")
}

// Question # 08
var todayDate= new Date
todayDate.setDate(13)

document.write(todayDate)

// Question # 09
