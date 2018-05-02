$(document).ready(function(){
  var today = new Date()
  var curHr = today.getHours()

  if (curHr < 12) {
    document.getElementById("demo").placeholder = "Good Morning Sam";
  } else if (curHr < 18) {
    document.getElementById("demo").placeholder = "Good Afternoon Sam";
  } else {
    document.getElementById("demo").placeholder = "Good Afternoon Sam";
  }

  $("#demo").on('keyup', function(e) {
      if (e.keyCode == 13) {
          var txt = document.getElementById('demo').value

          window.open("http://www." + $("#demo").val() + ".com", "_self")


          if (txt == "mes") {
            window.open("https://web.whatsapp.com/", "_self")
          }
        }
  });

  $("#demo2").on('keyup', function(e) {
    if (e.keyCode == 13) {
      var txt2 = document.getElementById('demo2').value
      if (txt2 == "sheep") {
        $('.wallpaper').fadeTo('slow', 0.3, function()
        {
            $("#demo2").val("");
            $(this).css("background-image", "url('back.jpg')");
        }).delay(500).fadeTo('slow', 1);

      }
    }
  });

});
