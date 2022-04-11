//% day Weather Forecast
//Initial weather forecast info
$.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${29.426615}&lon=${-98.489567}&exclude=minutely&appid=${my_weathermap_token}&units=imperial`).done(function (data) {
    console.log(data);
    console.log(typeof (data));
    for (let i = 0; i < 5; i++) {
        let today = data.daily[i]
        let date = new Date(today.dt * 1000);
        // console.log(date);
        let html = `<div class="col card px-0">
                        <div class="card-header text-center card-img" <img src="../Assests/multiweatherpic.jpeg" width="248px" style="border-radius: 15px">${date.toLocaleDateString("en-US")}</div>                             
                            <div class="card-body">
                                 <div id="lowAndHigh" class="text-center">${today.temp.min}°F / ${today.temp.max}°F}</div>   
                                     <div id="icon" class="d-flex justify-content-center"><img src="https://openweathermap.org/img/w/${today.weather[0].icon}.png" alt="weather_icon" id="weather-icon"></div>
                                         <hr>
                                             <div id="weatherDescription">Weather Description: </div>
                                                 <div>${today.weather[0].description.bold()}</div>
                                                 <hr>
                                             <div id="humidity">Humidity: ${today.humidity.toString().bold()}</div>
                                         <hr>
                                        <div id="wind">Wind: ${today.wind_speed.toString().bold()}</div> 
                                     <hr>
                                 <div id="pressure">Pressure: ${today.pressure.toString().bold()}</div>
                            </div>
                    </div> `;
        $("#weatherRow").append(html);
    }
    // data.daily.forEach(function(element){
    // });
});
// Map
mapboxgl.accessToken = my_mapbox_Token;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 10,
    center: [-98.489567, 29.426615]

});
//Draggable marker
let marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.489567, 29.426615])
    .addTo(map);

let switchWeather = 1
let currentWeatherMode = 1

/// Dragging marker
function onDragEnd() {
    const lngLat = marker.getLngLat();
    console.log(lngLat)
    let place = reverseGeocode(lngLat, my_mapbox_Token)
    // console.log(place)
    //Getting city from dragging marker and placing it somewhere
    function city() {
        place.then(function (a) {
            console.log(a)
            console.log(typeof (a))
            let currentCity = $("#currentCity")
            //For loop had to be used so that we can break out of loop with return
            if (a.length === 0) {
                currentCity.empty()
                return currentCity.append("Can't grab location sorry!")
            } else {
                for (let i = 0; i < a.length; i++) {
                    console.log(a[i].place_type)
                    if (a[i].place_type[0] === 'place') {
                        console.log(a[i].place_name)
                        currentCity.empty()
                        return currentCity.append(a[i].place_name)
                    } else if (a[i].place_type[0] === 'region') {
                        currentCity.empty()
                        return currentCity.append(a[i].place_name)
                    } else {
                        return currentCity.append(a[i].place_name)
                    }
                }
            }
            $("#thisCity").append(currentCity);
        })
    }

    city()
    // console.log(city())
    //Getting weather details for the area thw marker was dropped on the map
    // if(currentWeatherMode === 2){
    $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lngLat.lat}&lon=${lngLat.lng}&exclude=minutely&appid=${my_weathermap_token}&units=imperial`).done(function (data) {
        console.log(data);
        console.log(typeof (data));
        $("#weatherRow").empty()
        if (currentWeatherMode === 2) {
            let currentDate = data.current
            let date = new Date(currentDate.dt * 1000);
            // console.log(date);
            let html = `<div class="col card px-0 text-center">
                    <div class="card-header text-center card-img" style="color: #0fb784">${date.toLocaleDateString("en-US")}</div>
                    <div class="card-body">
                    <div class="card-img" <img src="../Assests/multiweatherpic.jpeg" ></div>
                     <div id="lowAndHigh" class="text-center">Current Temperature: ${currentDate.temp}°F}</div>
                     <div id="icon" class="d-flex justify-content-center"><img src="https://openweathermap.org/img/w/${currentDate.weather[0].icon}.png" alt="weather_icon" id="weather-icon"></div>
                     <hr>
                     <div id="weatherDescription">Weather Description: </div>
                     <div>${currentDate.weather[0].description.bold()}</div>
                     <hr>
                     <div id="humidity">Humidity: ${currentDate.humidity.toString().bold()}</div>
                     <hr>
                    <div id="wind">Wind: ${currentDate.wind_speed.toString().bold()}</div>
                    <hr>
                    <div id="pressure">Pressure: ${currentDate.pressure.toString().bold()}</div>
                    </div>
                    </div>`;
            $("#weatherRow").append(html);
        } else {
            for (let i = 0; i <= 4; i++) {
                let today = data.daily[i]
                let date = new Date(today.dt * 1000);
                // console.log(date);
                let html = `<div class="col card px-0">
                    <div class="card-header text-center">${date.toLocaleDateString("en-US")}</div>                             
                    <div class="card-body" style="color: #5ed0e6">
                     <div id="lowAndHigh" class="text-center">${today.temp.min}°F / ${today.temp.max}°F}</div>   
                     <div id="icon" class="d-flex justify-content-center"><img src="https://openweathermap.org/img/w/${today.weather[0].icon}.png" alt="weather_icon" id="weather-icon"></div>
                     <hr>
                     <div id="weatherDescription">Weather Description: </div>
                     <div>${today.weather[0].description.bold()}</div>
                     <hr>
                     <div id="humidity">Humidity: ${today.humidity.toString().bold()}</div>
                     <hr>
                    <div id="wind">Wind: ${today.wind_speed.toString().bold()}</div> 
                    <hr>
                    <div id="pressure">Pressure: ${today.pressure.toString().bold()}</div>
                    </div>
                    </div> `;
                $("#weatherRow").append(html);
            }
        }

    });
}

