import { postUserSignIn, postUserSignUp } from 'api/userSign';
import { authState } from 'atoms/auth';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import useOnClickOutside from 'hooks/useOnClickOutside';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { setItem } from 'utils/storage';
import { theme } from 'style/theme';

const MESSAGES = {
  ID_VALID_MSG: '8~14자의 영문 소문자 및 숫자 조합만 사용 가능합니다.',
  NICKNAME_VALID_MSG: '2~8자의 한글만 사용 가능합니다.',
  PASSWORD_VALID_MSG: '8~20자의 영문 소문자 및 숫자 조합만 사용 가능합니다.',
  PASSWORD_CHECK_VALID_MSG: '비밀번호 확인이 일치하지 않습니다.',
  ID_EMPTY_MSG: '아이디를 입력해 주세요.',
  NINKNAME_EMPTY_MSG: '닉네임을 입력해 주세요.',
  PASSWORD_EMPTY_MSG: '비밀번호를 입력해 주세요.',
  PASSWORD_CHECK_EMPTY_MSG: '비밀번호 확인이 필요합니다.',
  AGREE_VALID_MSG: ' 개인정보 수집 및 이용에 동의해 주세요.',
  LOGIN_FAIL_MSG: '아이디 또는 비밀번호가 올바르지 않습니다.',
};

const REGEXP = {
  ID_REGEXP: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,14}$/,
  NICKNAME_REGEXP: /[ㄱ-ㅎ|가-힣]{2,8}$/,
  PASSWORD_REGEXP: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
};

