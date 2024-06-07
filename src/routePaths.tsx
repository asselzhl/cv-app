type RoutePaths = '/' | '/inner';

interface RoutePathsKeys {
	home: RoutePaths;
	inner: RoutePaths;
}

export const routePaths: RoutePathsKeys = {
	home: '/',
	inner: '/inner',
};
