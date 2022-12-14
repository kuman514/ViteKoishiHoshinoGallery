import axios, { isAxiosError } from 'axios';
import { defaultContent } from '^/constants/defaultContent';
import { VITE_API_URL } from '^/constants/url';
import { GetContentResponse } from '^/types';

export const getContent = async (contentName: string) => {
  try {
    const { data, status } = await axios.get<GetContentResponse>(`${VITE_API_URL}/${contentName}`);
    return { data, status };
  } catch (e) {
    if (isAxiosError(e)) {
      return {
        data: defaultContent,
        status: e.status,
      };
    }

    return {
      data: defaultContent,
      status: -1,
    };
  }
};
