import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Container } from './Toggle';

const InputViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
`;

const InputView = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 1rem;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 30px;
  margin-left: 1rem;
  border: 1px solid ;
`;

const InputEdit = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: inline-block;
  width: 150px;
  height: 30px;
`;

export const NewInput = ({ value, handleValueChange }) => {
  const inputRef = useRef(null);
  const [isEditMode, setEditMode] = useState(false); 
  const [newValue, setNewValue] = useState(value); 

  useEffect(() => {
    if (isEditMode) { 
      inputRef.current.focus();
    }
  }, [isEditMode]);

  useEffect(() => {
    setNewValue(value);
  }, [value]);

  const handleClick = () => {
    setEditMode(true);
  };

  const handleBlur = () => { 
    setEditMode(false);
    handleValueChange(newValue); 
  };

  const handleInputChange = (e) => {
    setNewValue(e.target.value);
  };

  return (
    <InputBox>
      {isEditMode ? (
        <InputEdit
          type='text'
          value={newValue}
          ref={inputRef}
          onBlur={handleBlur}
          onChange={handleInputChange}
        />
      ) : (
        <span onClick={handleClick}>{newValue}</span>
      )}
    </InputBox>
  );
}

const ClickToEdit = () => {
  const initialInput = {
    name: '홍길동',
    age: 18
  };
  
  const [name, setName] = useState(initialInput.name);
  const [age, setAge] = useState(initialInput.age);

  return (
    <Container>
      <div className="title">
        <h3>ClickToEdit</h3>
      </div>
      <div className='inside-container'>
        <InputViewContainer>
          <InputView>
            <label>이름</label>
            <NewInput value={name} handleValueChange={(newValue) => setName(newValue)} />
          </InputView>
          <InputView>
            <label>나이</label>
            <NewInput value={age} handleValueChange={(newValue) => setAge(newValue)} />
          </InputView>
          <InputView>
            <div className='view'>이름: {name}  나이:  {age}</div>
          </InputView>
        </InputViewContainer>
      </div>
    </Container>
  );
};

export default ClickToEdit;