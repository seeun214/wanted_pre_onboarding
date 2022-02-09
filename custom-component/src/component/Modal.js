import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from './Toggle';

const ModalBack = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 400px;
  height: 120px;
  border-radius: 1rem;
  position: relative;
  >.close-btn{
    position: absolute;
    top:2px;
    right:190px;
    cursor: pointer;
  }
`;

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const openModalHandler = (event) => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <div className="title">
        <h3>Modal</h3>
      </div>
      <div className='inside-container'>
        <ModalBtn onClick={openModalHandler}>
          {isOpen ? 'Opened' : 'Open Modal'} 
        </ModalBtn>
        {isOpen ? <ModalBack onClick={openModalHandler}>
                    <ModalView onClick={(event) => {event.stopPropagation()}}>
                      <div className="close-btn" onClick={openModalHandler}>x</div>
                      <div>HELLO CODESTATES!</div>
                    </ModalView>
                  </ModalBack> : null}
      </div>
    </Container>
  );
};

export default Modal;