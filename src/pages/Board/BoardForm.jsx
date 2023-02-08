import { createBoard, updateBoard } from 'api/board';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import TextArea from 'components/common/TextArea';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BoardForm = () => {
  const type = useLocation().pathname.split('/')[2];
  const navigate = useNavigate();
  let { state: data } = useLocation();
  const [title, setTitle] = useState(type === 'add' ? '' : data.title);
  const [content, setContent] = useState(type === 'add' ? '' : data.content);
  const [message, setMessage] = useState({
    title: '',
    content: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) return setMessage({ title: '제목을 입력해 주세요.', content: '' });
    if (!content) return setMessage({ title: '', content: '내용을 입력해 주세요.' });
    if (type === 'add') {
      if (window.confirm('게시물을 등록하시겠습니까?')) {
        try {
          const requestBody = { title, content };
          await createBoard(requestBody);
          alert('등록이 완료되었습니다.');
          navigate('/board');
        } catch (error) {
          alert('게시물을 등록하지 못했습니다.');
        } finally {
        }
      }
    } else {
      if (window.confirm('게시물을 수정하시겠습니까?')) {
        try {
          const requestBody = { title, content };
          await updateBoard(requestBody, data.id);
          alert('수정이 완료되었습니다.');
          navigate(`/board/${data.id}`, { state: data.id });
        } catch (error) {
          alert('게시물을 수정하지 못했습니다.');
        } finally {
        }
      }
    }
  };

  const handleBack = () => {
    if (type === 'add') {
      navigate('/board');
    } else {
      navigate(`/board/${data.id}`);
    }
  };

  return (
    <FormContainer>
      <BoardHeader>
        <FormTitle>Community</FormTitle>
      </BoardHeader>
      <InputContainer>
        <InputWrap>
          <Label>제목</Label>
          <Input
            height="44px"
            borderColor="#dddddd"
            value={type === 'add' ? '' : title}
            onChange={(e) => setTitle(e.target.value)}
            fontSize="15px"
            placeholder="제목을 입력해 주세요."
          />
          <SpanText>{message.title}</SpanText>
        </InputWrap>
        <InputWrap>
          <Label>내용</Label>
          <TextArea
            height="360px"
            defaultValue={type === 'add' ? '' : content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="여러분의 이야기를 들려주세요."
          />
          <SpanText>{message.content}</SpanText>
        </InputWrap>
      </InputContainer>
      <ButtonWrap>
        <Button text="취소" width="70px" height="40px" fontSize="15px" onClick={handleBack} />
        <Button
          text={type === 'add' ? '등록 완료' : '수정 완료'}
          width="110px"
          height="40px"
          fontSize="15px"
          onClick={handleSubmit}
        />
      </ButtonWrap>
    </FormContainer>
  );
};

export default BoardForm;

const FormContainer = styled.form`
  margin: 0 auto;
  width: 840px;
  display: flex;
  flex-direction: column;
  padding: 1.8rem 0 3rem 0;
`;

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed #dadada;
`;

const Label = styled.div`
  font-size: 15px;
`;

const FormTitle = styled.div`
  padding: 2rem 0 2rem 1.4rem;
  font-size: ${({ theme }) => theme.fonts.size.base};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  position: relative;
  &::before {
    content: '';
    width: 4px;
    height: 34px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-left: 10px;
    position: absolute;
    left: -4%;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`;

const SpanText = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.mini};
  line-height: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;
