//import './weather-icons-master/weather-icons-master/css/weather-icons.min.css';
import React, { useState, useEffect } from 'react';
function Weather({ tempdata }) {
  const [weatherstate, setweatherstate] = useState("");

  const { temp, humidity, pressure, weathermood, name, speed, country } = tempdata;
  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case 'Clouds':
          setweatherstate("wi-day-cloudy")
          break;
        case "Haze":
          setweatherstate("wi-fog");
          break;
        case "Clear":
          setweatherstate("wi-day-sunny");
          break;
        case "Mist":
          setweatherstate("wi-dust");
          break;
        case "Rain":
          setweatherstate("wi-rain")
          break;
        case "Thunderstorm":
          setweatherstate("wi-thunderstorm")
          break;
        case "Fog":
          setweatherstate("wi-fog")
          break;
        case "Hail":
          setweatherstate("wi-hail")
          break;
        case "Sleet":
          setweatherstate("wi-sleet")
          break;
        case "Snow":
          setweatherstate("wi-snow")
          break;
        case "Sprinkle":
          setweatherstate("wi-sprinkle")
          break;
        case "Smoke":
          setweatherstate("wi-smoke")
          break;
        case "Lightning":
          setweatherstate("wi-lightning")
          break;
        case "Raindrop":
          setweatherstate("wi-raindrop")
          break;
        case "Lightning":
          setweatherstate("wi-lightning")
          break;
        case "Lightning":
          setweatherstate("wi-lightning")
          break;

        default:
          setweatherstate("wi-day-sunny");
          break;

      }
    }
  }, [weathermood])
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center mt-3">
              <i style={{ fontSize: "80px" }} className={`wi ${weatherstate}`}></i>
            </div>
          </div>
        </div>

        <div className="row mt-3  d-flex justify-content-center">
          <div style={{ height: "120px" }} className="col-4 col-sm-2
     bg-warning  pt-4 ps-3">
            <span className="display-2">{temp}°</span>
          </div>
          <div className="col-4 col-sm-2 pt-4  bg-warning ">
            <span className="fs-2 ">{weathermood}</span><br />
            <span className="fs-5">{name},{country}</span>
          </div>
          <div className="col-4  col-sm-2 bg-info pt-4">
            <span className="fs-5" >{new Date().toLocaleString()}
            </span> </div>
        </div>




        <div className="row d-flex justify-content-center ">
          <div className="col-6 p-3 bg-dark text-white" style={{ width: "586px" }}>
            <div className="d-flex justify-content-evenly">

              <div className="">
                <i style={{ fontSize: "25px" }} className="m-2 pt-2 wi wi-humidity"></i>
              </div>
              <div>
                <span className="ps-1">{humidity} </span><br />
                <span className="ps-1">humidity</span>
              </div>
              <div className="">
                <i style={{ fontSize: "25px" }} className="m-2 pt-2 wi wi-rain"></i>
              </div>
              <div>
                <span className="ps-1">{pressure}</span><br />
                <span className="ps-1">pressure</span>
              </div>
              <div className="">
                <i style={{ fontSize: "25px" }} className="m-2 pt-2 wi wi-strong-wind"></i>
              </div>
              <div>
                <span className="ps-1">{speed}</span><br />
                <span className="ps-1">speed</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default Weather;