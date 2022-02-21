
/** Search function **/
// create an event listener for the button
// store the value that address into varaible
// search address using geocode

// let geocoder = new google.maps.Geocoder();

// geocoder.geocode({home}, function (results, status) {
//     if (status === google.maps.GocoderStatus.OK) {
//         map.setCenter(results[0].geometry.location);
//     } else {
//         alert("geocoding was not successful - STATUS: " + status);
//     }
// });

function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function (res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function (data) {
            return data.features[0].center;
        });
}

$('#search_button').click(function (e) {

    let home = $("#search").val();
    console.log(home);


    geocode(home, my_mapbox_Token).then(function (coordinates) {
        console.log(coordinates);
        console.log("danny");
        $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates[1]}&lon=${coordinates[0]}&appid=${my_weathermap_token}&units=imperial`)
            // $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${29.424349}&lon=${-98.491142}&appid=${my_weathermap_token}`)
            .done(function (data) {
                console.log(data)
                $("#map").attr("src", data.message)
                console.log(status);
                $("#weather").empty()


                for (var i = 0; i < 5; i++) {

                    let current = new Date(data.daily[i].dt * 1000)
                    let today = new Date

                    let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

                    function getLocaltime() {
                        return new Date().toLocaleTimeString();
                    }

                    console.log(getLocaltime());

                    let html = `<div class="card col-3 px-0">
                                        <div class="card-header" >
                                             <h6 class="card-title" >${current.toLocaleDateString("en-US")}</h6>
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text" style="text-align: center">${data.daily[i].temp.min}°F/${data.daily[i].temp.max}</p>
                                            <h6 class="card-subtitle mb-2 text-muted" style="text-align: center"> <img src="http://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png"></h6>
                                            <p class="card-text" style="text-align: center">Description: ${data.daily[i].weather[0].description}</p>
                                            <hr>
                                            <p class="card-text">Humidity: ${data.daily[i].humidity}%</p>
                                            <hr>
                                            <p class="card-text">Wind: ${data.daily[i].wind_speed}</p>
                                             <hr>
                                            <p class="card-text">Pressure: ${data.daily[i].pressure}</p>
                                        </div>
                                </div>`
                    $('#weather').append(html)
                }
            })

    })

})


$.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${29.4241}&lon=${-98.4936}&appid=${my_weathermap_token}&units=imperial`)
    // $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${29.424349}&lon=${-98.491142}&appid=${my_weathermap_token}`)
    .done(function (data) {
        console.log(data)
        $("#map").attr("src", data.message)
        console.log(status);


        for (var i = 0; i < 5; i++) {

            let current = new Date(data.daily[i].dt * 1000)
            let today = new Date

            let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

            // let adisory = new Date(data.alert.event);

            function getLocaltime() {
                return new Date().toLocaleTimeString();
            }

            console.log(getLocaltime());

            let html = `<div class="card" style="width: 16rem; margin-left: .5rem; border-radius: 5% 5% 5% 5%; ">
                                        <div class="container">
                                        <div class="card-header" >
                                             <h6 class="card-title" >${current.toLocaleDateString("en-US")}</h6>
                                        </div>
                                            <div class="card-body">                          
                                                <p class="card-text" style="text-align: center">${data.daily[i].temp.min}°F/${data.daily[i].temp.max}</p>
                                                <h6 class="card-subtitle mb-2 text-muted" style="text-align: center"> <img src="http://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png"></h6>  
                                                <p class="card-text" style="text-align: center">Description: ${data.daily[i].weather[0].description}</p>
                                                <hr>
                                                <p class="card-text">Humidity: ${data.daily[i].humidity}%</p>
                                                <hr>
                                                <p class="card-text">Wind: ${data.daily[i].wind_speed}</p>
                                                 <hr>
                                                <p class="card-text">Pressure: ${data.daily[i].pressure}</p>
                                           </div> 
                                       </div> 
                                  </div>`
            $('#weather').append(html)

        }
    })

// Map

mapboxgl.accessToken = my_mapbox_Token;

const coordinates = document.getElementById('coordinates');
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.50042679347106, 29.419082681633846],
    zoom: 12 // starting zoom
});

//Set marker options.

// const marker1 = new mapboxgl.Marker({
//     color: "blue",
//     draggable: true
// }).setLngLat([-98.50042679347106, 29.419082681633846])
//     .addTo(map);


// Draggable marker

const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    marker: {
        color: 'orange'
    },
    mapboxgl: mapboxgl
});

map.addControl(geocoder);

const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.50042679347106, 29.419082681633846])
    .addTo(map);

function onDragEnd() {
    const lngLat = marker.getLngLat();
    // coordinates.style.display = 'block';
    // coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
    // console.log(lngLat)

    $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lngLat.lat}&lon=${lngLat.lng}&appid=${my_weathermap_token}&units=imperial`)
        // $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${29.424349}&lon=${-98.491142}&appid=${my_weathermap_token}`)
        .done(function (data) {
            console.log(data)
            $("#map").attr("src", data.message)
            console.log(status);
            $("#weather").empty()


            for (var i = 0; i < 5; i++) {

                let current = new Date(data.daily[i].dt * 1000)
                let today = new Date

                let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

                function getLocaltime() {
                    return new Date().toLocaleTimeString();
                }

                console.log(getLocaltime());

                let html = `<div class="card col px-0" >                                  
                                        <div class="card-header" >
                                             <h6 class="card-title" >${current.toLocaleDateString("en-US")}</h6>
                                        </div>
                                        <div class="card-body">                          
                                            <p class="card-text" style="text-align: center">${data.daily[i].temp.min}°F/${data.daily[i].temp.max}</p>
                                            <h6 class="card-subtitle mb-2 text-muted" style="text-align: center"> <img src="http://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png"></h6>  
                                            <p class="card-text" style="text-align: center">Description: ${data.daily[i].weather[0].description}</p>
                                            <hr>
                                            <p class="card-text">Humidity: ${data.daily[i].humidity}%</p>
                                            <hr>
                                            <p class="card-text">Wind: ${data.daily[i].wind_speed}</p>
                                             <hr>
                                            <p class="card-text">Pressure: ${data.daily[i].pressure}</p>
                                        </div> 
                                  </div>`
                $('#weather').append(html)
            }
        })
}

marker.on('dragend', onDragEnd);


// Weather at coordinates when dragged






