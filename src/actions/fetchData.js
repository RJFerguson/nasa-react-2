import axios from 'axios'

export default function fetchData() {
  const API_KEY = '9ih9XeJIinpLf44yZzlx92UQicK6Us9aBQneSPgu'
  const END_POINT = "https://api.nasa.gov/planetary/apod?api_key="
  const request = axios.get(END_POINT+API_KEY) 

  return {
    type: "FETCH_DATA",
    payload: request 
  }

}