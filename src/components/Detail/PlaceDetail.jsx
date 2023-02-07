import React from 'react';

const PlaceDetail = ({ data }) => {
  return (
    <>
      <img src={data.imgSrc} alt="detail img" />
      <h3>{data.title}</h3>
      <p>{data.adress}</p>
    </>
  );
};

export default PlaceDetail;
