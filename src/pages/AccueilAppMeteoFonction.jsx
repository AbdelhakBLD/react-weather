import React, { useState } from "react";
import FormulaireFonction from "../components/FormulaireFonction";
import CardFonction from "../components/CardFonction";

const AccueilAppMeteoFonction = () => {
  const [meteoRes, setMeteoRes] = useState();

  const handleChangeMeteoRes = (event) => {
    setMeteoRes(event);
  };
  return (
    <div>
      <h1>Ma super app Meteo !</h1>
      <FormulaireFonction changeMeteoRes={handleChangeMeteoRes} />
      <CardFonction res={meteoRes} />
    </div>
  );
};

export default AccueilAppMeteoFonction;
