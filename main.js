(function() {
  var dotime;

  dotime = function() {
    var d, hex, hours, mins, secs;
    $("body").css({
      transition: "all 0.8s",
      "-webkit-transition": "all 0.8s"
    });
    d = new Date();
    hours = d.getHours();
    mins = d.getMinutes();
    secs = d.getSeconds();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }
    if (secs < 10) {
      secs = "0" + secs;
    }
    hex = "#" + hours + mins + secs;
    $(".t").html(hours + " : " + mins + " : " + secs);
    $(".h").html(hex);
    document.body.style.background = hex;
    setTimeout((function() {
      dotime();
    }), 1000);
  };

  window.onload = dotime();

}).call(this);
