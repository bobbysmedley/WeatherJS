class Storage {
  constructor(){
    this.city;
    this.state;
    this.unit;
    this.defaultCity = 'Charlotte';
    this.defaultState = 'North Carolina';
    this.defaultUnit = 'f';
  }

  getLocationData(){
    if(localStorage.getItem('city') === null){
      this.city = this.defaultCity;
    } 
    else{
      this.city = localStorage.getItem('city');
    }
    if(localStorage.getItem('state') === null){
      this.state = this.defaultState;
    } 
    else{
      this.state = localStorage.getItem('state');
    }
    if(localStorage.getItem('unit') === null){
      this.unit = this.defaultUnit;
    } 
    else{
      this.unit = localStorage.getItem('unit');
    }

    return {
      city: this.city,
      state: this.state,
      unit: this.unit
    }
  }

  setLocationData(city, state, unit){
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
    localStorage.setItem('unit', unit);
  }
}