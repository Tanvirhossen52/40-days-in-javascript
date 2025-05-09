const inputB = document.querySelector(".main i");
const inputBox = document.querySelector(".input-box");
const temprture = document.querySelector(".temprture");
const clouds = document.querySelector(".clouds");
const humidity = document.querySelector(".humidity");
const pressure = document.querySelector(".pressure");
const weatherImg = document.querySelector(".weatherImg");
const fotter = document.querySelector(".fotter");
const erorPage = document.querySelector(".erorPage");
const descrip = document.querySelector(".descrip");

async function chackWeather(city) {
    
  const api_key = "c632a262e81df56ef992a525e2446c15";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weatherData = await fetch(`${url}`).then((response) => response.json());

  console.log(weatherData);

  if (weatherData.cod === `404`) {
    erorPage.style.display = "flex";
    fotter.style.display = "none";
    return;
  }

  erorPage.style.display = "none";
  fotter.style.display = "flex";

  temprture.innerHTML = ` ${Math.round(weatherData.main.temp - 273.15)}°C`;
  descrip.innerHTML = weatherData.weather[0].description;
  humidity.innerHTML = weatherData.main.humidity;
  clouds.innerHTML = weatherData.clouds.all;
  pressure.innerHTML = `${weatherData.main.pressure}hPa`;

  switch (weatherData.weather[0].main) {
    case "clear":
      weatherImg.src = "img/assets/clear.png";
      break;
    case "Rain":
      weatherImg.src = "img/assets/rain.png";
      break;
    case "Snow":
      weatherImg.src = "img/assets/snow.png";
      break;
    case "Mist":
      weatherImg.src = "img/assets/mist.png";
      break;

    default:
      break;
  }
}

inputB.addEventListener("click", () => {
  chackWeather(inputBox.value);
});
