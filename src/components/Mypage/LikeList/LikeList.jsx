import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import { Modal, ModalOkCancel } from 'components/common/Modal';
import { Link } from 'react-router-dom';
import { postLikeCancel } from 'api/mypage';
import { getItem } from 'utils/storage';

const LikeList = ({ i, data }) => {
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState('');

  const imgSrc = data.placeImg;
  const placeId = data.placeId;

  async function LikeCancel() {
    try {
      // 찜 취소
      await postLikeCancel(placeId);
    } catch (error) {
      setModal(true);
      setModalText('오류가 발생하였습니다.');
    } finally {
      setModal(true);
      setModalText('찜이 해제되었습니다.');
    }
  }

  return (
    <LikeLi>
      <Link to={'/place/' + placeId}>
        {modal ? <Modal modalText={modalText} path={'/mypage/like'} /> : null}
        <ImgContent>
          <img src={imgSrc} alt="like img" />
        </ImgContent>
        <TextContent>
          <h3>{data.title}</h3>
          <p>{data.addr1}</p>
          <FaHeart
            size="20"
            onClick={(e) => {
              e.preventDefault();
              ModalOkCancel('찜을 해제하시겠습니까?', null, LikeCancel);
            }}
          />
        </TextContent>
      </Link>
    </LikeLi>
  );
};

const LikeLi = styled.li`
  padding: 0 10px;
  width: 45%;
  margin-bottom: 50px;
  a {
    text-decoration: none;
  }
`;

const ImgContent = styled.div`
  border-radius: 10px;
  overflow: hidden;
  height: 260px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const TextContent = styled.div`
  position: relative;
  margin-top: 24px;
  h3 {
    margin-bottom: 4px;
    font-size: 20px;
    line-height: 1.4;
    font-weight: 700;
    color: #333;
  }
  p {
    color: #606060;
  }
  svg {
    position: absolute;
    top: 0;
    right: 10px;
    color: #ff385c;
  }
`;

export default LikeList;
