class Temprature {
    constructor() {
        this.celsius = 0;
        this.fahrenheit = 32;
    }

    // Getters
    get getCelsius() {
        return this.celsius;
    }
    get getFahrenheit() {
        return this.fahrenheit;
    }

    // Setters
    set setCelsius(value) {
        if (typeof value === "number") {
            this.celsius = value;
            this.fahrenheit = (value * 9 / 5) + 32;
        }
        else
            console.log("Please Enter a valid temprature");
    }
    set setFahrenheit(value) {
        if (typeof value === "number") {
            this.fahrenheit = value;
            this.celsius = (value - 32) * 5 / 9;
        }
        else
            console.log("Please Enter a valid temprature");
    }
};

const temperature = new Temprature();

console.log(`Initial Temperature in Celsius is ${temperature.getCelsius}°C`);
console.log(`Initial Temperature in Fahrenheit is ${temperature.getFahrenheit}°F`);
// OUTPUT :Initial Temperature in Celsius is 0°C
//         Initial Temperature in Fahrenheit is 32°F

temperature.setCelsius = 25;
console.log(`Celsius: ${temperature.getCelsius}°C`);        // Celsius: 25°C
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`);  // Fahrenheit: 77°F

temperature.setFahrenheit = 108;
console.log(`Celsius: ${temperature.getCelsius}°C`);        // Celsius: 42.2°C
console.log(`Celsius: ${temperature.getFahrenheit}°F`);     // Fahrenheit: 108°F