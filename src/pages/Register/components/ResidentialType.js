import React from "react";
import styled from "styled-components";

const TypeSection = styled.div`
  width: 100%;
  margin-bottom: 40px;

  p {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

const SelectBox = styled.div`
  width: 100%;
  height: 40px;
  padding: 2px 10px;
  border: 1px solid #dddddd;
  border-radius: 5px;

  select {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }
`;

function ResidentialType() {
  const types = [
    {
      id: 1,
      type: "원룸",
    },
    {
      id: 2,
      type: "투룸",
    },
    {
      id: 3,
      type: "아파트",
    },
    {
      id: 4,
      type: "오피스텔",
    },
  ];

  return (
    <TypeSection>
      <p>종류</p>
      <SelectBox>
        <select>
          <option>매물 종류</option>
          {types.map((type) => (
            <option>{type.type}</option>
          ))}
        </select>
      </SelectBox>
    </TypeSection>
  );
}

export default ResidentialType;
