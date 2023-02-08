import React from 'react';
import { RiFileList2Line } from 'react-icons/ri';
import { confirmAlert } from 'react-confirm-alert';
import styled, { css } from 'styled-components';

const Modal = ({ setModal, modalText }) => {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <ModalBack>
          <ModalContent>
            <RiFileList2Line size="30" title="list" />
            <ModalText>{modalText}</ModalText>
            <BtnWrap>
              <Button
                onClick={() => {
                  setModal(false);
                  onClose();
                }}
              >
                확인
              </Button>
            </BtnWrap>
          </ModalContent>
        </ModalBack>
      );
    },
  });
};

const ModalOkCancel = (message, secondMsg, orderFunction, setModal) => {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <ModalBack>
          <ModalContent>
            <RiFileList2Line size="30" title="list" />
            {secondMsg ? (
              <>
                <ModalText>{secondMsg}</ModalText>
                <ModalText>{message}</ModalText>
              </>
            ) : (
              <ModalText>{message}</ModalText>
            )}
            <BtnWrap>
              <Button
                onClick={() => {
                  orderFunction();
                  onClose();
                }}
              >
                확인
              </Button>
              <Button
                cancel={true}
                onClick={() => {
                  setModal(false);
                  onClose();
                }}
              >
                취소
              </Button>
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
  width: 350px;
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
  padding: 0 20px;
  z-index: 100;
  svg {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 10px;
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
  ${(props) =>
    props.cancel
      ? css`
          background-color: rgba(255, 56, 92, 0.2);
          color: #ff385c;
        `
      : css`
          background-color: #ff385c;
          color: #fff;
        `}
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  font-weight: 700;
  border: none;
`;

export { Modal, ModalOkCancel };
