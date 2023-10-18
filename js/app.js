"use strict";

// Select All Elements
const $ = document;
const cityInput = $.querySelector(".search-inp");
const cityName = $.querySelector(".city-name");
const dateTxt = $.querySelector(".date-txt");
const degreeTitlt = $.querySelector(".degree-title");
const weatherStatus = $.querySelector(".weather-status");
const minTemp = $.querySelector(".min-temp");
const maxTemp = $.querySelector(".max-temp");
const searchReslut = $.querySelector('.search-reslut')



let apiData = {
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
  key: "e7554ca9dcb522d42a9e3671bdf757b9",
};

function fetchData() {
  let searchValue = cityInput.value;

  fetch(`${apiData.url}${searchValue}&appid=${apiData.key}&units=metric`)
    .then((resp) => resp.json())
    .then((data) => showData(data))
}

function showData(data) {
  showDate()
  // weather information
  cityName.innerHTML = `${data.name},${data.sys.country}`;
  weatherStatus.innerHTML = `${data.weather[0].main}`;
  degreeTitlt.innerHTML = `${Math.round(data.main.temp)}°C`;
  maxTemp.innerHTML = `${Math.round(data.main.temp_max)}°C`;
  minTemp.innerHTML = `${Math.round(data.main.temp_min)}°C`;
}

cityInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    fetchData();
  }
});


function showDate(){
  let weekDaysArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
  let monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December",];

  // Date information
  let nowDate = new Date();
  let year = nowDate.getFullYear();
  let month = monthArr[nowDate.getMonth()];
  let date = nowDate.getDate();
  let day = weekDaysArr[nowDate.getDay()];
  dateTxt.innerHTML = `${day} ${date} ${month} ${year}`;
}



