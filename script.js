function k(l) {
    var x = document.getElementById("temp").value;
    var h = 0;
    if (x == "cel") {
      h = celTOfah(l);
      document.getElementById("display").innerHTML = `${h}°Fahrenheit`;
    } else if (x == "far") {
      h = fahTOcel(l);
      document.getElementById("display").innerHTML = `${h}°Celsius`;
    }
    function celTOfah(l) {
      let fahrenheit = l * (9 / 5) + 32;
      return fahrenheit;
    }
    function fahTOcel(l) {
      let celsius = ((l - 32) * 5) / 9;
      return celsius;
    }
  }