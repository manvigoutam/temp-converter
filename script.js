function convertTemperature() {
    var temperature = document.getElementById('temperature').value;
    var convertFrom = document.getElementById('convertFrom').value;
    var convertTo = document.getElementById('convertTo').value;
    var resultElement = document.getElementById('result');
  
    if (temperature === '') {
      resultElement.textContent = 'Please enter a temperature.';
      return;
    }
  
    temperature = parseFloat(temperature);
  
    if (isNaN(temperature)) {
      resultElement.textContent = 'Invalid temperature. Please enter a valid number.';
      return;
    }
  
    var result;
    if (convertFrom === 'celsius') {
      if (convertTo === 'celsius') {
        result = temperature;
        resultElement.textContent = temperature + ' °C = ' + result + ' °C';
      } else if (convertTo === 'fahrenheit') {
        result = convertCelsiusToFahrenheit(temperature);
        resultElement.textContent = temperature + ' °C = ' + result + ' °F';
      } else if (convertTo === 'kelvin') {
        result = convertCelsiusToKelvin(temperature);
        resultElement.textContent = temperature + ' °C = ' + result + ' K';
      }
    } else if (convertFrom === 'fahrenheit') {
      if (convertTo === 'celsius') {
        result = convertFahrenheitToCelsius(temperature);
        resultElement.textContent = temperature + ' °F = ' + result + ' °C';
      } else if (convertTo === 'fahrenheit') {
        result = temperature;
        resultElement.textContent = temperature + ' °F = ' + result + ' °F';
      } else if (convertTo === 'kelvin') {
        result = convertFahrenheitToKelvin(temperature);
        resultElement.textContent = temperature + ' °F = ' + result + ' K';
      }
    } else if (convertFrom === 'kelvin') {
      if (convertTo === 'celsius') {
        result = convertKelvinToCelsius(temperature);
        resultElement.textContent = temperature + ' K = ' + result + ' °C';
      } else if (convertTo === 'fahrenheit') {
        result = convertKelvinToFahrenheit(temperature);
        resultElement.textContent = temperature + ' K = ' + result + ' °F';
      } else if (convertTo === 'kelvin') {
        result = temperature;
        resultElement.textContent = temperature + ' K = ' + result + ' K';
      }
    }
  }
  
  function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function convertCelsiusToKelvin(celsius) {
    return celsius + 273.15;
  }
  
  function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  function convertFahrenheitToKelvin(fahrenheit) {
    return (fahrenheit + 459.67) * 5/9;
  }
  
  function convertKelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }
  
  function convertKelvinToFahrenheit(kelvin) {
    return (kelvin * 9/5) - 459.67;
  }
  