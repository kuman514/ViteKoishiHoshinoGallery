import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { licenseArticle } from './article';

const Title = styled.h2`
  margin-top: 20px;
`;

const License: FC<{}> = () => {
  const renderItems: ReactNode = Object.entries(licenseArticle).map(
    ([key, { title, copyright, license }]) => (
      <div key={key}>
        <Title>{ title }</Title>
        <div>{ copyright }</div>
        <div>{ license }</div>
      </div>
    ),
  );

  return (
    <div>
      { renderItems }
    </div>
  );
};

export default License;
