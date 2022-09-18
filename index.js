let weather = {
    apiKey: 'ae29fae264d8fc5d7c9c125145995911',
    fetchWeather: function (city) {
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" +city +"&units=metric&appid=" +this.apiKey)
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
         .then((data) => this.displayWeather(data));
        //.then((data) => console.log(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.getElementById("location").innerText = "Weather in " + name;
      document.getElementById("icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
      document.getElementById("description").innerText = description;
      document.getElementById("temp").innerText = temp + "°C";
      document.getElementById("humidity").innerText =
        "Humidity: " + humidity + "%";
      document.getElementById("wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Dalat");

// function weatherApp(city) {
//     const key = 'ae29fae264d8fc5d7c9c125145995911';
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key)
//     .then(function(res) {
//         return res.json()
//     })
//     .then(function(data) {
//         pushWeather(data);
//         //console.log(data);
//     })
// }

// function pushWeather(d) {
//     const { temp, humidity } = d.main;
//     const {speed} = d.wind;
//     const celcius = Math.round(parseFloat(temp) - 273.15);

//     document.getElementById('location').innerHTML = d.name;
//     document.getElementById('description').innerHTML = d.weather[0].description;
//     document.getElementById('humidity').innerHTML = 'himidity: ' + humidity
//     document.getElementById('wind').innerHTML = 'wind speed: ' + speed + 'km/h'
//     document.getElementById('temp').innerHTML = celcius + '&deg;C';
//     document.querySelector(".weather").classList.remove("loading");
//     document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"; 
// }
// function search() {
//     this.pushWeather(document.querySelector("search-bar").value);
// }

// document.querySelector(".search button").addEventListener("click", function() {
//     window.search();
// })

// document
//     .querySelector(".search-bar")
//     .addEventListener("keyup", function(event) {
//         if (event.key == "Enter") {
//             window.search();
//         }
//     })

// window.onload =function() {
//     weatherApp('Dalat')
// }

