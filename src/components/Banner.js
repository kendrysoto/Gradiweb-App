import React from 'react';
import '../styles/Banner.scss';
import Bogota from '../images/Bogota.jpg';
import vector from '../images/vector.png';
import { useEffect, useState } from 'react';


const Banner = () => {

    const [current, setCurrent] = useState([]);

    function currentWeather() {
        const url = "http://api.openweathermap.org/data/2.5/weather?q=Bogota,co&APPID=17ec00ff9a8ed40a886c94ed10088237"
        const http = new XMLHttpRequest();
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let datos = JSON.parse(this.responseText);
                setCurrent(datos);
            }
        }
        http.open("GET", url, true);
        http.send();
    }

    useEffect(() => {
        currentWeather();
    }, [])

    return (
        <div>
            {current.weather && current.weather.map((weat) =>
                <div key={weat.id}>
                    <div className="boxClimate" >
                        <div className="boxWeather">
                            <div className="iconWeather">
                                <img src={"http://openweathermap.org/img/wn/" + weat.icon + "@2x.png"} />
                            </div>
                            <p>{weat.main}</p>
                        </div>
                        <div className="boxDegrees">
                            <p>{current.main.temp}°c</p>
                        </div>
                    </div>
                    <div className="boxImgBanner">
                        <img src={Bogota} className="imgBanner" />
                        <img src={vector} className="posicionamiento" />
                        <p>{current.name}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Banner;