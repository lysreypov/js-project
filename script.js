/* script */

const apiKey = "3f4740f3d44cc357674689359cc8ae59";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-icon");
const weatherImg = document.querySelector(".content img");

// hide element
document.querySelector(".error").classList.add("hidden");
document.querySelector(".weather-content").classList.add("hidden");

getCurrentDate();
searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  checkWeather(searchInput.value);

  // clear input value
  searchInput.value = "";
});

async function checkWeather(cityName) {
  const response = await fetch(apiUrl + `q=${cityName}` + `&appid=${apiKey}`);

  if (response.status === 404) {
    document.querySelector(".error").classList.remove("hidden");
    document.querySelector(".weather-content").classList.add("hidden");
  } else if (response.status === 200) {
    document.querySelector(".error").classList.add("hidden");
    document.querySelector(".weather-content").classList.remove("hidden");

    const data = await response.json();
    // update content
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp - 273) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    weatherImg.src = "/assets/clouds.png";
    switch (data.weather[0].main) {
      case "Clear":
        weatherImg.src = "/assets/clear.png";
        break;
      case "Clouds":
        weatherImg.src = "/assets/clouds.png";
        break;
      case "Drizzle":
        weatherImg.src = "/assets/drizzle.png";
        break;
      case "Mist":
        weatherImg.src = "/assets/mist.png";
        break;
      case "Rain":
        weatherImg.src = "/assets/rain.png";
        break;
      case "Snow":
        weatherImg.src = "/assets/snow.png";
      default:
        break;
    }
  }
}

function getCurrentDate() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay();
  const currentDay = daysOfWeek[currentDayIndex];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonthIndex = currentDate.getMonth();
  const currentMonthName = monthNames[currentMonthIndex];
  const date =
    currentDay + ", " + currentDate.getDate() + " " + currentMonthName;

  document.querySelector(".date").innerHTML = date;
}
