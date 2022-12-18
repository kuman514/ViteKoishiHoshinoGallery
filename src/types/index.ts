export enum RouteName {
  HOME = 'HOME',
  KOISHI = 'KOISHI',
  HOSHINO = 'HOSHINO',
  LICENSE = 'LICENSE',
}

export const RouteMatch: Record<RouteName, string> = {
  [RouteName.HOME]: '/',
  [RouteName.KOISHI]: 'koishi',
  [RouteName.HOSHINO]: 'hoshino',
  [RouteName.LICENSE]: 'license',
};

export const RouteTitle: Record<RouteName, string> = {
  [RouteName.HOME]: 'Home',
  [RouteName.KOISHI]: 'Koishi',
  [RouteName.HOSHINO]: 'Hoshino',
  [RouteName.LICENSE]: 'License',
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
