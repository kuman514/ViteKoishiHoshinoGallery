import React, { FC } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
`;

const CopyrightSection: FC<{}> = () => (
  <Root>
    <div>Koishi Komeiji © Team Shanghai Alice</div>
    <div>Hoshino Takanashi © NEXON & NEXON Games</div>
  </Root>
);

export default CopyrightSection;
