import Button from 'components/common/Button';
import useOnClickOutside from 'hooks/useOnClickOutside';
import React, { useRef } from 'react';
import styled from 'styled-components';

const Modal = ({ setModalOpen, modalType }) => {
  const ref = useRef(null);
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <ModalContainer>
      {modalType === 'Signup' ? (
        <ModalBox ref={ref}>
          <ModalHeader>회원 가입</ModalHeader>
          <ModalContent>
            <ContentWrap>
              <InputWrap>
                <InputContainer>
                  <input type="text" placeholder="아이디" />
                </InputContainer>
                <span>4~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.</span>
              </InputWrap>
              <InputWrap>
                <InputContainer>
                  <input type="text" placeholder="닉네임" />
                </InputContainer>
                <span>2~8자의 한글만 사용 가능합니다.</span>
              </InputWrap>
              <InputWrap>
                <InputContainer>
                  <input type="text" placeholder="비밀번호" />
                </InputContainer>
                <span>4~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.</span>
              </InputWrap>
              <InputWrap>
                <InputContainer>
                  <input type="text" placeholder="비밀번호 확인" />
                </InputContainer>
                <span>비밀번호를 확인해주세요.</span>
              </InputWrap>
            </ContentWrap>
            <Bar />
            <ContentWrap>
              <p>
                개인정보 수집 및 이용에 동의합니다.
                <input type="checkbox" />
              </p>
              <span>
                1. 에어비앤비가 수집하는 개인 정보 에어비앤비 플랫폼을 이용하는 데 필요한 정보
                당사는 회원님이 에어비앤비 플랫폼을 이용할 때 회원님의 개인 정보를 수집합니다.
                그렇지 않은 경우, 에어비앤비는 요청하신 서비스를 회원님께 제공하지 못할 수 있습니다.
                이러한 정보에는 다음이 포함됩니다.
              </span>
            </ContentWrap>
            <Bar />
            <ContentWrap>
              <Button text="동의 및 계속하기" />
            </ContentWrap>
          </ModalContent>
        </ModalBox>
      ) : (
        <ModalBox ref={ref}>
          <ModalHeader>로그인</ModalHeader>
          <ModalContent>
            <ContentWrap>
              <InputWrap>
                <InputContainer>
                  <input type="text" placeholder="아이디" />
                </InputContainer>
                <span>4~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.</span>
              </InputWrap>
              <InputWrap>
                <InputContainer>
                  <input type="text" placeholder="비밀번호" />
                </InputContainer>
                <span>4~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.</span>
              </InputWrap>
            </ContentWrap>
            <Bar />
            <ContentWrap>
              <Button text="로그인" />
            </ContentWrap>
          </ModalContent>
        </ModalBox>
      )}
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1.5rem;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e5e5;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

const ModalContent = styled.div`
  padding: 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 0;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
  & span {
    font-size: ${({ theme }) => theme.fonts.size.mini};
    line-height: 1.2rem;
    color: rgb(113, 113, 113);
  }
`;

const InputContainer = styled.div`
  border: 1px solid #b0b0b0;
  border-radius: 0.4rem;
  padding: 1rem;
  & input {
    border: none;
    outline: none;
    font-size: ${({ theme }) => theme.fonts.size.xsm};
    line-height: 1.2rem;
    width: 100%;
  }
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Bar = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
`;

export default Modal;
