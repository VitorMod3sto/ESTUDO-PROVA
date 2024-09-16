const { default: axios } = require("axios");

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params:{
        language: "pt-BR"
    },
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjY3ZWEyOWUxYWJiMDA3NmRlZjYxMzQ2MTVhMWE2OCIsIm5iZiI6MTcyNjM1NTc0Ny43MTA2MjgsInN1YiI6IjY2ZDBmNjkzZjI4ZGJlYjNlNWE3Y2ZiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UACx4oohYzrcxNi4vSKP3wWOq_k7uBXrJcjPWjZlnnc'}
})

export default apiMovie