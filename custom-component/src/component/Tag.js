import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "./Toggle";

const TagsInput = styled.div`
  width: 800px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .tag-container {
    display: flex;
    flex-direction: row;
    width: 600px;
    border-radius: 10px;
    border: 1px solid #808080;

    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: 8px 0 0 0;

      .tag {
        width: auto;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        padding: 0 8px;
        font-size: 14px;
        list-style: none;
        border-radius: 6px;
        margin: 4px 8px 8px 4px;
        background: #4000c7;
        > .tag-close-icon {
          display: block;
          width: 16px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          font-size: 14px;
          margin-left: 8px;
          color: #4000c7;
          border-radius: 50%;
          background: #fff;
          cursor: pointer;
        }
      }
    }

    input {
      border: none;
      :focus {
        outline: transparent;
      }
    }

    &:focus-within {
      border: 1px solid #4000c7;
    }
  }
`;

const Tag = () => {
  const initialTags = ["CodeStates", "JJang"];

  const [tags, setTags] = useState(initialTags);

  //* tag 삭제 기능
  const deleteTags = (index) => {
    setTags(
      tags.filter((tag) => {
        return tag !== tags[index];
      })
    );
  };

  //* tag 추가 기능
  const addTags = (event) => {
    let word = event.target.value.trim();
    //단어가 빈값이거나 중복일 경우 실행되지 않음
    if (word && !tags.includes(word) && event.key === "Enter") {
      setTags([...tags, word]);
      event.target.value = "";
    }
  };

  return (
    <Container>
      <div className='title'>
        <h3>Tag</h3>
      </div>
      <TagsInput>
        <div className='tag-container'>
          <ul id='tags'>
            {tags.map((tag, index) => (
              <li key={index} className='tag'>
                <span className='tag-content'>{tag}</span>
                <span
                  className='tag-close-icon'
                  onClick={() => deleteTags(index)}
                >
                  x
                </span>
              </li>
            ))}
          </ul>
          <input
            className='tag-input'
            type='text'
            onKeyUp={(event) => {
              addTags(event);
            }}
            placeholder='Press enter to add tags'
          />
        </div>
      </TagsInput>
    </Container>
  );
};

export default Tag;
