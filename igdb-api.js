const fetch = require("node-fetch");

fetch ("https://api.igdb.com/v4/games", {
    method: "Post",

    headers: {
        "Client-ID": "379tz2gdlhfyqk57sonamv06694h5y",
        "Authorization": "Bearer 7l3k6gv92xm190yi1e484tlcstmlce"
    },

    body: "fields *;"
})
.then(response => response.json())
.then(json => console.log(json));