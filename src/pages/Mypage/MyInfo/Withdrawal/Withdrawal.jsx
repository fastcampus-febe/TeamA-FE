import { PageContent, Title } from 'pages/Mypage/MyPageStyle';
import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { CgDanger } from 'react-icons/cg';
import styled, { css } from 'styled-components';
import Button from 'components/common/Button';
import { Modal, ModalOkCancel } from 'components/common/Modal';

const Withdrawal = () => {
  const [display, setDisplay] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState('');

  function MemberDelete() {
    try {
      // 회원 탈퇴
    } catch (error) {
      setModal(true);
      setModalText('오류가 발생하였습니다.');
    } finally {
      setModal(true);
      setModalText('탈퇴되었습니다.');
    }
  }
  return (
    <PageContent>
      {modal ? <Modal modalText={modalText} /> : null}
      <Title>
        회원 탈퇴{' '}
        <SvgPosition
          $display={display}
          onClick={() => {
            setDisplay(!display);
          }}
        >
          <RiArrowDownSLine size="35" />
        </SvgPosition>
      </Title>
      <WithdrawalContent $display={display}>
        <DangerTitle>
          <CgDanger size="23" />
          <p>회원탈퇴 유의사항</p>
        </DangerTitle>
        <DangerContent>
          <li>탈퇴 시 프로필 정보, 판매 내역 등 모든 회원 활동 정보가 삭제됩니다.</li>
          <li>동일한 이메일로 재가입 하여도 이전 이용 내역을 확인하실 수 없습니다.</li>
        </DangerContent>
        <Button
          text="확인"
          width="100px"
          height="40px"
          onClick={() => {
            ModalOkCancel(
              '회원탈퇴를 진행하시겠습니까?',
              '탈퇴 시 삭제된 회원정보는 복구가 불가능합니다.',
              MemberDelete
            );
          }}
        />
      </WithdrawalContent>
    </PageContent>
  );
};

const SvgPosition = styled.span`
  position: absolute;
  top: 5px;
  right: 10px;
  ${(props) =>
    props.$display
      ? css`
          transform: translateY(-30%) rotateX(180deg);
        `
      : css`
          transform: translateY(0%) rotateX(0deg);
        `}
`;

const WithdrawalContent = styled.div`
  ${(props) =>
    props.$display
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
  button {
    float: right;
    margin-right: 10px;
  }
`;

const DangerTitle = styled.div`
  position: relative;
  height: 23px;
  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
  p {
    position: absolute;
    top: 5px;
    font-size: 17px;
    font-weight: 600;
    margin-left: 30px;
  }
`;

const DangerContent = styled.ul`
  margin: 20px 0 20px 10px;
  li {
    position: relative;
    padding-left: 15px;
    margin-bottom: 7px;
    color: #606060;
    &::before {
      content: '';
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #606060;
      position: absolute;
      left: 0;
      top: 30%;
    }
  }
`;

export default Withdrawal;
