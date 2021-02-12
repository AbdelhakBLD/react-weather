import React, { Fragment } from "react";

const CardFonction = (props) => {
  return (
    <Fragment>
      {props.res === undefined ? (
        <div>😡 Entrer une ville svp 🤬!!!!!!!!!!!!!! </div>
      ) : (
        <div>
          <label>
            Ciel :<p>{props.res.weather[0].description}</p>
          </label>
          <label>
            Température :<p>{props.res.main.temp}</p>
          </label>
          <label>
            Ressenti :<p>{props.res.main.feels_like}</p>
          </label>
          <label>
            Min :<p>{props.res.main.temp_min}</p>
          </label>
          <label>
            Max :<p>{props.res.main.temp_max}</p>
          </label>
          <label>
            Humidité :<p>{props.res.main.humidity}</p>
          </label>
          <label>
            Pression:
            <p>{props.res.main.pressure}</p>
          </label>
        </div>
      )}
    </Fragment>
  );
};

export default CardFonction;
