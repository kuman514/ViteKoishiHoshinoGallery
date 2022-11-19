import React, { FC, useState } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(8px + 2vmin);
  color: white;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const Main: FC<{}> = () => {
  const [count, setCount] = useState<number>(0);

  const increaseCount: () => void = () => {
    setCount(count + 1);
  };

  return (
    <Root>
      <h1>Practicing Vite + ESLint + Yarn Berry</h1>
      <div>
        <div>
          Current count: {count}
        </div>
        <button onClick={increaseCount}>
          Increase count
        </button>
      </div>
    </Root>
  );
};

export default Main;
