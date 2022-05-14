import React from "react";

const DisplayWeather = ({ weather, background, handleReset, city, temp, feelsLike }) => {

    function convertToF(celsius) {
        return Math.floor(celsius * 9 / 5 + 32)
    }

    return (
        <div className="App"
            style={{
                backgroundImage: `url(${require(`./images/${background}`)
                    }`, height: "100vh",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <div className="header">
                <h1>Currently in {city}</h1>
                <h3>{weather.toUpperCase()}</h3>
                <h3>Temperature: {convertToF(temp)}{'\u00b0'}</h3>
                <h3>Feels Like: {convertToF(feelsLike)}{'\u00b0'}</h3>
                <button onClick={() => handleReset()}>Home</button>
            </div>
        </div>
    )
}

export default DisplayWeather;