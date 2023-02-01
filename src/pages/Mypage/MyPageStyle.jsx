import styled from 'styled-components';

export const PageContent = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 25px;
`;

export const Title = styled.h2`
  position: relative;
  border-bottom: 1px dashed #dadada;
  font-size: 23px;
  line-height: 1.3;
  font-weight: 700;
  margin-bottom: 30px;
  padding: 10px 50px 15px 20px;
  &::before {
    content: '';
    width: 4px;
    height: 23px;
    border-radius: 6px;
    background-color: #ff385c;
    margin-left: 10px;
    position: absolute;
    left: 0;
    top: 40%;
    transform: translateY(-50%);
  }
`;
