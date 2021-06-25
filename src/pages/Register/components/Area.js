import React from "react";
import styled from "styled-components";

const AreaSection = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 40px;
`;

const AreaBox = styled.div`
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

function Area() {
  return (
    <AreaSection>
      <AreaBox>
        <p>전용면적</p>
        <InputBox>
          <input />
          <label>평/m2</label>
        </InputBox>
      </AreaBox>
      <AreaBox>
        <p>애완동물 가능 유무</p>
        <InputBox>
          <select>
            <option>가능</option>
            <option>불가능</option>
          </select>
        </InputBox>
      </AreaBox>
    </AreaSection>
  );
}

export default Area;
