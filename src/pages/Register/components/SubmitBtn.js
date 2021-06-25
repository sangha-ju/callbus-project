import React from "react";
import styled from "styled-components";

const SubBtn = styled.button`
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #fbc531;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: rgba(251, 197, 49, 0.8);
  }
`;

function SubmitBtn() {
  return (
    <>
      <SubBtn>등록하기</SubBtn>
    </>
  );
}

export default SubmitBtn;
