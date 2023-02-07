import PlaceDetail from 'components/Detail/PlaceDetail';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import searchData from 'data/SearchData.json';
import { useLocation } from 'react-router-dom';

const Detail = () => {
  const [detail, setDetail] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getDetailData() {
      try {
        setDetail(searchData.items);
      } catch (error) {
        console.log(error);
      }
    }
    getDetailData();
  }, [detail]);

  return (
    <DetailContainer>
      <>
        {detail
          .filter((item) => item.id === location.pathname.split('/').slice(-1).join(''))
          .map((item) => {
            return <PlaceDetail data={item} key={item.id} />;
          })}
      </>
    </DetailContainer>
  );
};

const DetailContainer = styled.div``;

export default Detail;
