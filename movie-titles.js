var https = require("https");

const getMovieTitles = (movie) => {

    let titles = [];
    let requestCount = 1;

    const getTitles = (page) => {

        var req = https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${movie}&page=${page}`, function (res) {
                var chunks = [];

                res.on("data", function (chunk) {
                    chunks.push(chunk);
                });

                res.on("end", function () {
                    var body = Buffer.concat(chunks);
                    const {data, total_pages} = JSON.parse(body.toString());                    
                    const _titles = data.map(item => item.Title);
                    titles = [...titles, ..._titles];
                    // check if the total pages minus requestCount is greater than 0
                    if (total_pages - requestCount > 0) {
                        requestCount++;
                        // call recursively if there 
                        return getTitles(requestCount);
                    }

                    console.log(titles);
                });
            });


        req.end();

    }

    getTitles(requestCount);

}

getMovieTitles('spiderman');