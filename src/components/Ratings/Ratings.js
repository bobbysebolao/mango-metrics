import React, { useState, useEffect } from "react";
import * as S from "./Ratings.style";

const Ratings = props => {
  return (
    <fieldset>
      <legend>Rate it</legend>
      <S.Label htmlFor="mouthwateringness">Mouthwateringness</S.Label>
      <input
        type="range"
        name="mouthwateringness"
        id="mouthwateringness"
        min="0.0"
        max="10.0"
        value={props.ratings.mouthwateringness.getValue}
        step="0.5"
        onChange={e => props.ratings.mouthwateringness.setValue(e.target.value)}
      />
      <S.Label htmlFor="aroma">Aroma</S.Label>
      <input
        type="range"
        name="aroma"
        id="aroma"
        min="0.0"
        max="10.0"
        value={props.ratings.aroma.getValue}
        step="0.5"
        onChange={e => props.ratings.aroma.setValue(e.target.value)}
      />
      <S.Label htmlFor="nummyness">Nummyness</S.Label>
      <input
        type="range"
        name="nummyness"
        id="nummyness"
        min="0.0"
        max="10.0"
        value={props.ratings.nummyness.getValue}
        step="0.5"
        onChange={e => props.ratings.nummyness.setValue(e.target.value)}
      />
      <S.Label htmlFor="gloriousness">Gloriousness</S.Label>
      <input
        type="range"
        name="gloriousness"
        id="gloriousness"
        min="0.0"
        max="10.0"
        value={props.ratings.gloriousness.getValue}
        step="0.5"
        onChange={e => props.ratings.gloriousness.setValue(e.target.value)}
      />
      <p>Overall: {props.ratings.overall.getValue}</p>
    </fieldset>
  );
};

export default Ratings;
