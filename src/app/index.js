const formu = document.getElementById("form");
const {Weather} = require('./Weather');
const {UI} = require('./UI');
const {Store} = require('./Store')

const store = new Store()
const {city,countryCode} = store.getLocationData();
const ui = new UI();

const wheater = new Weather(city,countryCode);
require('./index.css');

async function fetchWeather(){
    const data = await wheater.getWeather();
    console.log(data);
    ui.render(data);
}

formu.addEventListener("submit",(e)=>{
    e.preventDefault();
    const city = document.getElementById("city").value;
    const countryCode = document.getElementById("countryCode").value;
    wheater.changeLocatiion(city,countryCode);

    store.setLocationData(city,countryCode)
    fetchWeather();
    formu.reset();
})
document.addEventListener("DOMContentLoaded",fetchWeather);