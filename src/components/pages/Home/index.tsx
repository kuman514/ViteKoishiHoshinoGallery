import React, { FC } from 'react';
import styled from 'styled-components';
import CopyrightSection from '^/components/atoms/CopyrightSection';
import HomeSelectionList from '^/components/molecules/HomeSelectionList';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Home: FC<{}> = () => (
  <Root>
    <HomeSelectionList />
    <CopyrightSection />
  </Root>
);

export default Home;
