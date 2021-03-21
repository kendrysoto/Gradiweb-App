import React from 'react';
import '../styles/CurrentWeather.scss';
import locationImg from '../images/locationImg.png';
import { useEffect, useState } from 'react';


const CurrentWeather = () => {

    const [location, setLocation] = useState([]);

    function currentWeatherLocation() {
        const url = "http://api.openweathermap.org/data/2.5/weather?q=París,fr&APPID=17ec00ff9a8ed40a886c94ed10088237"
        const http = new XMLHttpRequest();
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let datos = JSON.parse(this.responseText);
                setLocation(datos);
            }
        }
        http.open("GET", url, true);
        http.send();
    }

    useEffect(() => {
        currentWeatherLocation();
    }, [])


    return (
        <div>
            {location.weather && location.weather.map((loc) =>
                <div className="climateBox" key={loc.id}>
                    <div className="cityClimateOne">
                        <div className="climateCityIcon">
                            <img src={"http://openweathermap.org/img/wn/" + loc.icon + "@2x.png"}></img>
                        </div>
                        <div className="climateDegrees">
                            <h2>{location.main.temp}°c</h2>
                        </div>
                        <div className="climateCity">
                            <p className="city">{location.name}</p>
                            <p className="country">Francia</p>
                        </div>
                        <div className="prueba">
                            <div className="humidity">
                                <p>{location.main.humidity}%</p>
                            </div>
                            <div className="locations">
                                <p>west</p>
                            </div>
                            <div className="kilometres">
                                <p>82km/h</p>
                            </div>
                        </div>
                    </div>
                    <div className="cityClimateOne">
                        <div className="climateCityIcon">
                            <img src={"http://openweathermap.org/img/wn/" + loc.icon + "@2x.png"}></img>
                        </div>
                        <div className="climateDegrees">
                            <h2>{location.main.temp}°c</h2>
                        </div>
                        <div className="climateCity">
                            <p className="city">{location.name}</p>
                            <p className="country">Francia</p>
                        </div>
                        <div className="prueba">
                            <div className="humidity">
                                <p>{location.main.humidity}%</p>
                            </div>
                            <div className="locations">
                                <p>west</p>
                            </div>
                            <div className="kilometres">
                                <p>82km/h</p>
                            </div>
                        </div>
                    </div>
                    <div className="addLocations">
                        <button>add Locations</button><br></br>
                        <img src={locationImg}></img>
                    </div>
                </div>
            )}

        </div>
    );
}




export default CurrentWeather;