

            var tempF = "54";
            var speed = "11";

            /*
        var tempF = parseInt(document.getElementById("Temperature").value);
        var speed = parseInt(document.getElementById("WindSpeed").value);

        */
        var result = getChillValue(tempF, speed);
        
        // Round to one decimal.
        var decimals = 0;
        var multiplier = Math.pow(10, decimals);
        result = Math.round(result * multiplier) / multiplier;

        document.getElementById("getChillValue").innerHTML = result; 

      


           // Calculate wind chill
   function getChillValue(tempF, speed) {
      var getChillValue = 35.74 + (0.6215 * tempF) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275 * tempF * (Math.pow(speed, 0.16)));
      return getChillValue;
    }
  
   