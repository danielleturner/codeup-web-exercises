console.log("----------------")
console.log("Restful API Requests")
console.log("-----------------")

// request we will use most get post and delete
// Json readable by humans and machine so it's widely used


// fetch get request

//headers:
//content-type: application/json
// fetch("api/url", {
//     content-type: 'application/json' // this confirms that the api used is json
// })
// Method type - what kind of action do you want to take with the api
// get/post/put/delete/ patch

// get - getting information
// --what required for get request [api token]
// --what result will look like?
// --response => response.json() {id:4 'ussername' laura"}

// post - adding information/ pushing data into the api (writing)
// ----what's required when making a post request?-----
// [url, + endpoint what were adding,]


// put - changes something that's already on the api (editing)
// what should be sent with a put request?
// identfy the data youre changing
// what youre changing it to json format
// -----what will response look like
// confirmaiton is not guaranteed response object --> res => res.json() -- res.status || res.ok
//err if err
// how can we confirm if ti was posted successfull?
// we can either make a second get request after the post request was mae
// we can look into the data/api itself --> if you have access to it
// trusting the statue of the response

// delete - delete a specific data from the api
// what's requered for delete?
// --id of what your deleteing


/**example
{
    'stars': 4,
    'name': 'mcdonalds',
    'location': 'everywhere',
    'id': 001
}

*/

// access key (headers)

// request body
// data to be added

/**Example 1*/

// POST Request --- below how to make post request

// url
// content being added - json (request body)
// token - possibly
// endpoint - possibly
// method type - specify that we're making a POST request

const url = 'https://glitch.com/edit/#!/sour-gorgeous-opportunity?path=db.json%3A1%3A0' // url
const reqBody = { // request body
    "title": "GoodFellas",
    "director": "Martin Scorsese",
    "year": "1990",
    "genre": "MOB",
    "actors": "EVERYONE",
    "plot": "TRUE CRIME",
    "rating": "5",
    "poster": "https://m.media-amazon.com/images/M/MV5BNGMwNGI0NzAtY2U1Zi00MTI3LTk2NWQtMTU0ZmQ3OGZmMjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY1200_CR86,0,630,1200_AL_.jpg",
    "id": 255
}
const options =
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody) //json.stringify()inside pass reqBody
    };

fetch(url, options)
    .then(res => res.json())
    .then((jsonObj) => console.log(jsonObj))

console.log(jsonObj)