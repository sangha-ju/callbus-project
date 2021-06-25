import React from "react";
import styled from "styled-components";
import RoomCard from "./RoomCard";
import { roomItems } from "../../../data/data";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 95%;
  height: 95%;
  background-color: #ffffff;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin-bottom: 30px;
`;

const CancleBtn = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #fbc531;
  cursor: pointer;
`;

const UnCancleBtn = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #fbc531;
  cursor: pointer;
`;

const ListBox = styled(Link)`
  text-decoration: none;
  color: black;
  margin-bottom: 20px;
`;

const RegisterRoomBtn = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #fbc531;
  cursor: pointer;

  &:hover {
    background-color: rgba(251, 197, 49, 0.8);
  }
`;

function RoomBox() {
  return (
    <Container>
      <BtnBox>
        <UnCancleBtn>올린 방</UnCancleBtn>
        <CancleBtn>내린 방</CancleBtn>
      </BtnBox>
      {roomItems.map((item) => {
        return (
          <ListBox key={item.pk} to={`/room/${item.pk}`}>
            <RoomCard
              id={item.pk}
              img={item.thumbnail}
              address={item.address}
              price={item.depositAmount}
              cancled={item.canceled}
            />
          </ListBox>
        );
      })}
      <Link to="/room/register">
        <RegisterRoomBtn>방 등록하기</RegisterRoomBtn>
      </Link>
    </Container>
  );
}

export default RoomBox;
