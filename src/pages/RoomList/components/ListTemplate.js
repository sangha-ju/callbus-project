import React from "react";
import styled from "styled-components";
import RoomBox from "./RoomBox";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f5f6fa;
`;

function ListTemplate() {
  return (
    <Container>
      <RoomBox />
    </Container>
  );
}

export default ListTemplate;
