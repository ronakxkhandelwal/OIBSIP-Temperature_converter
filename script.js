function convertTemperature() {
    let temperature = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;

    let result;

    if(unit === "celsius") {
        // Convert Fahrenheit to Celsius
        result = (temperature - 32) * 5/9;
        result = result.toFixed(2) + "°C";
    } else {
        // Convert Celsius to Fahrenheit
        result = (temperature * 9/5) + 32;
        result = result.toFixed(2) + "°F";
    }

    document.getElementById('result').innerText = "Converted Temperature: " + result;
}
