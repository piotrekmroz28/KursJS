let lat;
let long;
const APIkey = "cd58b93ffb128870fca01a358689ea67";
function startApp(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                lat = position.coords.latitude;
                long = position.coords.longitude;
                console.log('lat: ', lat, 'long: ', long);

                getWetherData();
            }
        );
    }
}

function getWetherData(){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${APIkey}`;
    console.log(url);

    fetch(url).then(function (response){
        response.json().then(function(data){
            console.log(data);
            updateWeatherData(data);
        });
    });
}

function updateWeatherData(data){
    const temp = data.main.temp + " °C";
    const pressure = data.main.pressure + " hPa";
    const humidity = data.main.humidity + " %";
    const windSpeed = data.wind.speed + " km/h";
    const cloudsPercentage = data.clouds.all + " %";
    const city = data.name;
    const sunRise = new Date(data.sys.sunrise * 1000);
    const sunSet = new Date(data.sys.sunset * 1000);


    document.getElementById("temp").innerHTML = temp;
    document.getElementById("pressure").innerHTML = pressure;
    document.getElementById("humidity").innerHTML = humidity;
    document.getElementById("cloudePerc").innerHTML = cloudsPercentage;
    document.getElementById("windSpeed").innerHTML = windSpeed;
    document.getElementById("sunRise").innerHTML = sunRise.getHours() + ":" + sunRise.getMinutes();
    document.getElementById("sunSet").innerHTML = sunSet.getHours() + ":" + sunSet.getMinutes();

    let imgUrl = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
    document.getElementById("currentWeatherImg").setAttribute("src", imgUrl);

    const locationLink = document.getElementById("locationLink");
    locationLink.innerHTML = city;
    locationLink.href = `https://openstreetmap.org/#map=15/${lat}/${long}`;
}