import React from "react";
import styled from "styled-components";

const FormBox = styled.div`
  width: 600px;
  height: 800px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 10px;
`;

const Form = styled.form``;

function RegisterForm() {
  return (
    <FormBox>
      <Form></Form>
    </FormBox>
  );
}

export default RegisterForm;
