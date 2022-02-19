// API_key saved variable
const API_KEY = "d9dc39cd4598c43cc5615c4f39788887";

// 
function onGeoSucceed(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector(".weather");
            const city = document.querySelector(".geolocate");
            city.innerText = `${data.name}`;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp} `;
        });
    
}

function onGeoFailed() {
    alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoSucceed,onGeoFailed);

