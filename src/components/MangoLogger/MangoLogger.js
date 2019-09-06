import React from "react";
import Form from "../Form/Form"
import * as S from "./MangoLogger.style";

const MangoLogger = () => {
  return (
    <S.Main>
      <h1>Mango Metrics</h1>
      <h2>Rate | Submit | Share</h2>
      <Form/>
    </S.Main>
  );
};

export default MangoLogger;
