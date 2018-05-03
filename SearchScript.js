$(document).ready(function(){
  var today = new Date()
  var curHr = today.getHours()

  if (curHr < 12) {
    document.getElementById("demo").placeholder = "Good Morning Ashton";
  } else if (curHr < 18) {
    document.getElementById("demo").placeholder = "Good Afternoon Ashton";
  } else {
    document.getElementById("demo").placeholder = "Good Afternoon Ashton";
  }

  $("#demo").on('keyup', function(e) {
      if (e.keyCode == 13) {
          var txt = document.getElementById('demo').value

          if (txt == "vid") {
            window.open("https://www.youtube.com","_self")
          }

          if (txt == "google") {
            window.open("https://www.google.com", "_self")
          }

          if (txt == "uns") {
            window.open("https://unsplash.com", "_self")
          }

          if (txt == "home") {
            window.open("https://littlenate2114.github.io/hos/", "_self")
          }

          if (txt == "mes") {
            window.open("https://web.whatsapp.com/", "_self")
          }

          if (txt == "git") {
            window.open("https://github.com", "_self")
          }

          if (txt == "yammer") {
		  	  window.open("yammer.com", "_self")
		  }

          }

        }
  });

});
