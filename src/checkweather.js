import React from "react";

const CheckWeather = ({ handleChange, handleSubmit, background }) => {
    return (
        <div style={{
            backgroundImage: `url(${require(`./images/${background}`)
                }`, height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <div className="header">
                <h1>
                    Welcome to the Weather App!
                </h1>
                <h3>
                    Enter a zipcode to check the weather!
                </h3>
                <div className="input">
                    <input type="text" onChange={(event) => handleChange(event.target.value)} />
                    <button className="button-space" onClick={() => handleSubmit()}>Go</button>
                </div>
            </div>
        </div>
    )
}

export default CheckWeather;