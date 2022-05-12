import './App.css';
import React, { useState } from "react"
import axios from 'axios';
import CheckWeather from './checkweather';
import DisplayWeather from './displayweather';

function App() {
  const [zip, setZip] = useState("");
  const [weather, setweather] = useState();
  const [background, setBackground] = useState("default.jpg")

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
        let weatherId = res.data.weather[0].id;

        if (weatherId <= 232) {
          setBackground("thunderstorms.jpg");
        } else if (weatherId >= 300 && weatherId <= 531) {
          setBackground("rain.jpg");
        } else if (weatherId >= 600 && weatherId <= 622) {
          setBackground("snow.jpg");
        } else if (weatherId === 800) {
          setBackground("sunny.jpg")
        } else if (weatherId >= 801 && weatherId <= 804) {
          setBackground("cloudy.jpg")
        }
        setweather(res.data)
        console.log(res.data.weather[0].main)
      })
      .catch(error => console.error(`Error: ${error}`))
  }

  if (!weather) {
    return <CheckWeather
      handleChange={setZip}
      handleSubmit={getCoordinates}
      background={background}
    />
  } return <DisplayWeather
    weather={weather.weather[0].main}
    background={background}
  />
}

export default App;
