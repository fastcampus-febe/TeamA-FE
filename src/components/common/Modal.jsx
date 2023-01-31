import React from 'react';
import { RiFileList2Line } from 'react-icons/ri';
import { confirmAlert } from 'react-confirm-alert';
import styled from 'styled-components';

const Modal = ({ modalText }) => {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <ModalBack>
          <ModalContent>
            <RiFileList2Line size="30" title="list" />
            <ModalText>{modalText}</ModalText>
            <BtnWrap>
              <Button onClick={onClose}>확인</Button>
            </BtnWrap>
          </ModalContent>
        </ModalBack>
      );
    },
  });
};

const ModalOkCancel = (message, orderFunction) => {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <ModalBack>
          <ModalContent>
            <RiFileList2Line size="30" title="list" />
            <ModalText>{message}</ModalText>
            <BtnWrap>
              <Button
                onClick={() => {
                  orderFunction();
                  onClose();
                }}
              >
                확인
              </Button>
              <Button onClick={onClose}>취소</Button>
            </BtnWrap>
          </ModalContent>
        </ModalBack>
      );
    },
  });
};

const ModalBack = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
`;

const ModalContent = styled.div`
  width: 300px;
  height: 200px;
  background-color: #fff;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 10px;
  z-index: 100;
  svg {
    width: 100%;
    margin-top: 40px;
    box-sizing: border-box;
  }
`;

const ModalText = styled.p`
  width: 100%;
  text-align: center;
  font-weight: 700;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  align-items: center;
  padding: 0 20px 10px 20px;
`;

const Button = styled.button`
  border-radius: 0.6rem;
  background-color: #ff385c;
  border: 1px solid #ff385c;
  color: #fff;
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  font-weight: 700;
`;

export { Modal, ModalOkCancel };
