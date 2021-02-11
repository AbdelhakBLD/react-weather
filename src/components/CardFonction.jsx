import React, { useEffect, useState, Fragment } from "react";
import MeteoService from "../services/MeteoService.js";

const CardFonction = () => {
  const [meteo, setMeteo] = useState([]);

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = () => {
    MeteoService.getMeteo().then((meteos) => {
      setMeteo(meteos);
    });
  };

  return (
    <Fragment>
      {console.log("test : ", meteo.main.temp)}
      <label>
        Ciel :<p>{meteo.weather[0].description}</p>
      </label>
      <label>
        Température :<p>{meteo.main.temp}</p>
      </label>
      <label>
        Ressenti :<p>{meteo.main.feels_like}</p>
      </label>
      <label>
        Min :<p>{meteo.main.temp_min}</p>
      </label>
      <label>
        Max :<p>{meteo.main.temp_max}</p>
      </label>
      <label>
        Humidité :<p>{meteo.main.humidity}</p>
      </label>
      <label>
        Pression:
        <p>{meteo.main.pressure}</p>
      </label>
    </Fragment>
  );
};

export default CardFonction;
