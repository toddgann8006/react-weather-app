import React from "react";

const CheckWeather = ({ handleChange, handleSubmit }) => {
    return (
        <div className="App">
            <p>
                Enter a zipcode to check the weather!
            </p>
            <input type="text" onChange={(event) => handleChange(event.target.value)} />
            <button onClick={() => handleSubmit()}>Get Coordinates</button>
        </div>
    )
}

export default CheckWeather;