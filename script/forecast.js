const call = 'AOInY4Vh7AGpliDAzFaYAQQsM2brRGhI';

// get location

const getCity = async (city) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${call}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

// get weather

const getWeather = async (key) => {

  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${key}?apikey=${call}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];  

};
