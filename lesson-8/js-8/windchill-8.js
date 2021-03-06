function wind() {
   var tempF = parseFloat(document.getElementById("getTempValue").textContent);
   var speed = parseFloat(document.getElementById("getWindSpeedValue").textContent);
   var result = calcWindChill(tempF, speed);

   if ((tempF <= 50) && (speed >= 3.0)) {
      document.getElementById("getWindChillValue").textContent = result.toFixed() + " °F";
   } else {
      document.getElementById("getWindChillValue").textContent = "N/A";
   }
}

function calcWindChill(tempF, speed) {
   var calcWindChill = (35.74 + (0.6215 * tempF) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275 * tempF * (Math.pow(speed, 0.16))));
   return calcWindChill;
}
wind();