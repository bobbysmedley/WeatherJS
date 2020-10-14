// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state, weatherLocation.unit);

// Init UI
const ui = new UI();

// Get weather on Dom load
document.addEventListener('DOMContentLoaded', getWeather);


// Change location event
document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value; 
  const unit = document.getElementById('unit').value;

  // Change location
  weather.changeLocation(city, state, unit);

  // Set location in local storage
  storage.setLocationData(city, state, unit);

  // Get and display weather
  getWeather();

  // Close modal (uses jquery)
  $('#locModal').modal('hide');
});


function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
