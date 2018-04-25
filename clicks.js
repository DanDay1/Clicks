//There are two tasks that I still need to finish to complete this assignment. The first is to get the initial variables to display when the page loads. To get that to happen, I know I'll need to initialize the variables and display them on the page load. Right now, the reason why they don't appear until the button clicks is because they all fall under the click function. The second task that still needs to get done is to get the elapsed time to refresh. To get the elapsed time to refresh, I know I need to implement some form of timer that would compare the current time with the last clicked time every minute. I already set the comparison function on line 29.

var clickcount = 0;
console.log(clickcount);

var a = moment();
var b = moment();

var result = 0;
var time = "never";
console.log("result: " + result);
console.log("time: " + time);

function clickCounter() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 0;
        }

        localStorage.lastclick = b;

        document.getElementById("result").innerHTML = localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }

    document.getElementById("time").innerHTML = a.format("hh:mm A") + " " + a.diff(b, 'minutes') + " minutes ago";


    console.log("clickcount: " + localStorage.clickcount);
    console.log("lastclick: " + localStorage.lastclick);
    console.log("result: " + result);
    console.log("time: " + time);
    console.log(moment().format("hh:mm A"));

    moment.fn.minutesFromNow = function() {
        return Math.floor((+new Date() - (+this)) / 60000) + ' mins ago';
    }
    //then call:
    moment.unix(d).minutesFromNow();

}

console.log(moment().startOf('hour').fromNow());