const SignModal = ({ setModalOpen, modalType }) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  useOnClickOutside(ref, () => setModalOpen(false));
  const [auth, setAuth] = useRecoilState(authState);

  const [userData, setUserData] = useState({
    id: '',
    nickname: '',
    password: '',
    passwordCheck: '',
    agree: false,
  });

  const [messages, setMessages] = useState({
    id: modalType === 'Signup' ? MESSAGES.ID_VALID_MSG : '',
    nickname: MESSAGES.NICKNAME_VALID_MSG,
    password: modalType === 'Signup' ? MESSAGES.PASSWORD_VALID_MSG : '',
    passwordCheck: '',
    agree: '',
  });

  const [messagesColor, setMessagesColor] = useState({
    id: '',
    nickname: '',
    password: '',
    passwordCheck: '',
    agree: '',
  });

  const handleChangeValue = (event) => {
    const { name, value, checked } = event.target;
    setUserData({
      ...userData,
      [name]: value === 'on' ? checked : value,
    });
  };

  const showMessage = (name, msg) => {
    setMessages({
      id: modalType === 'Signup' ? MESSAGES.ID_VALID_MSG : '',
      nickname: MESSAGES.NICKNAME_VALID_MSG,
      password: modalType === 'Signup' ? MESSAGES.PASSWORD_VALID_MSG : '',
      passwordCheck: '',
      agree: false,
      [name]: msg,
    });
    setMessagesColor({ [name]: theme.colors.primary });
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    const { id, nickname, password, passwordCheck, agree } = userData;
    if (!id) return showMessage('id', MESSAGES.ID_EMPTY_MSG);
    if (!id.match(REGEXP.ID_REGEXP)) return showMessage('id', MESSAGES.ID_VALID_MSG);
    if (!nickname) return showMessage('nickname', MESSAGES.NINKNAME_EMPTY_MSG);
    if (!nickname.match(REGEXP.NICKNAME_REGEXP))
      return showMessage('nickname', MESSAGES.NICKNAME_VALID_MSG);
    if (!password) return showMessage('password', MESSAGES.PASSWORD_EMPTY_MSG);
    if (!password.match(REGEXP.PASSWORD_REGEXP))
      return showMessage('password', MESSAGES.PASSWORD_VALID_MSG);
    if (!passwordCheck) return showMessage('passwordCheck', MESSAGES.PASSWORD_CHECK_EMPTY_MSG);
    if (password !== passwordCheck)
      return showMessage('passwordCheck', MESSAGES.PASSWORD_CHECK_VALID_MSG);
    if (!agree) return showMessage('agree', MESSAGES.AGREE_VALID_MSG);

    if (window.confirm('회원가입을 완료하시겠습니까?')) {
      const requestBody = { id, nickname, password };
      await postUserSignUp(requestBody);

      alert('회원가입이 완료 되었습니다.');
      setModalOpen(false);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const { id, password } = userData;
    if (!id) return showMessage('id', MESSAGES.ID_EMPTY_MSG);
    if (!password) return showMessage('password', MESSAGES.PASSWORD_EMPTY_MSG);

    const requestBody = { id, password };
    // const data = await postUserSignIn(requestBody);
    // if (data.isFailed) return showMessage('password', data.errorMessage);
    const data = {
      accessToken:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJleGFtcGxlQGdtYWlsLmNvbSIsImlhdCI6MTY3NDMyODMzOCwiZXhwIjoxNjc0MzMwMTM4LCJpZCI6ImFzZGYiLCJuaWNrbmFtZSI6ImJvdXJib24iLCJyb2xlIjoiUk9MRV9VU0VSIn0.ePPbCBVHWmNzFPBXnN35r6RqzlU1JtCBxjCxzGnssHA',
    };

    setItem('user', { id, password });
    setItem('token', data.accessToken);
    setAuth({
      isLoggedIn: true,
      loggedUser: { id, password },
      userToken: data.accessToken,
    });

    setModalOpen(false);
    navigate('/');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleLogin();
  };

  return (
    <ModalContainer>
      {modalType === 'Signup' ? (
        <ModalBox ref={ref}>
          <ModalHeader>회원 가입</ModalHeader>
          <ModalContent>
            <ContentWrap>
              <InputWrap>
                <Input
                  type="text"
                  name="id"
                  placeholder="아이디"
                  onChange={handleChangeValue}
                  onBlur={handleSignup}
                />
                <SpanText color={messagesColor.id}>{messages.id}</SpanText>
              </InputWrap>
              <InputWrap>
                <Input
                  type="text"
                  name="nickname"
                  placeholder="닉네임"
                  onChange={handleChangeValue}
                  onBlur={handleSignup}
                />
                <SpanText color={messagesColor.nickname}>{messages.nickname}</SpanText>
              </InputWrap>
              <InputWrap>
                <Input
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  onChange={handleChangeValue}
                  onBlur={handleSignup}
                />
                <SpanText color={messagesColor.password}>{messages.password}</SpanText>
              </InputWrap>
              <InputWrap>
                <Input
                  type="password"
                  name="passwordCheck"
                  placeholder="비밀번호 확인"
                  onChange={handleChangeValue}
                  onBlur={handleSignup}
                />
                <SpanText color={messagesColor.passwordCheck}>{messages.passwordCheck}</SpanText>
              </InputWrap>
            </ContentWrap>
            <Bar />
            <ContentWrap>
              <CheckBoxWrap>
                <p>
                  개인정보 수집 및 이용에 동의합니다.
                  <SpanText color={messagesColor.agree}>{messages.agree}</SpanText>
                </p>
                <Input type="checkbox" name="agree" onChange={handleChangeValue} />
              </CheckBoxWrap>
              <SpanText>
                1. 에어비앤비가 수집하는 개인 정보 에어비앤비 플랫폼을 이용하는 데 필요한 정보
                당사는 회원님이 에어비앤비 플랫폼을 이용할 때 회원님의 개인 정보를 수집합니다.
                그렇지 않은 경우, 에어비앤비는 요청하신 서비스를 회원님께 제공하지 못할 수 있습니다.
                이러한 정보에는 다음이 포함됩니다.
              </SpanText>
            </ContentWrap>
            <Bar />
            <ContentWrap>
              <Button text="동의 및 계속하기" onClick={handleSignup} />
            </ContentWrap>
          </ModalContent>
        </ModalBox>
      ) : (
        <ModalBox ref={ref}>
          <ModalHeader>로그인</ModalHeader>
          <ModalContent>
            <ContentWrap>
              <InputWrap>
                <Input type="text" name="id" placeholder="아이디" onChange={handleChangeValue} />
                <SpanText color={messagesColor.id}>{messages.id}</SpanText>
              </InputWrap>
              <InputWrap>
                <Input
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  onChange={handleChangeValue}
                  onKeyDown={handleKeyDown}
                />
                <SpanText color={messagesColor.password}>{messages.password}</SpanText>
              </InputWrap>
            </ContentWrap>
            <Bar />
            <SearchText>아이디 / 비밀번호 찾기</SearchText>
            <ContentWrap>
              <Button text="로그인" onClick={handleLogin} />
            </ContentWrap>
          </ModalContent>
        </ModalBox>
      )}
    </ModalContainer>
  );
};

const ModalContainer = styled.form`
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
  padding: 1.5rem 0;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
`;

const CheckBoxWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SpanText = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.mini};
  line-height: 1.2rem;
  color: ${({ color }) => (color ? color : 'rgb(113, 113, 113)')};
`;

const SearchText = styled.span`
  cursor: pointer;
  font-size: 14px;
  color: rgb(113, 113, 113);
  margin-top: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Bar = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
`;

export default SignModal;
