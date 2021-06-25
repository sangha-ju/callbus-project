import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 650px;
  height: 200px;
  padding: 2px 5px;
  border: 1px solid #dddddd;
  border-radius: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ImgBox = styled.div`
  height: 95%;

  img {
    height: 100%;
  }
`;

const TextBox = styled.div`
  padding-left: 20px;
`;

const AddressBox = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`;

const PriceBox = styled.p`
  font-size: 17px;
`;

function PresentRoomCard({ id, img, address, price, cancled }) {
  return (
    <Container>
      <ImgBox>
        <img src={img} alt="img" />
      </ImgBox>
      <TextBox>
        <AddressBox>{address}</AddressBox>
        <PriceBox>{price} 원</PriceBox>
      </TextBox>
    </Container>
  );
}

export default PresentRoomCard;
