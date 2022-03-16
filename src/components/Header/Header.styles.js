//
//

import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--darkGrey);
  padding: 30px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 300px;

  @media (max-width: 600px) {
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 200px;

  @media (max-width: 600px) {
    width: 100px;
  }
`;
