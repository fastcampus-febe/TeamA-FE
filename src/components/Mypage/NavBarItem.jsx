import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavBarItem = ({ icon, page, title }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname.split('/')[2] === page.split('/')[2] ? (
        <ActiveLi>
          <Link to={page}>
            {icon}
            <span>{title}</span>
          </Link>
        </ActiveLi>
      ) : (
        <div>
          <Link to={page}>
            {icon}
            <span>{title}</span>
          </Link>
        </div>
      )}
    </>
  );
};

const ActiveLi = styled.li`
  color: #ff385c;
  font-weight: 600;
`;

export default NavBarItem;
