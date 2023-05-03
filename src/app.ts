import express from 'express';
import axios from 'axios';


const app = express();
const port = 3000;
const API_KEY = 'api_key=122c4923364b06dcb3f571e1e7dd06a6';
const baseURL = 'https://api.themoviedb.org/3'

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});


app.get('/peliculas', async (req, res) => {
    let movies = {};
    try {
        const apiMovie = `${baseURL}/movie/popular?${API_KEY}&language=en-US`
        const response = await axios.get(apiMovie);
        //console.log('response: ', response.data);
        movies = response.data.results;
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(movies);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error retrieving movies.');  
    }
});

app.get('/peliculas/search', async (req, res) => {
    let movies = {};
    const movieQuery = req.query.title;
    try {
        const apiMovie = `${baseURL}/search/movie?${API_KEY}&language=en-US&page=1&include_adult=true&query=${movieQuery}`
        console.log(apiMovie);
        const response = await axios.get(apiMovie);
        console.log('response: ', response.data);
        movies = response.data.results;
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(movies);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error retrieving movies.');  
    }
});

app.get('/peliculas/:id', async (req, res) => {
    const movieId = req.params.id;
    let responseJSON = {};
    try {
        const apiMovie = `${baseURL}/movie/${movieId}?${API_KEY}`
        console.log(apiMovie);
        const response = await axios.get(apiMovie);
        res.setHeader('Content-Type', 'application/json');
        responseJSON = {
            foto: response.data.backdrop_path,
            titulo: response.data.original_title,
            sinopsis: response.data.overview ,
            fechaLanzamiento: response.data.release_date
        }
        res.status(200).json(responseJSON);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error retrieving movies.');  
    }
});

app.listen(port, '',  () => {
    console.log(`server is escuchando on ${port}`);
});