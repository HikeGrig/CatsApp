import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from './Container';

const Nav = styled.header`
  display: block;
  height: 3.625rem;
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,.08);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Header = () => {
  return (
    <div>
      <Nav>
        <Container>
          <Wrapper>
            <h3>Header</h3>
          </Wrapper>
        </Container>
      </Nav>
    </div>
  );
};

export default Header;


