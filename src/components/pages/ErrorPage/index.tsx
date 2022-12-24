import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage: FC<{}> = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  });
  return (<>Error Page</>);
};

export default ErrorPage;
