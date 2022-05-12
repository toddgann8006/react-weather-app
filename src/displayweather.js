import React from "react";

const DisplayWeather = ({ weather, background }) => {
    return (
        <div className="App"
            style={{
                backgroundImage: `url(${require(`./images/${background}`)
                    }`, height: "100vh",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <h1>It is currently {weather}</h1>
        </div>
    )
}

export default DisplayWeather;