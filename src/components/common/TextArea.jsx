import React from 'react';
import styled from 'styled-components';

const TextArea = ({ width, height, placeholder, disabled }) => {
  return (
    <StyledTextArea width={width} height={height} placeholder={placeholder} disabled={disabled} />
  );
};

export default TextArea;

const StyledTextArea = styled.textarea`
  border: 1px solid #dddddd;
  border-radius: 6px;
  padding: 1rem;
  display: flex;
  flex-grow: 1;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  outline: none;
  resize: none;
  font-family: 'Cereal', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 1.4;
`;
