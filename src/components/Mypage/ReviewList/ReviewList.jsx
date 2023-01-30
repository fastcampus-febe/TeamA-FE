import React from 'react';
import styled from 'styled-components';
import { BiLike } from 'react-icons/bi';

const ReviewList = ({ data }) => {
  const indate = data.indate.substr(0, 10);
  return (
    <ReviewLi>
      <h3>{data.place_title}</h3>
      <GoodContent>
        <BiLike size="17" />
        <span>
          {data.good} | {indate}
        </span>
      </GoodContent>
      <p>{data.review}</p>
    </ReviewLi>
  );
};

const ReviewLi = styled.li`
  margin: 15px 5px;
  padding: 10px 5px 5px;
  border-bottom: 1px solid #eaeaea;
  min-height: 110px;
  h3 {
    margin-bottom: 5px;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 600;
  }
  p {
    margin-top: 10px;
    color: #606060;
    font-size: 17px;
  }
`;

const GoodContent = styled.div`
  position: relative;
  display: table;
  height: 20px;
  svg {
    color: #ff385c;
    position: absolute;
    left: 0;
    top: 0;
  }
  span {
    padding-left: 20px;
    color: #606060;
    display: table-cell;
    vertical-align: middle;
  }
`;

export default ReviewList;
