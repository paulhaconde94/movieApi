// const axios = require('axios');

// axios.get('/movies', (req, res) => {
//     const { query } = req.query;
//     const url = `https://api.themoviedb.org/3/search/movie?api_key=${YOUR_API_KEY}&query=${query}`;
  
//     axios.get(url)
//       .then(response => {
//         const movies = response.data.results;
//         res.json(movies);
//       })
//       .catch(error => {
//         console.log(error);
//         res.status(500).send('Error retrieving movies.');
//       });
//   });
  
