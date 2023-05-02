const form = document.querySelector('form');
const cityInput = document.querySelector('#city-input');
const weatherInfo = document.querySelector('#weather-info');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityInput.value;
  const apiKey = '821a2a538ee2415c81ecf5df3d9eab13';
  const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}&units=M`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temp = data.data[0].temp;
      const desc = data.data[0].weather.description;
      weatherInfo.innerHTML = `Current temperature in ${city}: ${temp}°C<br>${desc}`;
    })
    .catch(error => {
      console.error('Error:', error);
      weatherInfo.innerHTML = 'Unable to get weather information';
    });
});
