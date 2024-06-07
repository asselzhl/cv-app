import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Inner } from './pages/Inner';
import { routePaths } from './routePaths';

function App() {
	const routesConfig = [
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
