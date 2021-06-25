import React from "react";
import styled from "styled-components";

const PriceSection = styled.div`
  width: 100%;
  margin-bottom: 40px;

  p {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

const PriceTypeBox = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 5px;
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

const CostBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CostInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 49%;
  height: 40px;
  padding: 1px;
  border: 1px solid #dddddd;
  border-radius: 5px;

  input {
    width: 75%;
    height: 90%;
    padding: 1px;
    font-size: 15px;
    border: none;
    outline: none;
  }

  label {
    font-size: 15px;
    margin: 0 3px 0 3px;
  }
`;

function PriceBox() {
  const priceType = [
    {
      id: 1,
      price: "월세",
    },
    {
      id: 2,
      price: "전세",
    },
    {
      id: 3,
      price: "매매",
    },
  ];

  return (
    <PriceSection>
      <p>가격</p>
      <PriceTypeBox>
        <select>
          <option>옵션을 선택 해 주세요.</option>
          {priceType.map((type) => (
            <option>{type.price}</option>
          ))}
        </select>
      </PriceTypeBox>
      <CostBox>
        <CostInput>
          <input placeholder=" 보증금" />
          <label>만원</label>
        </CostInput>
        <CostInput>
          <input placeholder=" 임대료" />
          <label>만원</label>
        </CostInput>
      </CostBox>
    </PriceSection>
  );
}

export default PriceBox;
