import React, { FC, useEffect } from 'react';
import axios from 'axios';
import { GetContentResponse } from '^/types';
import { VITE_API_URL } from '^/constants/url';

const Koishi: FC<{}> = () => {
  useEffect(() => {
    // temporarily using axios here
    (async () => {
      const { data } = await axios.get<GetContentResponse>(`${VITE_API_URL}/koishi`);
      console.log(data);
    })();
  }, []);

  return (
    <>Koishi</>
  );
};

export default Koishi;
