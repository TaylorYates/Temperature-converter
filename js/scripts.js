function convertCelcius() {
 var C = $(".fahrenheit").val();
 var floatC = (parseFloat(C) - 32) / 9 * 5;
 $(".celcius").val(floatC.toFixed(2));
}

function convertFahrenheit() {
 var F = $(".celcius").val();
 var floatF = parseFloat(F) * 9 / 5 + 32;
 $(".fahrenheit").val(floatF.toFixed(2));

}

function changeBackgroundF() {
  var fValue = $(".fahrenheit").val();

  if (fValue > 85) {
   $("body").attr("class", "hot");
  }

 else if (fValue < 67)  {
   $("body").attr("class", "cold");
  }

 else {
   $("body").attr("class", "normal");
  }
}

function changeBackgroundC() {
  var cValue = $(".celcius").val();

  if (cValue > 29) {
   $("body").attr("class", "hot");;
  }

 else if (cValue < 20)  {
   $("body").attr("class", "cold");
  }

 else {
   $("body").attr("class", "normal");
  }
}

function start() {
$(".C").click(convertCelcius);
$(".C").click(changeBackgroundC);
$(".F").click(convertFahrenheit);
$(".F").click(changeBackgroundF);
$("form").submit(function(e) {
  e.preventDefault();
});
}

$(document).ready(start);
