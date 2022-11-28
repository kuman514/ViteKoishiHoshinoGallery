import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage: FC<{}> = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  });
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (<></>);
};

export default ErrorPage;
