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
