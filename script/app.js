const form = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

  const town = data.town;
  const weather = data.weather;

  details.innerHTML = `
    <h5 class="my-3">${town.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  const iconUrl = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconUrl);

  let timeUrl = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  time.setAttribute('src', timeUrl);

  if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
  }

};

const changeCity = async (city) => {

 const town = await getCity(city);
 const weather = await getWeather(town.Key);

 return {
   town: town,
   weather: weather
 };
 
};

form.addEventListener('submit', e => {
  e.preventDefault();

  const city = form.city.value.trim();
  form.reset();

  changeCity(city)
  .then(data => updateUI(data))
  .catch(err => console.log(err));

  localStorage.setItem('city', city);

});

if(localStorage.getItem('city')){
  changeCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.log(err));
};