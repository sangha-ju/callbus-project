import React from "react";
import styled from "styled-components";
import AddressBox from "./AddressBox";
import PriceBox from "./PriceBox";
import ResidentialType from "./ResidentialType";

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
        <AddressBox />
        <ResidentialType />
        <PriceBox />
      </Form>
    </FormBox>
  );
}

export default RegisterForm;
