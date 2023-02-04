import React from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import styled from 'styled-components';

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);
  return (
    <Nav>
      <ArrowBtn onClick={() => setPage(page - 1)} disabled={page === 1}>
        <MdArrowBackIosNew />
      </ArrowBtn>
      {Array(numPages)
        .fill()
        .map((_, idx) => {
          return (
            <NumBtn
              key={idx + 1}
              onClick={() => setPage(idx + 1)}
              current={page === idx + 1 ? true : null}
            >
              {idx + 1}
            </NumBtn>
          );
        })}
      <ArrowBtn onClick={() => setPage(page + 1)} disabled={page === numPages}>
        <MdArrowForwardIos />
      </ArrowBtn>
    </Nav>
  );
};

const NumBtn = styled.button`
  display: flex;
  align-items: center;
  font-size: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  width: 30px;
  height: 30px;
  justify-content: center;
  border-radius: 50%;
  ${(props) =>
    props.current &&
    `
      background-color: #ff385c;
      color: #fff;
    `}
  ${(props) =>
    !props.current &&
    `
      &:hover {
        background-color: #f0f0f0;
      }
    `}
`;

const ArrowBtn = styled.button`
  display: flex;
  align-items: center;
  font-size: 15px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export default Pagination;
