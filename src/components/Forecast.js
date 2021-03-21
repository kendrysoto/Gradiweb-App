import React from 'react';
import '../styles/Forecast.scss';
import { useEffect, useState } from 'react';


const Forecast = () => {
    const [forecast, setForecast] = useState([]);
    const [dayList, setDayList] = useState(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])

    function setWeatherForecast() {
        const url = "http://api.openweathermap.org/data/2.5/forecast?q=Bogota,co&appid=c153e71e2b1d86c0170f7ae274c2a2a6"
        const http = new XMLHttpRequest();
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let datos = JSON.parse(this.responseText);
                setForecast(datos);
            }
        }
        http.open("GET", url, true);
        http.send();
    }

    useEffect(() => {
        setWeatherForecast();
    }, [])

    function filterData(list) {
        let days = []
        let newList = []
        list && list.forEach(fr => {
            let day = new Date(fr.dt_txt).getDate()
            if (!days.includes(day)) {
                days.push(day)
                newList.push(fr)
            }
        });
        return newList.filter((fr, idx) => idx < 3)
    }

    return (
        <div>
            <div className="boxForecast">
                <p className="daysForecast"><strong>3 Days</strong> Forecast</p>
                {filterData(forecast.list).map((fore, idx) => {
                    return (<div key={idx} className="forecastOne">
                        <div className="climateOne">
                            <img src={"http://openweathermap.org/img/wn/" + fore.weather[0].icon + "@2x.png"} className="climateIcon"></img>
                            <div className="boxClimateDay">
                                <strong><p className="climateDay">{dayList[new Date(fore.dt_txt).getDay()]}</p></strong>
                                <p className="weather">rain</p>
                            </div>
                        </div>
                        <div className={idx === 0 ? "boxDegreesOne" : "boxDegreesTwo"}>
                            <strong><p className="degreesOne"> 32° / 23°</p></strong>
                        </div>
                    </div>)
                }
                )}
            </div>

        </div>

    )
}

export default Forecast;