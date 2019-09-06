import React, { Fragment, useState, useEffect } from "react";
import ratioIsValid from "../../utils/regex.js";
import Ratings from "../Ratings/Ratings.js";
import * as S from "./Form.style";

const Form = () => {
  const [date, setDate] = useState("");
  const [source, setSource] = useState("");
  const [size, setSize] = useState("medium");
  const [mainColour, setMainColour] = useState("yellow");
  const [ratio, setRatio] = useState("");
  const [ratioMsg, setRatioMsg] = useState(true);

  //Ratings states
  const [mouthwateringness, setMouthwateringness] = useState(5.0);
  const [aroma, setAroma] = useState(5.0);
  const [nummyness, setNummyness] = useState(5.0);
  const [gloriousness, setgloriousness] = useState(5.0);
  const [overall, setOverall] = useState(5.0);

  useEffect(() => {
    console.log("New source: ", source)
  }, [source])

  useEffect(() => {
    setOverall(
      (parseInt(mouthwateringness) +
        parseInt(aroma) +
        parseInt(nummyness) +
        parseInt(gloriousness)) /
        4
    );
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

  const handleSubmit = event => {
    const payload = {
      name: "Steve Nash",
      task: "assist",
      time_of_purchase: "Fri 6 Sep",
      time_of_consumption: date,
      mango_rating: {
        mouthwateringness: mouthwateringness,
        aroma: aroma,
        nummyness: nummyness,
        gloriousness: gloriousness,
        overall: overall
      },
      metadata: {
        source: "A cool little shop!",
        size: "large",
        main_colour: "orange",
        flesh_to_stone_ratio: "2:1"
      },
      comment: "An all-around stellar mango."
    }
    fetch("https://mango-metrics-api.azurewebsites.net/api/postMangos", {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain, */*',
      },
      redirect: 'follow',
      referrer: 'no-referrer', 
      body: JSON.stringify(payload)
    })
    .then(data => data.json()
    .then(response => console.log("The Azure API POST response message: ", response.body)))

    // fetch("https://mango-metrics-api.azurewebsites.net/api/mangos")
    // .then(response => console.log("Here is database", response))

    event.preventDefault();
  };

  return (
    <Fragment>
      <form onSubmit={e => handleSubmit(e)}>
      <S.Label htmlFor="dateEaten">
        Date eaten:
      </S.Label>
      <input
          type="date"
          name="dateEaten"
          id="dateEaten"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />
      <S.Label htmlFor="source">
        Source:
      </S.Label>
      <input type="text" name="source" id="source" value={source} onChange={e => setSource(e.target.value)} required />
      <S.Label htmlFor="size">
        Size:
      </S.Label>
      <select name="size" id="size" value={size} onChange={e => setSize(e.target.value)}>
          <option value="small">Small</option>
          <option value="medium" selected>
            Medium
          </option>
          <option value="large">Large</option>
        </select>
      <S.Label htmlFor="colour">
        Main colour:
      </S.Label>
      <select name="colour" id="colour" value={mainColour} onChange={e => setMainColour(e.target.value)}>
          <option value="green">Green</option>
          <option value="yellow" selected>
            Yellow
          </option>
          <option value="orange">Orange</option>
        </select>
      <S.Label htmlFor="fleshRatio">
        Flesh to stone ratio:
      </S.Label>
      <input
          type="text"
          name="fleshRatio"
          id="fleshRatio"
          value={ratio}
          onChange={e => setRatio(e.target.value)}
          onBlur={() => setRatioMsg(ratioIsValid(ratio))}
          required
        />
      <p>{ratioMsg ? "" : "Please enter a valid ratio"}</p>
      <Ratings ratings={ratingsValues} />
      <button>Submit</button>
      </form>
    </Fragment>
  );
};

export default Form;
