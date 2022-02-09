import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from './Toggle';

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;
  height: 50px;

  .tab {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    cursor: pointer;
  }

  .focused {
    background-color: #4000c7;
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    transition: 1s;
  }

  & div.tab-view {
    text-align: center;
  }
`;

const TapView = styled.div`
  text-align: center;
`;

const Tab = () => {
  const tabs = [
    { name: 'Tab1', content: 'Tab menu ONE' },
    { name: 'Tab2', content: 'Tab menu TWO' },
    { name: 'Tab3', content: 'Tab menu THREE' },
  ];
  const [focusedTab, setFocusedTab] = useState(0)

  const selectTabHandler = (index) => {
    setFocusedTab(index);
  };

  return (
    <Container>
      <div className="title">
        <h3>Tab</h3>
      </div>
      <TabMenu>
        {tabs.map((tab, index) => {
          return <li key={index} 
                    className={`${index === focusedTab ? 'tab focused' : 'tab'}`}
                    onClick={() => selectTabHandler(index)}>{tab.name}</li>
        })}
      </TabMenu>
      <TapView>
        <p>{tabs[focusedTab].content}</p>
      </TapView>
    </Container>
  );
};

export default Tab;