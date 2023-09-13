// import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import { API_KEY, TMDB_BASE_URL } from '../utils/constants';
// import axios from 'axios'
// const initialState = {
//     movies: [],
//     genresLoaded: false,
//     genres: [],
// }

// export const getGenres = createAsyncThunk("netflix/genres", async () => {
//     const { data: { genres } } = await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
//     // console.log(data);
//     return genres;
// })

// const createArrayFromRawData = (array, moviesArray, genres) => {
//     // console.log(array)
//     array.forEach((movie) => {
//         const movieGenres = [];
//         movie.genre_ids.forEach((genre) => {
//             const name = genres.find(({ id }) => id === genre);
//             if (name) movieGenres.push(name.name);

//         });
//         if (movie.backdrop_path) {
//             moviesArray.push({
//                 id: movie.id,
//                 name: movie?.original_name ? movie.original_name : movie.original_title,
//                 image: movie.backdrop_path,
//                 genres: movieGenres.slice(0, 3)
//             })
//         }
//     });
// }
// const getRawData = async (api, genres, paging) => {
//     const moviesArray = [];
//     const requests = [];

//     for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
//         requests.push(
//             axios.get(`${api}${paging ? `&page=${i}` : ""}`)
//         );
//     }

//     const responses = await Promise.all(requests);

//     responses.forEach(({ data: { results } }) => {
//         createArrayFromRawData(results, moviesArray, genres);
//         console.log("Response data:", results);
//     });
//     console.log("Final moviesArray:", moviesArray); 
//     return moviesArray;
// }



// export const fetchMovies = createAsyncThunk("netflix/trending", async ({ type }, thunkApi) => {
//     const { netflix: { genres } } = thunkApi.getState();

//     const data = await getRawData(`${TMDB_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`, genres, true);
//     console.log("Fetched data:", data);
//     return data;
// })

// const NetflixSlice = createSlice({
//     name: "Netflix",
//     initialState,
//     extraReducers: (builder) => {

//         builder.addCase(getGenres.fulfilled, (state, action) => {
//             state.genres = action.payload;
//             state.genresLoaded = true
//         });
//         builder.addCase(fetchMovies.fulfilled, (state, action) => {
//             state.movies = action.payload;
//         })
//     },
// });
// export const store = configureStore({
//     reducer: { netflix: NetflixSlice.reducer },
//     middleware: [thunk],
//   });