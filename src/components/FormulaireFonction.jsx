import React, { useState } from "react";

const FormulaireFonction = () => {
  const [input, setInput] = useState("");

  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nom : 
          <input type="text" value={input} onChange={handleChangeInput} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default FormulaireFonction;
