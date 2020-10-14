class Weather {
  constructor(city, state, unit){
    this.apiKey = '3c43497db58a9daa927b40814146e047';
    this.city = city;
    this.state = state;
    this.unit = unit;
  }

  // Fetch weather from API
  async getWeather(){
    const response = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city},${this.state}&units=${this.unit}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location and unit of measurement
  changeLocation(city, state, unit){
    this.city = city;
    this.state = state;
    this.unit = unit;
  }
}