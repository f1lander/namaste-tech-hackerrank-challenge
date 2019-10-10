const axios = require('axios');

const getMovieTitles = (subst) => {

    const baseUrl = 'https://jsonmock.hackerrank.com/api/movies/search/?';
    let titles = [];
    let requestCount = 1;

    const getTitles = async (page) => {

        try {
            const { data } = await axios.get(`${baseUrl}Title=${subst}&page=${page}`);
            const _titles = data.data.map(item => item.Title);          
            titles = [...titles, ..._titles];   
            // check if the total pages minus requestCount is greater than 0
            if (data.total_pages - requestCount > 0) {
                requestCount++;
                // call recursively if there 
                return getTitles(requestCount);
            }

            console.log(titles);

        } catch (error) {
            console.log(`An Error Ocurred ${error.msg}`)
        }

    }

    // call the async function getTitles 
    getTitles(requestCount);

}

getMovieTitles("spiderman");