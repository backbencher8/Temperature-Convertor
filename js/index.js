// =============================== Hoisting elements =================================
const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('ferhneit'); // Corrected variable name
const kelvin = document.getElementById('kelvin');

const clearTemp = document.getElementById('clearTemp');
const meter = document.getElementById("meter");
const suggestionSpan = document.getElementById('suggestion');

    celsius.oninput = function () {
        let c = parseFloat(celsius.value);
        if (isNaN(c)) {
            fahrenheit.value = "";
            kelvin.value = "";
            meter.style.borderColor = 'white';
            return;
        }
        fahrenheit.value = (c * 9 / 5) + 32;
        kelvin.value = c + 273.15;
        if (c >= 30) {
            suggestionSpan.innerHTML = "Temperature is hot. Stay hydrated.";
            meter.style.borderColor = 'orange';

        } else if (c <= 10) {
            suggestionSpan.innerHTML = "Temperature is cold. Bundle up!";
            meter.style.borderColor = 'powderBlue';
        } else {
            suggestionSpan.innerHTML = "Temperature is moderate.";
        }
    }

fahrenheit.oninput = function () {
    let f = parseFloat(fahrenheit.value);
    if (isNaN(f)) {
        celsius.value = "";
        kelvin.value = "";
        meter.style.borderColor = 'white';
        return;
    }
    celsius.value = (f - 32) * 5 / 9;
    kelvin.value = (f - 32) * 5 / 9 + 273.15;
    if (f >= 86) {
        suggestionSpan.innerHTML = "Temperature is hot. Stay hydrated.";
        meter.style.borderColor = 'orange';

    } else if (f <= 50) {
        suggestionSpan.innerHTML = "Temperature is cold. Bundle up!";
        meter.style.borderColor = 'powderBlue';
    } else {
        suggestionSpan.innerHTML = "Temperature is moderate.";
    }
}
kelvin.oninput = function () {
    let k = parseFloat(kelvin.value);
    if (isNaN(k)){
        fahrenheit.value = "";
        celsius.value = "";
        meter.style.borderColor = 'white';
        return;
    }
    celsius.value = k - 273.15;
    fahrenheit.value = (k - 273.15) * 9 / 5 + 32;
    if (k >= 303) {
        suggestionSpan.innerHTML = "Temperature is hot. Stay hydrated.";
        meter.style.borderColor = 'orange';

    } else if (k <= 283) {
        suggestionSpan.innerHTML = "Temperature is cold. Bundle up!";
        meter.style.borderColor = 'powderBlue';
    } else {
        suggestionSpan.innerHTML = "Temperature is moderate.";
    }

}

clearTemp.addEventListener('click', function () {
    celsius.value = "";
    fahrenheit.value = "";
    kelvin.value = "";
    meter.style.borderColor = "white";
})