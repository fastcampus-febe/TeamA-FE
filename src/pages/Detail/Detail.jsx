import PlaceDetail from 'components/Detail/PlaceDetail';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { getPlaceDetail } from 'api/detail';
import Loading from 'components/common/Loading';

const Detail = () => {
  const [detail, setDetail] = useState([]);
  const placeId = useLocation().pathname.split('/')[2];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDetailData() {
      try {
        const data = await getPlaceDetail(placeId);
        setDetail(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getDetailData();
  }, []);

  return !loading ? (
    <DetailContainer>
      <PlaceDetail data={detail}></PlaceDetail>
    </DetailContainer>
  ) : (
    <section>
      <Loading />
    </section>
  );
};

const DetailContainer = styled.section`
  margin: 100px;
`;

export default Detail;
