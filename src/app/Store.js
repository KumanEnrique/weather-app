export class Store {
    constructor(){
        this.city;
        this.countryCode;
        this.defaultCity = "london";
        this.defaultCountryCode = "uk";
    }
    getLocationData(){
        if(localStorage.getItem("city") === null && localStorage.getItem("countryCode") === null){
            this.city = this.defaultCity;
            this.countryCode = this.defaultCountryCode;
        }else{
            this.city = localStorage.getItem("city")
            this.countryCode = localStorage.getItem("countryCode")
        }
        return{
            city:this.city,
            countryCode:this.countryCode
        }
    }
    setLocationData(city, countryCode) {
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }
}