import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "./Toggle";

const initialOptions = [
  "rustic",
  "antique",
  "vintage",
  "refurbished",
  "중고A급",
  "중고B급",
  "중고C급",
];

const boxShadow = "0 4px 6px rgb(32 33 36 / 28%)";
const InputContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid rgb(223, 225, 229);
  border-radius: 1rem;
  z-index: 3;
  box-shadow: 0;
  margin-top: 80px;

  &:focus-within {
    box-shadow: ${boxShadow};
  }

  input {
    flex: 1 0 0;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    font-size: 16px;
  }

  div.delete-button {
    cursor: pointer;
  }
`;

const DropDownContainer = styled.ul`
  list-style-type: none;
  margin-top: -1px;
  padding: 0.5rem 0;
  border-radius: 0 0 1rem 1rem;
  box-shadow: ${boxShadow};

  li:hover {
    background-color: lightgray;
  }

  li {
    padding: 0 1rem;
  }
`;

export const DropDown = ({ options, handleOptionClick }) => {
  return (
    <DropDownContainer>
      {options.map((option, index) => {
        return (
          <li key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </li>
        );
      })}
    </DropDownContainer>
  );
};

const AutoComplete = () => {
  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(initialOptions);

  useEffect(() => {
    //초기화
    if (inputValue === "") {
      setHasText(false);
      setOptions([]);
    }

    if (inputValue !== "") {
      setOptions(
        initialOptions.filter((el) => {
          return el.includes(inputValue);
        })
      );
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setHasText(true);
  };

  const handleOptionClick = (clickedOption) => {
    setInputValue(clickedOption);
  };

  const handleDeleteButtonClick = (event) => {
    setInputValue("");
  };

  return (
    <Container>
      <div className='title'>
        <h3>AutoComplete</h3>
      </div>
      <InputContainer>
        <input
          type='text'
          value={inputValue}
          defaultValue={inputValue}
          onChange={handleInputChange}
          onKeyUp={handleInputChange}
        ></input>
        <div className='delete-button' onClick={handleDeleteButtonClick}>
          x
        </div>
      </InputContainer>
      {hasText && (
        <DropDown options={options} handleOptionClick={handleOptionClick} />
      )}
    </Container>
  );
};

export default AutoComplete;
