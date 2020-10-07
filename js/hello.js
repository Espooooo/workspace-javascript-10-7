console.log("I am in hello.js")

var today = new Date();
var hoursNow = today.getHours();


var greetings = "";
if (hoursNow <= 12){
  greetings = "Good Morning";
}else{
  grettings = "Good Afternoob";
}

document.write(greetings);