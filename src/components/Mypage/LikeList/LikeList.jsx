import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import { Modal, ModalOkCancel } from 'components/common/Modal';

const LikeList = ({ data }) => {
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState('');

  const imgSrc = data.imgSrc;

  function LikeCancel() {
    try {
      // 찜 취소
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
      {modal ? <Modal modalText={modalText} /> : null}
      <ImgContent>
        <img src={imgSrc} alt="like img" />
      </ImgContent>
      <TextContent>
        <h3>{data.title}</h3>
        <p>{data.adress}</p>
        <FaHeart
          size="20"
          onClick={() => {
            ModalOkCancel('찜을 해제하시겠습니까?', LikeCancel);
          }}
        />
      </TextContent>
    </LikeLi>
  );
};

const LikeLi = styled.li`
  padding: 0 10px;
  width: 45%;
  margin-bottom: 50px;
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
