import {SEARCH_COUNTRY, FETCH_COUNTRY} from './types';
import axios from 'axios';

export const searchCountry = country => dispatch =>{
    dispatch({
        type: SEARCH_COUNTRY,
        payload: country
    })
}

export const fetchCountry = country => dispatch => {
    axios({
        "method":"GET",
        "url":"https://covid-19-data.p.rapidapi.com/country",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"covid-19-data.p.rapidapi.com",
        "x-rapidapi-key":"65c1dd6d07mshe43d8e3974a5dbbp1f5482jsnccfd9db82107",
        "useQueryString":true
        },"params":{
        "format":"json",
        "name":`${country}`
        }
    })
    .then(response => 
        dispatch({
        type: FETCH_COUNTRY,
        payload: response.data
    })
    ) 
    .catch((error)=>{
        console.log(error)
      })
    }
