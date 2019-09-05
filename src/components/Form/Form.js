import React, { Fragment, useState, useEffect } from "react";
import ratioIsValid from "../../utils/regex.js";
import Ratings from "../Ratings/Ratings.js";

const Form = () => {
  const [ratio, setRatio] = useState("");
  const [ratioMsg, setRatioMsg] = useState(true);

  //Ratings states
  const [mouthwateringness, setMouthwateringness] = useState(5.0);
  const [aroma, setAroma] = useState(5.0);
  const [nummyness, setNummyness] = useState(5.0);
  const [gloriousness, setgloriousness] = useState(5.0);
  const [overall, setOverall] = useState(5.0);

  useEffect(() => {
    console.log("Mouthwateringness: ", mouthwateringness);
    console.log("Aroma: ", aroma);
    console.log("Nummyness: ", nummyness);
    console.log("Gloriousness: ", gloriousness);
    console.log("Overall: ", overall);
    setOverall((parseInt(mouthwateringness) + parseInt(aroma) + parseInt(nummyness) + parseInt(gloriousness))/4)
  }, [mouthwateringness, aroma, nummyness, gloriousness]);

  const ratingsValues = {
    mouthwateringness: {
      getValue: mouthwateringness,
      setValue: setMouthwateringness
    },
    aroma: {
        getValue: aroma,
        setValue: setAroma
      },
      nummyness: {
        getValue: nummyness,
        setValue: setNummyness
      },
      gloriousness: {
        getValue: gloriousness,
        setValue: setgloriousness
      },
      overall: {
        getValue: overall,
        setValue: setOverall
      }
  };

  return (
    <Fragment>
      <label htmlFor="timeOfPurchase">
        Time of purchase:
        <input
          type="datetime-local"
          name="timeOfPurchase"
          id="timeOfPurchase"
        />
      </label>
      <label htmlFor="timeOftimeOfConsumption">
        Time of consumption:
        <input
          type="datetime-local"
          name="timeOfConsumption"
          id="timeOfConsumption"
        />
      </label>
      <label htmlFor="source">
        Source:
        <input type="text" name="source" id="source" />
      </label>
      <label htmlFor="size">
        Size:
        <select name="size" id="size">
          <option value="small">Small</option>
          <option value="medium" selected>
            Medium
          </option>
          <option value="large">Large</option>
        </select>
      </label>
      <label htmlFor="colour">
        Main colour:
        <select name="colour" id="colour">
          <option value="green">Green</option>
          <option value="yellow" selected>
            Yellow
          </option>
          <option value="orange">Orange</option>
        </select>
      </label>
      <label htmlFor="fleshRatio">
        Flesh to stone ratio:
        <input
          type="text"
          name="fleshRatio"
          id="fleshRatio"
          value={ratio}
          onChange={e => setRatio(e.target.value)}
          onBlur={() => setRatioMsg(ratioIsValid(ratio))}
        />
      </label>
      <p>{ratioMsg ? "" : "Please enter a valid ratio"}</p>
      <Ratings ratings={ratingsValues}/>
    </Fragment>
  );
};

export default Form;
