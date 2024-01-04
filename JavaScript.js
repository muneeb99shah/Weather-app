const apikey = "6b2ddf94efad6375ca555d0d648c617f";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchItem = document.querySelector(".weather-search input");
const searchItemBtn = document.querySelector(".weather-search button");

const weatherIconsImg = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);

  if (response.status === 404) {
    document.querySelector(".errorMassage").style.display = "block";
    document.querySelector(".weather-content").style.display = "none";
  } else {
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temprature").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " " + "km/h";

    if (data.weather[0].main === "Clouds") {
      weatherIconsImg.src = "images/clouds.png";
    }
    if (data.weather[0].main === "Clear") {
      weatherIconsImg.src = "images/clear.png";
    }
    if (data.weather[0].main === "Rain") {
      weatherIconsImg.src = "images/rain.png";
    }
    if (data.weather[0].main === "Drizzle") {
      weatherIconsImg.src = "images/drizzle.png";
    }
    if (data.weather[0].main === "Mist") {
      weatherIconsImg.src = "images/mist.png";
    }
    document.querySelector(".weather-content").style.display = "block";
    document.querySelector(".errorMassage").style.display = "none";
  }
}
searchItemBtn.addEventListener("click", () => {
  checkWeather(searchItem.value);
});
