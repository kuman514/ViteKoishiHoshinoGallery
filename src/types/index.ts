export enum RouteName {
  HOME = 'HOME',
  KOISHI = 'KOISHI',
  HOSHINO = 'HOSHINO',
}

export const RouteMatch: Record<RouteName, string> = {
  [RouteName.HOME]: '/',
  [RouteName.KOISHI]: 'koishi',
  [RouteName.HOSHINO]: 'hoshino',
};

export const RouteTitle: Record<RouteName, string> = {
  [RouteName.HOME]: 'Home',
  [RouteName.KOISHI]: 'Koishi',
  [RouteName.HOSHINO]: 'Hoshino',
};

export enum ContentType {
  H1 = 'h1',
  H2 = 'h2',
  PARAGRAPH = 'paragraph',
  IMAGE = 'image',
  YOUTUBE = 'youtube',
}

export interface Content {
  id: string;
  type: ContentType;
  content: string;
  alt?: string;
}

export interface GetContentResponse {
  type: RouteName;
  firstUpdate: string;
  lastUpdate: string;
  contents: Content[];
}
