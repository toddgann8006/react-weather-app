import React from "react";

const DisplayWeather = ({ weather }) => {
    return (
        <div className="App">
            <p>
                The weather is {weather}
            </p>
        </div>
    )
}

export default DisplayWeather;