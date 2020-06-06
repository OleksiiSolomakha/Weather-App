const call = 'AOInY4Vh7AGpliDAzFaYAQQsM2brRGhI';

const getCity = async (city) => {

  const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${call}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

const getWeather = async (key) => {

  const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${key}?apikey=${call}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};
