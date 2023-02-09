import { getBoardList, getBoardListSearch, getBoardListSort } from 'api/board';
import { authState } from 'atoms/auth';
import { loadingState } from 'atoms/loading';
import BoardItem from 'components/Board/BoardItem';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import Pagination from 'components/common/Pagination';
import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { TbClipboardX } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { theme } from 'style/theme';
import styled from 'styled-components';

const Board = () => {
  const [board, setBoard] = useState([]);
  const [pageDisplay, setPageDisplay] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;
  const [search, setSearch] = useState('');
  const [searchOption, setSearchOption] = useState('');
  const auth = useRecoilValue(authState);
  const navigate = useNavigate();
  const setLoading = useSetRecoilState(loadingState);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const data = await getBoardList();
        setBoard(data);
      } catch (error) {
        alert('게시물 목록을 조회하지 못했습니다.');
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  const handleSort = async (e) => {
    const type = e.target.value === '최근 순' ? 'recent' : 'like';
    const data = await getBoardListSort(type);
    setBoard(data);
  };

  const handleSearch = async () => {
    const type = searchOption === '제목' ? 'title' : 'nickname';
    const data = await getBoardListSearch(type, search);
    setBoard(data);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <BoardContainer>
      <BoardHeader>
        <BoardTitle>Community</BoardTitle>
        <SearchWrap>
          <SearchSelect onChange={(e) => setSearchOption(e.target.value)}>
            <option>제목</option>
            <option>닉네임</option>
          </SearchSelect>
          <Input
            width="340px"
            padding="10px 16px 10px 94px"
            radius="20px"
            borderColor="#dddddd"
            lineHeight="1.2"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button
            width="40px"
            height="30px"
            backgroundColor="white"
            backgroundColorHover="white"
            color="black"
            colorHover={theme.colors.primary}
            position="absolute"
            top="30px"
            right="5px"
            onClick={handleSearch}
          >
            <BiSearch />
          </Button>
        </SearchWrap>
        <ButtonWrap>
          <SortSelect onChange={handleSort}>
            <option>최근 순</option>
            <option>좋아요 순</option>
          </SortSelect>
          {auth.loggedUser.id && (
            <Button
              text="등록"
              width="90px"
              height="40px"
              radius="50px"
              fontSize="15px"
              onClick={() => navigate('/board/add')}
            />
          )}
        </ButtonWrap>
      </BoardHeader>
      <BoardWrap>
        {Array.isArray(board) ? (
          board.slice(offset, offset + limit).map((item) => {
            return <BoardItem key={item.id} data={item} />;
          })
        ) : (
          <NoneBoard>
            <TbClipboardX size="38" />
            <p>등록된 게시글이 없습니다.</p>
          </NoneBoard>
        )}
      </BoardWrap>
      <PageDisplay pageDisplay={pageDisplay}>
        {Array.isArray(board) ? (
          <Pagination total={board.length} limit={limit} page={page} setPage={setPage} />
        ) : null}
      </PageDisplay>
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
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

const BoardTitle = styled.h1`
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

const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SearchSelect = styled.select`
  border: none;
  outline: none;
  position: absolute;
  top: 35px;
  left: 16px;
  width: 70px;
  cursor: pointer;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SortSelect = styled.select`
  padding: 0 1rem;
  cursor: pointer;
  outline: none;
  width: 110px;
  height: 40px;
  border: 1px solid #dddddd;
  border-radius: 30px;
  background-color: white;
  margin: auto 0;
  &:hover {
    border: 1px solid #737373;
  }
`;

const BoardWrap = styled.div`
  background-color: white;
  width: 100%;
  height: fit-content;
`;

const NoneBoard = styled.div`
  text-align: center;
  margin: 120px 0;
  color: #202020;
  font-weight: 700;
  svg {
    color: #333;
    opacity: 0.5;
    margin-bottom: 10px;
  }
  p {
    font-size: 20px;
  }
`;

const PageDisplay = styled.div`
  position: relative;
  margin-top: 20px;
  display: ${(props) => (props.pageDisply ? 'none' : 'block')};
`;

export default Board;

const tempData = [
  {
    id: 1,
    member_id: 'test1234',
    nickname: '우주하마',
    title: '내가 가본 관광지 TOP 5',
    indate: '2023-01-20 12:22:33',
    thumb: 2,
    comment_cnt: 3,
  },
  {
    id: 2,
    member_id: 'asdasd123',
    nickname: '여행좋아',
    title: '요즘 날씨에 가기 딱 좋은곳!',
    indate: '2023-01-21 11:32:13',
    thumb: 3,
    comment_cnt: 10,
  },
  {
    id: 3,
    member_id: 'abcdfg123',
    nickname: '아이아빠',
    title: '주말에 아이들과 나들이를 가려는데, 서울 근교 추천해주세요.',
    indate: '2023-01-21 11:32:13',
    thumb: 10,
    comment_cnt: 13,
  },
  {
    id: 4,
    member_id: 'asdasdg',
    nickname: '차박차박',
    title: '다들 차박 자주 가시나요? 준비물좀 알려주세요.',
    indate: '2023-01-21 11:32:13',
    thumb: 0,
    comment_cnt: 2,
  },
  {
    id: 5,
    member_id: 'asd12345',
    nickname: '효녀',
    title: '엄마랑 같이 여행다녀왔어요. ^^',
    indate: '2023-01-21 11:32:13',
    thumb: 0,
    comment_cnt: 2,
  },
  {
    id: 6,
    member_id: 'bbccssdd223',
    nickname: '운영자일수도',
    title: '경기도에 맛집 추천좀요',
    indate: '2023-01-21 11:32:13',
    thumb: 0,
    comment_cnt: 2,
  },
  {
    id: 7,
    member_id: 'test1234',
    nickname: '우주하마',
    title: '내가 가본 관광지 TOP 5',
    indate: '2023-01-20 12:22:33',
    thumb: 2,
    comment_cnt: 3,
  },
  {
    id: 8,
    member_id: 'asdasd123',
    nickname: '여행좋아',
    title: '요즘 날씨에 가기 딱 좋은곳!',
    indate: '2023-01-21 11:32:13',
    thumb: 3,
    comment_cnt: 10,
  },
  {
    id: 9,
    member_id: 'abcdfg123',
    nickname: '아이아빠',
    title: '주말에 아이들과 나들이를 가려는데, 서울 근교 추천해주세요.',
    indate: '2023-01-21 11:32:13',
    thumb: 10,
    comment_cnt: 13,
  },
  {
    id: 10,
    member_id: 'asdasdg',
    nickname: '차박차박',
    title: '다들 차박 자주 가시나요? 준비물좀 알려주세요.',
    indate: '2023-01-21 11:32:13',
    thumb: 0,
    comment_cnt: 2,
  },
  {
    id: 11,
    member_id: 'asd12345',
    nickname: '효녀',
    title: '엄마랑 같이 여행다녀왔어요. ^^',
    indate: '2023-01-21 11:32:13',
    thumb: 0,
    comment_cnt: 2,
  },
  {
    id: 12,
    member_id: 'bbccssdd223',
    nickname: '운영자일수도',
    title: '경기도에 맛집 추천좀요',
    indate: '2023-01-21 11:32:13',
    thumb: 0,
    comment_cnt: 2,
  },
];
