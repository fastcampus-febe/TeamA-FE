import styled from 'styled-components';

export const PageContent = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

export const Title = styled.h2`
  position: relative;
  padding-bottom: 20px;
  border-bottom: 1px dashed #dadada;
  font-size: 25px;
  line-height: 1.3;
  font-weight: 700;
  margin-bottom: 25px;
  padding-left: 12px;
  &::before {
    content: '';
    width: 4px;
    height: 23px;
    border-radius: 6px;
    background-color: #ff385c;
    position: absolute;
    left: 0;
    top: 27%;
    transform: translateY(-50%);
  }
`;
