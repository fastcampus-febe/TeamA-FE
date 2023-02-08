import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BiLike } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { getPlaceDetail } from 'api/detail';

const ReviewList = ({ data }) => {
  const [placeTitle, setPlaceTitle] = useState('');
  const createdDate = data.createdDate.slice(0, 10);
  const modifiedDate = data.modifiedDate ? data.modifiedDate.slice(0, 10) : createdDate;
  const placeId = data.place_id;

  useEffect(() => {
    async function getData() {
      try {
        const data = await getPlaceDetail(placeId);
        setPlaceTitle(data.title);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <ReviewLi>
      <Link to={'/place/' + placeId}>
        <h3>{placeTitle}</h3>
      </Link>
      <p>{data.content}</p>
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
