// mapboxgl.accessToken = my_mapbox_Token;
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9',
//     zoom: 9,
//     center: ([-98.27442032070265, 29.600681797448452]) // Step (1) longitude latitude once coordinates are achieved create a marker by going to mapbox.com/marker
//
// });

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

            function getLocaltime(){
                return new Date().toLocaleTimeString();
            }
            console.log(getLocaltime());

            // let html = `<div class="card" style="width: 18rem; border: 1px solid black" >
            //                 <div class="jumbotron jumbotron-fluid"><h5 class="card-title" style="text-align: center">${current.toLocaleDateString("en-US")}</h5></div>
            //                 <hr>
            //                 <img class="card-img-top" height="150px" src="http://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png" alt="Card image cap">
            //                 <div class="card-body">
            //                     <h5 class="card-title">Today's Forecaste</h5>
            //                     <p class="card-text">°${data.daily[i].temp.day}</p>
            //                     <hr>
            //                     <p class="card-text">Humidity: ${data.daily[i].humidity}</p>
            //                     <hr>
            //                     <p class="card-text">${timezone}</p>
            //                     <hr>
            //                     <p class="card-text">${getLocaltime()}</p>
            //                 </div>
            //             </div>`


            let html = `<div class="card col" style="width: 10rem;">
                                        <div class="card-body" style="border: 2px solid black" >
                                        <div class="jumbotron jumbotron-fluid">
                                            <h5 class="card-title">${current.toLocaleDateString("en-US")}</h5>
                                        </div>
                                        <hr>
                                            <h6 class="card-subtitle mb-2 text-muted"> <img src="http://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png"></h6>
                                            <hr>
                                            <p class="card-text">°${data.daily[i].temp.day}</p>
                                            <hr>
                                            <p class="card-text">Humidity: ${data.daily[i].humidity}</p>
                                            <hr>
                                            <p class="card-text">${timezone}</p>
                                             <hr>
                                            <p class="card-text">${getLocaltime()}</p>
                                        </div>
                                  </div>`
            $('#weather').append(html)
        }
    })

// Search Bar
// let navbar = `<nav class="navbar navbar-light bg-light justify-content-between">
//   <form class="form-inline">
//     <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="search">
//     <button class="btn btn-outline-success my-2 my-sm-0" type="submit" id="btn">Search</button>
//   </form>
// </nav>`
// $('#tab').append(navbar)
//
// $('btn1').click(function (){
//     console.log('clicked')
//
// })

// Map

mapboxgl.accessToken = my_mapbox_Token;

const coordinates = document.getElementById('coordinates');
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.4916, 29.4252], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

// Geocoder

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
    .setLngLat([-98.4916, 29.4252])
    .addTo(map);

function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
}

marker.on('dragend', onDragEnd);












// Weather at coordinates when dragged

// $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lngLat.lng}&lon=${lngLat.lat}&appid=${my_weathermap_token}&units=imperial`)
//     // $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${29.424349}&lon=${-98.491142}&appid=${my_weathermap_token}`)
//     .done(function (data) {
//         console.log(data)
//         $("#map").attr("src", data.message)
//         console.log(status);
//
//
//         for (var i = 0; i < 5; i++) {
//
//             let current = new Date(data.daily[i].dt * 1000)
//             let today = new Date
//
//             let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
//
//             function getLocaltime(){
//                 return new Date().toLocaleTimeString();
//             }
//             console.log(getLocaltime());
//
//             let html = `<div class="card col" style="width: 10rem;">
//                                         <div class="card-body" style="border: 2px solid black" >
//                                         <div class="jumbotron jumbotron-fluid">
//                                             <h5 class="card-title">${current.toLocaleDateString("en-US")}</h5>
//                                         </div>
//                                         <hr>
//                                             <h6 class="card-subtitle mb-2 text-muted"> <img src="http://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png"></h6>
//                                             <hr>
//                                             <p class="card-text">°${data.daily[i].temp.day}</p>
//                                             <hr>
//                                             <p class="card-text">Humidity: ${data.daily[i].humidity}</p>
//                                             <hr>
//                                             <p class="card-text">${timezone}</p>
//                                              <hr>
//                                             <p class="card-text">${getLocaltime()}</p>
//                                         </div>
//                                   </div>`
//             $('#weather').append(html)
//         }
//     })



