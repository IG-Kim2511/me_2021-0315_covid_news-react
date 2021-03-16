// import
import React ,{useEffect,useState}from 'react'
import axios from "axios";


// file
import { My_api_key } from '../config'                            // 🦄2)  My_api_key 




const Api_contents = () => {
    
    useEffect(() => { 

        const options = {
          method: 'GET',
          url: 'https://covid-19-news.p.rapidapi.com/v1/covid',
          params: {q: 'covid', lang: 'en', media: 'True'},
          headers: {
            'x-rapidapi-key': My_api_key ,                           // 🦄2)  My_api_key 
            'x-rapidapi-host': 'covid-19-news.p.rapidapi.com'
          }
        };
        
        axios.request(options).then(function (response) {
            console.log(response.data);
              // console.log(response.data.countries_stat[0])       // 🦄4)  data

        }).catch(function (error) {
            console.error(error);
        });

       
                
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Api_contents
