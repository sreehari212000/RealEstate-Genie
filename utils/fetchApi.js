import axios from "axios";

export const baseURL = 'https://bayut.p.rapidapi.com'


export const fetchAPI = async (url) =>{
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'a5fc93dcf3mshe49da2ce8d6dcc1p16c51cjsnc29b60f2fac9',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data
}