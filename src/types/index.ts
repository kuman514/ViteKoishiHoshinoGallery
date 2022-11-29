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
