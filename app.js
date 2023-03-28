function getWeather() {
    const location = document.getElementById("location").value;
    const apiKey = "174ae7dfe4ad512afb9f11dcf43de5bb";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.main && data.main.temp) {
                const temperature = Math.round(data.main.temp - 273.15);
                const description = data.weather[0].description;
                const windSpeed = data.wind.speed;
                const humidity = data.main.humidity;
                const iconCode = data.weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                const weatherHtml = `
            <div class="weather-card">
              <h1>${temperature} &deg;C</h1>
              <p class="weather-description"><img src="${iconUrl}" class="weather-icon"></p>
              <h1 class="weather-description2">${description}</h1>
              <p>Wind Speed: ${windSpeed} m/s</p>
              <p>Humidity: ${humidity}%</p>
            </div>
          `;
                document.getElementById("weather").innerHTML = weatherHtml;
            } else {
                document.getElementById("weather").innerHTML = "Error retrieving weather data";
            }
        })
        .catch(error => {
            console.error(error);
            document.getElementById("weather").innerHTML = "Error retrieving weather data";
        });
}