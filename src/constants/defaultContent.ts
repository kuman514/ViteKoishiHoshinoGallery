import { ContentType, GetContentResponse, RouteName } from '^/types';

export const defaultContent: GetContentResponse = {
  type: RouteName.HOME,
  firstUpdate: '',
  lastUpdate: '',
  contents: [
    {
      id: 'error',
      type: ContentType.H1,
      content: 'Couldn\'t load the content.',
    },
  ],
};
