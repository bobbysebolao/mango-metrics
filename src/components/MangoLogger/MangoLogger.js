import React from "react";
import Form from "../Form/Form"
import * as S from "./MangoLogger.style";

const MangoLogger = () => {
  return (
    <S.Main>
      <h1>Record mangos</h1>
      <Form/>
    </S.Main>
  );
};

export default MangoLogger;
