import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface SelectButtonStyleProps {
  btnColor?: string;
}

const SelectButton = styled.button<SelectButtonStyleProps>`
  all: unset;
  background-color: ${({ btnColor }) => btnColor};

  width: 50vmin;

  color: white;
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: all linear 80ms;
  margin-bottom: 15px;

  &:hover {
    background-color: white;
    color: ${({ btnColor }) => btnColor};
  }

  & > img {
    width: 100%;
  }
`;

interface Props {
  children?: ReactNode;
  title: string;
  btnColor?: string;
  onClick?: () => void;
}

const HomeSelection: FC<Props> = ({
  children, title, btnColor, onClick,
}) => (
  <SelectButton
    btnColor={btnColor}
    onClick={onClick}
  >
    { children }
    <h2>{ title }</h2>
  </SelectButton>
);

export default HomeSelection;
