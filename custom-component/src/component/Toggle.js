import React, { useState } from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 800px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  margin: 50px auto;
  position: relative;

  .inside-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 0px;

    .ToggleContainer {
      border-radius: 10px;
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
      position: relative;

      .toggle-container {
        width: 50px;
        height: 24px;
        border-radius: 30px;

        background-position: right;
        background: linear-gradient(to left, #8b8b8b 50%, #4000c7 50%) right;
        background-size: 200%;
        transition: 1s;
        &.toggle--checked {
          background-position: left;
          background: linear-gradient(to right, #4000c7 50%, #8b8b8b 50%) left;
          background-size: 200%;
          transition: 1s;
        }
      }

      .toggle-circle {
        position: absolute;
        top: 1px;
        left: 1px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: #ffffff;
        transition: 1s;
        &.toggle--checked {
          left: 27px;
          transition: 1s;
        }
      }
    }
  }
`;

const Desc = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;

const Toggle = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <Container>
      <div className='title'>
        <h3>Toggle</h3>
      </div>
      <div className='inside-container'>
        <div className='ToggleContainer' onClick={toggleHandler}>
          <div
            className={`toggle-container ${isOn ? "toggle--checked" : ""}`}
          />
          <div className={`toggle-circle ${isOn ? "toggle--checked" : ""}`} />
        </div>
        <Desc>
          <div>{isOn ? "Toggle Switch ON" : "Toggle Switch OFF"}</div>
        </Desc>
      </div>
    </Container>
  );
};

export default Toggle;
