export class Weather{
    constructor(city,countryCode){
        this.apiKey = '40eb1ba27c4a8261b82f6c56048d0820'
        this.city = city;
        this.countryCode = countryCode;
    }
    async getWeather(){
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
        const result = await fetch(URI);
        const data = result.json();
        return data
    }
    changeLocatiion(city,countryCode){
        this.city = city;
        this.countryCode = countryCode;
    }
}