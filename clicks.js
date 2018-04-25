// var moment = require('moment');
// moment().format();

// var day = moment.unix(1318781876);
// console.log ("Day: " + day);

var clickcount = 0;
console.log(clickcount);

var a = moment();
var b = moment();

var result = 0;
var time = "never";
console.log("result: " + result);
console.log("time: " + time);




//What I think I need to do is initialive variables and cover if statements for if no time, display "never", then execute the click function. 


function clickCounter() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 0;
        }
        //if (localStorage.lastclick) {
           
             localStorage.lastclick = b;
            //localStorage.lastclick = Number(localStorage.clickcount) + 10;
        //} 
         //else {
         //    localStorage.lastclick = 0;
         //}
        document.getElementById("result").innerHTML = localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }

    document.getElementById("time").innerHTML = a.format("hh:mm A") + " " + a.diff(b, 'minutes') + " minutes ago";

    // document.getElementById("time").innerHTML = moment().format("hh:mm A") + " " + moment().startOf('').fromNow();
    console.log("clickcount: " + localStorage.clickcount);
    console.log("lastclick: " + localStorage.lastclick);
    console.log("result: " + result);
    console.log("time: " + time);
    console.log(moment().format("hh:mm A"));

}

console.log(moment().startOf('hour').fromNow());