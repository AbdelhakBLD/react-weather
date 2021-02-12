import React, { useState } from "react";
import MeteoService from "../services/MeteoService";

const FormulaireFonction = (props) => {
  const [inputVille, setInputVille] = useState("");

  const handleChangeInput = (event) => {
    setInputVille(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    MeteoService.getMeteo(inputVille).then((meteoRes) =>
      props.changeMeteoRes(meteoRes)
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Ville :
          <input type="text" value={inputVille} onChange={handleChangeInput} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default FormulaireFonction;
