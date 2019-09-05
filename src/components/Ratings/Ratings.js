import React, {useState, useEffect} from "react";
import * as S from "./Ratings.style";

const Ratings = props => {
  return (
    <fieldset>
      <legend>Ratings</legend>
      <S.Label htmlFor="mouthwateringness">
        Mouthwateringness
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
      </S.Label>
      <S.Label htmlFor="aroma">
        Aroma
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
      </S.Label>
      <S.Label htmlFor="nummyness">
        Nummyness
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
      </S.Label>
      <S.Label htmlFor="gloriousness">
        Gloriousness
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
      </S.Label>
      <S.Label htmlFor="overall">
        Overall
        <input
          type="range"
          name="overall"
          id="overall"
          min="0.0"
          max="10.0"
          value={props.ratings.overall.getValue}
          step="0.5"
          onChange={e => props.ratings.overall.setValue(e.target.value)}
        />
      </S.Label>
    </fieldset>
  );
};

export default Ratings;
