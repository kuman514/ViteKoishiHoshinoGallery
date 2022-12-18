import React, { FC } from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  margin-top: 20px;
`;

const License: FC<{}> = () => (
  <div>
    <Title>React</Title>
    <div>Copyright (c) Meta Platforms, Inc. and affiliates.</div>
    <div>MIT License</div>

    <Title>Vite</Title>
    <div>Copyright (c) 2019-present, Yuxi (Evan) You and Vite contributors</div>
    <div>MIT License</div>

    <Title>TypeScript</Title>
    <div>Copyright (c) Microsoft</div>
    <div>Apache License</div>

    <Title>Axios</Title>
    <div>Copyright (c) 2014-present Matt Zabriskie & Collaborators</div>
    <div>MIT License</div>

    <Title>ESLint</Title>
    <div>Copyright OpenJS Foundation and other contributors</div>
    <div>MIT License</div>

    <Title>styled-components</Title>
    <div>Copyright (c) 2016-present Glen Maddern and Maximilian Stoiber</div>
    <div>MIT License</div>

    <Title>react-router-dom</Title>
    <div>Copyright (c) 2021 Ernesto Garcia</div>
    <div>MIT License</div>
  </div>
);

export default License;
