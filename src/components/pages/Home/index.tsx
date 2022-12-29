import React, { FC } from 'react';
import styled from 'styled-components';
import HomeSelectionList from '^/components/molecules/HomeSelectionList';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const CopyrightSection = styled.div`
  width: 100%;
`;

const Home: FC<{}> = () => (
  <Root>
    <HomeSelectionList />
    <CopyrightSection>
      <div>Koishi Komeiji © Team Shanghai Alice</div>
      <div>Hoshino Takanashi © NEXON & NEXON Games</div>
    </CopyrightSection>
  </Root>
);

export default Home;
