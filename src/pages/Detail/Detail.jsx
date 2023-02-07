import PlaceDetail from 'components/Detail/PlaceDetail';
import React from 'react';
import styled from 'styled-components';

const Detail = () => {
  return (
    <DetailContainer>
      디테일
      <PlaceDetail></PlaceDetail>
    </DetailContainer>
  );
};

const DetailContainer = styled.div``;

export default Detail;
