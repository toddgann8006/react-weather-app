import './App.css';
import React, { useState } from "react"
import CheckWeather from './checkweather';
import DisplayWeather from './displayweather';

function App() {
  const [zip, setZip] = useState("");
  const [weather, setWeather] = useState();
  const [background, setBackground] = useState("default.jpg")

  const getCoordinates = () => {
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
        setWeather(res.data)
      })
      .catch(error => console.error(`Error: ${error}`))
  }

  const resetWeather = () => {
    setWeather(undefined);
    setZip("")
    setBackground("default.jpg");
    console.log(weather);
  }

  if (!weather) {
    return <CheckWeather
      handleChange={setZip}
      handleSubmit={getCoordinates}
      background={background}
    />
  } return <DisplayWeather
    weather={weather.weather[0].description}
    temp={weather.main.temp}
    feelsLike={weather.main.feels_like}
    city={weather.name}
    background={background}
    handleReset={resetWeather}
  />
}

export default App;
