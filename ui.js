class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
    this.loading = document.getElementById('loading');
  }

  paint(weather){
    // Get city and region
    this.city = weather.location.name;
    this.region = weather.location.region;

    // Create temperature string
    this.temp = weather.current.temperature + ' Degrees';


    this.location.textContent = this.city + ', ' + this.region;
    this.desc.textContent = weather.current.weather_descriptions;
    this.string.textContent = this.temp;
    this.icon.setAttribute('src', weather.current.weather_icons);
    this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}%`; 
    this.feelsLike.textContent = `Feels like: ${weather.current.feelslike}`; 
    this.wind.textContent = `Wind speed: ${weather.current.wind_speed} MPH`; 

    
  }

  load(){
    this.loading.innerHTML = '<img src="img/loading.gif" alt="">';
  }

  hideLoad(){
    this.loading.innerHTML = '';
  }
}