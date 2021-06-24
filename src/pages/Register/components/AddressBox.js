import React from "react";
import styled from "styled-components";

const AdreesSection = styled.div`
  width: 100%;
  margin-bottom: 40px;

  p {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-bottom: 5px;
  padding: 2px 10px;
  border: 1px solid #dddddd;
  border-radius: 5px;

  input {
    width: 100%;
    height: 90%;
    font-size: 15px;
    border: none;
    outline: none;
  }

  label {
    width: 20px;
    height: 20px;
    margin: 5px;

    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

function AdressBox() {
  return (
    <AdreesSection>
      <p>주소</p>
      <InputBox>
        <input placeholder="건물주소 또는 건물명을 검색하세요." />
      </InputBox>
      <InputBox>
        <input placeholder="상세 주소(동/호수를 입력 해 주세요.)" />
      </InputBox>
    </AdreesSection>
  );
}

export default AdressBox;
