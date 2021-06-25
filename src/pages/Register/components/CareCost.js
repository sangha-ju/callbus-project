import React from "react";
import styled from "styled-components";

const CareCostSection = styled.div`
  width: 100%;
  margin-bottom: 40px;

  p {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

const CareCostBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const InputBox = styled.div`
  width: 49%;
  height: 40px;
  padding: 1px;
  border: 1px solid #dddddd;
  border-radius: 5px;

  input {
    width: 75%;
    height: 90%;
    font-size: 15px;
    border: none;
    outline: none;
  }

  label {
    font-size: 15px;
    margin: 5px;
  }

  select {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }
`;

function CareCost() {
  const careList = [
    {
      id: 1,
      name: "전기",
    },
    {
      id: 2,
      name: "가스",
    },
    {
      id: 3,
      name: "수도",
    },
    {
      id: 4,
      name: "인터넷",
    },
    {
      id: 5,
      name: "TV",
    },
  ];

  return (
    <CareCostSection>
      <p>관리비</p>
      <CareCostBox>
        <InputBox>
          <input />
          <label>만원/월</label>
        </InputBox>
        <InputBox>
          <select>
            {careList.map((list) => (
              <option>{list.name}</option>
            ))}
          </select>
        </InputBox>
      </CareCostBox>
    </CareCostSection>
  );
}

export default CareCost;
