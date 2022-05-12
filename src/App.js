import './App.css';
import React, { useState } from "react"
import axios from 'axios';
import CheckWeather from './checkweather';
import DisplayWeather from './displayweather';

function App() {
  const [zip, setZip] = useState("");
  const [weather, setweather] = useState()

  const getCoordinates = () => {
    console.log(zip)
    const zipCode = {
      zip: zip
    }

    return fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(zipCode)
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(`Error ${response.status}: ${response.statusText}`);
          error.response = response;
          throw error;
        }
      },
        error => { throw error; }
      )
      .then(response => response.json())
      .then((res) => {
        setweather(res.data)
        console.log(res.data.weather[0].main)
      })
      .catch(error => console.error(`Error: ${error}`))
  }

  if (!weather) {
    return <CheckWeather
      handleChange={setZip}
      handleSubmit={getCoordinates}
    />
  } return <DisplayWeather
    weather={weather.weather[0].main}
  />
}

export default App;
