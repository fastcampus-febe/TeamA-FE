import React from 'react';
import styled from 'styled-components';

const Input = ({ name, type, onChange, placeholder }) => {
  return <StyledInput name={name} type={type} onChange={onChange} placeholder={placeholder} />;
};

const StyledInput = styled.input`
  accent-color: ${({ theme }) => theme.colors.primary};
`;

export default Input;
