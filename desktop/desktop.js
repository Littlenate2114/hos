var StartActive = false;
function OpenStart() {
  if (StartActive == true) {
    document.getElementById("startmenu").style.display = "none";
    console.log('closed start menu')
    StartActive = false;
  } else if (StartActive == false) {
    document.getElementById("startmenu").style.display = "block";
    console.log('opened start menu')
    StartActive = true;
  } else {
    console.log('There was an error opening the start menu')
  }
}

function getTime() {
  var today = new Date(); // Fetch Current Date
  var h = today.getHours(); // get hours from date
  var m = today.getMinutes(); // get minutes from date
  m = checkTime(m);
  document.getElementById('clock').innerHTML = h + ":" + m;
  var t = setTimeout(getTime(), 60000);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
