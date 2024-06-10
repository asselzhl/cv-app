import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Inner } from './pages/Inner';
import { routePaths } from './helpers/routePaths';

interface RoutesConfigItem {
	path: string;
	element: JSX.Element;
}

function App() {
	const routesConfig: RoutesConfigItem[] = [
		{
			path: routePaths.home,
			element: <Home />,
		},
		{
			path: routePaths.inner,
			element: <Inner />,
		},
	];

	return (
		<Routes>
			{routesConfig.map((route) => {
				return (
					<Route key={route.path} path={route.path} element={route.element} />
				);
			})}
		</Routes>
	);
}

export default App;
