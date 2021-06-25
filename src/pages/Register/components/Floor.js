import React from "react";
import styled from "styled-components";

const FloorSection = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 40px;
`;

const FloorBox = styled.div`
  width: 100%;

  p {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

const InputBox = styled.div`
  width: 97.5%;
  height: 40px;
  padding: 1px;
  border: 1px solid #dddddd;
  border-radius: 5px;

  select {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }
`;

function Floor() {
  const floorList = [
    {
      id: 1,
      type: "1~80층",
    },
    {
      id: 2,
      type: "옥탑",
    },
    {
      id: 3,
      type: "반지층",
    },
  ];

  const directionList = [
    {
      id: 1,
      type: "동",
    },
    {
      id: 2,
      type: "서",
    },
    {
      id: 3,
      type: "남",
    },
    {
      id: 4,
      type: "북",
    },
    {
      id: 5,
      type: "남동",
    },
    {
      id: 6,
      type: "남서",
    },
    {
      id: 7,
      type: "북서",
    },
    {
      id: 8,
      type: "북동",
    },
  ];

  return (
    <FloorSection>
      <FloorBox>
        <p>층수</p>
        <InputBox>
          <select>
            <option>층수를 선택 해 주세요</option>
            {floorList.map((floor) => (
              <option>{floor.type}</option>
            ))}
          </select>
        </InputBox>
      </FloorBox>
      <FloorBox>
        <p>방향</p>
        <InputBox>
          <select>
            <option>방향을 선택 해 주세요</option>
            {directionList.map((list) => (
              <option>{list.type}</option>
            ))}
          </select>
        </InputBox>
      </FloorBox>
    </FloorSection>
  );
}

export default Floor;
