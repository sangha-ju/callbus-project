import React from "react";
import styled from "styled-components";
import Address from "./Address";
import Area from "./Area";
import CareCost from "./CareCost";
import Floor from "./Floor";
import Price from "./Price";
import ResidentialType from "./ResidentialType";
import SubmitBtn from "./SubmitBtn";

const FormBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  padding: 20px 0 20px 0;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 10px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 100%;
`;

function RegisterForm() {
  return (
    <FormBox>
      <Form>
        <Address />
        <ResidentialType />
        <Price />
        <CareCost />
        <Floor />
        <Area />
        <SubmitBtn />
      </Form>
    </FormBox>
  );
}

export default RegisterForm;
