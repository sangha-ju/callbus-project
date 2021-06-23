import React from "react";
import styled from "styled-components";
import House from "../images/house.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f5f6fa;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 450px;
  height: 600px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 10px;
`;

const Img = styled.img`
  height: 150px;
  margin-bottom: 50px;
`;

const RoomLinkBtn = styled.button`
  width: 300px;
  height: 50px;
  margin-bottom: 20px;
  background-color: #fbc531;
  border: none;
  border-radius: 40px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: rgba(251, 197, 49, 0.8);
  }
`;

function RoutingBtn() {
  return (
    <Container>
      <ButtonBox>
        <Img src={House} alt="home" />
        <Link to="/room/register">
          <RoomLinkBtn>방 등록하기</RoomLinkBtn>
        </Link>
        <RoomLinkBtn>방 목록보기</RoomLinkBtn>
      </ButtonBox>
    </Container>
  );
}

export default RoutingBtn;