marker.on('dragend', onDragEnd);
///Putting in location manually typing it by adding an event to the button
$("#addressButton").click(function () {
    let address = $("#address").val();
    console.log(address);
    geocode(address, my_mapbox_Token).then(function (result) {
        console.log(result);
        // map.setCenter(result);
        map.flyTo({
            center: [result[0], result[1]],
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        //giving marker new lng and lat for it to display in the new area
        marker.setLngLat([result[0], result[1]])
        console.log(marker._lngLat.lng);
        // $("#address").val("")
        //Getting city name for current city div from coordinates from inputting name of place
        let place = reverseGeocode(marker._lngLat, my_mapbox_Token)

        // console.log(place)
        function city() {
            place.then(function (a) {
                console.log(a)
                console.log(typeof (a))
                let currentCity = $("#currentCity")
                //For loop had to be used so that we can break out of loop with return
                for (let i = 0; i < a.length; i++) {
                    console.log(a[i].place_type)
                    if (a[i].place_type[0] === 'place') {
                        console.log(a[i].place_name)
                        currentCity.empty()
                        return currentCity.append(a[i].place_name)
                    } else if (a[i].place_type[0] === 'region') {
                        currentCity.empty()
                        return currentCity.append(a[i].place_name)
                    } else {

                    }
                }
            });
        }

        city()
        //Getting new weather details for when someplace is typed in the input bar

        $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${result[1]}&lon=${result[0]}&exclude=minutely&appid=${my_weathermap_token}&units=imperial`).done(function (data) {
            console.log(data);
            console.log(typeof (data));
            $("#weatherRow").empty()
            if (currentWeatherMode === 2) {
                let currentDate = data.current
                let date = new Date(currentDate.dt * 1000);
                // console.log(date);
                let html = `<div class="col card px-0 text-center">
                    <div class="card-header text-center">${date.toLocaleDateString("en-US")}</div>
                    <div class="card-body">
                     <div id="lowAndHigh" class="text-center">Current Temperature: ${currentDate.temp}°F}</div>
                     <div id="icon" class="d-flex justify-content-center"><img src="https://openweathermap.org/img/w/${currentDate.weather[0].icon}.png" alt="weather_icon" id="weather-icon"></div>
                     <hr>
                     <div id="weatherDescription">Weather Description: </div>
                     <div>${currentDate.weather[0].description.bold()}</div>
                     <hr>
                     <div id="humidity">Humidity: ${currentDate.humidity.toString().bold()}</div>
                     <hr>
                    <div id="wind">Wind: ${currentDate.wind_speed.toString().bold()}</div>
                    <hr>
                    <div id="pressure">Pressure: ${currentDate.pressure.toString().bold()}</div>
                    </div>
                    </div>`;
                $("#weatherRow").append(html);
            } else {
                for (let i = 0; i <= 4; i++) {
                    let today = data.daily[i]
                    let date = new Date(today.dt * 1000);
                    // console.log(date);
                    let html = `<div class="col card px-0">
                    <div class="card-header text-center">${date.toLocaleDateString("en-US")}</div>                             
                    <div class="card-body">
                     <div id="lowAndHigh" class="text-center">${today.temp.min}°F / ${today.temp.max}°F}</div>   
                     <div id="icon" class="d-flex justify-content-center"><img src="https://openweathermap.org/img/w/${today.weather[0].icon}.png" alt="weather_icon" id="weather-icon"></div>
                     <hr>
                     <div id="weatherDescription">Weather Description: </div>
                     <div>${today.weather[0].description.bold()}</div>
                     <hr>
                     <div id="humidity">Humidity: ${today.humidity.toString().bold()}</div>
                     <hr>
                    <div id="wind">Wind: ${today.wind_speed.toString().bold()}</div> 
                    <hr>
                    <div id="pressure">Pressure: ${today.pressure.toString().bold()}</div>
                    </div>
                    </div> `;
                    $("#weatherRow").append(html);
                }
            }
        });
    })
});


// Event to switch Weather Mode on the page
$("#switchWeather").click(function () {
    let latlng = marker.getLngLat()
    console.log(latlng);
    console.log(switchWeather);

    $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latlng.lat}&lon=${latlng.lng}&exclude=minutely&appid=${my_weathermap_token}&units=imperial`).done(function (data) {
        console.log(data);
        console.log(typeof (data));

        $("#weatherRow").empty()
        if (switchWeather === 1) {
            $("#currentMode").empty().append("Current Weather")
            switchWeather = 2;
            currentWeatherMode = 2
            let currentDate = data.current
            let date = new Date(currentDate.dt * 1000);
            // console.log(date);
            let html = `<div class="col card px-0 text-center">
                    <div class="card-header text-center">${date.toLocaleDateString("en-US")}</div>
                    <div class="card-body">
                     <div id="lowAndHigh" class="text-center">Current Temperature: ${currentDate.temp}°F}</div>
                     <div id="icon" class="d-flex justify-content-center"><img src="https://openweathermap.org/img/w/${currentDate.weather[0].icon}.png" alt="weather_icon" id="weather-icon"></div>
                     <hr>
                     <div id="weatherDescription">Weather Description: </div>
                     <div>${currentDate.weather[0].description.bold()}</div>
                     <hr>
                     <div id="humidity">Humidity: ${currentDate.humidity.toString().bold()}</div>
                     <hr>
                    <div id="wind">Wind: ${currentDate.wind_speed.toString().bold()}</div>
                    <hr>
                    <div id="pressure">Pressure: ${currentDate.pressure.toString().bold()}</div>
                    </div>
                    </div>`;
            $("#weatherRow").append(html);
        } else {
            $("#currentMode").empty().append("5-Day Forecast")
            switchWeather = 1
            currentWeatherMode = 1
            for (let i = 0; i <= 4; i++) {
                let today = data.daily[i]
                let date = new Date(today.dt * 1000);
                // console.log(date);
                let html = `<div class="col card px-0">
                    <div class="card-header text-center ">${date.toLocaleDateString("en-US")}</div>                             
                    <div class="card-body">
                     <div id="lowAndHigh" class="text-center">${today.temp.min}°F / ${today.temp.max}°F}</div>   
                     <div id="icon" class="d-flex justify-content-center"><img src="https://openweathermap.org/img/w/${today.weather[0].icon}.png" alt="weather_icon" id="weather-icon"></div>
                     <hr>
                     <div id="weatherDescription">Weather Description: </div>
                     <div>${today.weather[0].description.bold()}</div>
                     <hr>
                     <div id="humidity">Humidity: ${today.humidity.toString().bold()}</div>
                     <hr>
                    <div id="wind">Wind: ${today.wind_speed.toString().bold()}</div> 
                    <hr>
                    <div id="pressure">Pressure: ${today.pressure.toString().bold()}</div>
                    </div>
                    </div> `;
                $("#weatherRow").append(html);

            }
        }
    });
});
