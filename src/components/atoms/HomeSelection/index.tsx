import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const SelectButton = styled.button``;

interface Props {
  children?: ReactNode;
  title: string;
  onClick?: () => void;
}

const HomeSelection: FC<Props> = ({ children, title, onClick }) => (
  <SelectButton onClick={onClick}>
    { children }
    <h2>{ title }</h2>
  </SelectButton>
);

export default HomeSelection;
