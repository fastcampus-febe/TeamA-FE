import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BiLike } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ReviewList = ({ data }) => {
  const createdDate = data.indate.substr(0, 10);
  const modifiedDate = data.indate.substr(0, 10);
  // const createdDate = data.createDate.substr(0, 10);
  // const modifiedDate = data.modifiedDate ? data.modifiedDate.substr(0, 10) : createdDate;
  const placeId = data.placeId;
  // const placeId = data.place_id;

  return (
    <ReviewLi>
      <Link to={'/place/' + placeId}>
        <h3>{data.place_title}</h3>
      </Link>
      <p>{data.review}</p>
      <DateContent>
        {createdDate} | {modifiedDate}
      </DateContent>
    </ReviewLi>
  );
};

const ReviewLi = styled.li`
  margin: 15px 5px;
  padding: 10px 5px 5px;
  border-bottom: 1px solid #eaeaea;
  min-height: 80px;
  h3 {
    margin-bottom: 5px;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 600;
    color: #333;
  }
  p {
    margin-top: 10px;
    color: #606060;
    font-size: 17px;
    display: inline-block;
  }
`;

const DateContent = styled.div`
  position: relative;
  display: inline-block;
  height: 20px;
  float: right;
  margin-top: 10px;
  color: #717171;
`;

export default ReviewList;
