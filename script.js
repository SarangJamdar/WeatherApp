let apiKey = "655cd1c10c1b2933e33d094add0022e9";
let city;
let usercity = document.getElementById("city");
let temp = document.getElementById("temp");
let tempm = document.getElementById("tempm");
let town = document.getElementById("name");
let townm = document.getElementById("namem");
let humd = document.getElementById('hmd');
let wind = document.getElementById("wnd");
let weatherimg = document.querySelector(".weather_img");

// Function to get data
async function getData() {   
    city = usercity.value;
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    let data = await response.json();
    let cityName = (data.name);
    let cityTemp = (Math.round(data.main.temp - 273.15));
    let cityHumd = (data.main.humidity);
    let cityWind = (data.wind.speed);
    town.innerHTML = cityName;
    townm.innerHTML = cityName;
    temp.innerHTML = cityTemp + " <sup>o</sup>C";
    tempm.innerHTML = cityTemp + " <sup>o</sup>C";
    humd.innerHTML = cityHumd + "%";
    wind.innerHTML = cityWind + " Kmph";
    if(data.weather[0].main === "Clear") {
        weatherimg.src = "sun.svg";
    } else if(data.weather[0].main === "Snow") {
        weatherimg.src = "snow.svg";
    } else if(data.weather[0].main === "Rain") {
        weatherimg.src = "rainy.svg";
    } else {
        weatherimg.src = "cloudy.svg";
    }
}

// Add event listener for the "keypress" event
usercity.addEventListener("keypress", function(event) {
    // Check if the key pressed is the Enter key
    if (event.key === 'Enter') {
        // Prevent the default action of the Enter key
        event.preventDefault();
        // Call the getData function when Enter key is pressed
        getData();
    }
});


