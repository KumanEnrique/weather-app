export class UI{
    constructor(){
        this.location = document.getElementById("weather-location");
        this.description = document.getElementById("weather-description");
        this.string = document.getElementById("weather-string");
        this.humidity = document.getElementById("humidity");
        this.wind = document.getElementById("wind");
        this.pressure = document.getElementById("pressure");
    }
    render(weather){
        this.location.innerText = weather.name + "/" + weather.sys.country;
        this.description.innerText = weather.weather[0].description;
        this.string.innerText = weather.main.temp + " °C";
        this.humidity.innerText = "humidity: " + weather.main.humidity + "%";
        this.wind.innerText = "wind: " + weather.wind.speed + "m/s";
        this.pressure.innerText = "pressure: " + weather.main.pressure + "hpa";
    }
}