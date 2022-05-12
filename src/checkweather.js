import React from "react";

const CheckWeather = ({ handleChange, handleSubmit, background }) => {
    return (
        <div className="App" style={{
            backgroundImage: `url(${require(`./images/${background}`)
                }`, height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <h1>
                Welcome to the Weather App!
            </h1>
            <p>
                Enter a zipcode to check the weather!
            </p>
            <input type="text" onChange={(event) => handleChange(event.target.value)} />
            <button onClick={() => handleSubmit()}>Get Coordinates</button>
        </div>
    )
}

export default CheckWeather;