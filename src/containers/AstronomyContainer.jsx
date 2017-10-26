import React, { Component } from 'react';
import AstronomyCard from '../components/AstronomyCard.jsx'
import axios from 'axios'

class AstronomyContainer extends Component {

  constructor(){
    super() 
    this.state = {
      astronomy: []
    }
  }

  componentDidMount() {
    const API_KEY = 'NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo'
    const END_POINT = "https://api.nasa.gov/planetary/apod?api_key="
    
    axios.get( END_POINT + API_KEY)
      .then(response => {
        this.setState({
          astronomy: response.data
        })
      })
      .catch(error => {
        console.log(error, 'failed to fetch')
      })
 
  }
  


  render() {
    const {astronomy } = this.state;
    return (
      <div>
        <AstronomyCard data={astronomy} /> 
      </div>
    );
  }
}

export default AstronomyContainer;