import React from "react";
import styled from "styled-components";
import RegisterForm from "./RegisterForm";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f5f6fa;
`;

function RoomRegister() {
  return (
    <Container>
      <RegisterForm />
    </Container>
  );
}

export default RoomRegister;
