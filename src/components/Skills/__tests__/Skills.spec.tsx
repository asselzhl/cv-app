import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import configureMockStore from 'redux-mock-store';
import { stateStatus } from '../../../store/constants';
import { Skills } from '../Skills';

const mockStore = configureMockStore();

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: jest.fn(),
	useDispatch: jest.fn(),
}));

jest.mock('../../../components/Loading/Loading', () => ({
	Loading: () => <div>Loading</div>,
}));

jest.mock('../../../components/Failed/Failed', () => ({
	Failed: () => <div>Failed</div>,
}));

jest.mock('../../../components/Button/Button', () => ({
	Button: ({ text, onClick }) => <button onClick={onClick}>{text}</button>,
}));

describe('Skills component', () => {
	let store;
	let mockDispatch;

	beforeEach(() => {
		store = mockStore({});
		mockDispatch = jest.fn();
		jest.clearAllMocks();
		jest.mocked(useDispatch).mockReturnValue(mockDispatch);
	});

	it('renders loading state', () => {
		jest.mocked(useSelector).mockReturnValue(stateStatus.loading);
		render(
			<Provider store={store}>
				<Skills />
			</Provider>
		);
		expect(screen.getByText('Loading')).toBeInTheDocument();
	});

	it('renders failed state', () => {
		const responseFailedMessage = 'Failed';
		jest.mocked(useSelector).mockReturnValue(stateStatus.failed);
		render(
			<Provider store={store}>
				<Skills />
			</Provider>
		);
		expect(screen.getByText(responseFailedMessage)).toBeInTheDocument();
	});

	it('renders skills when data is fetched successfully', () => {
		const skillsList = [{ name: 'Skill 1' }, { name: 'Skill 2' }];
		jest
			.mocked(useSelector)
			.mockReturnValue(stateStatus.succeeded)
			.mockReturnValue(skillsList);

		render(
			<Provider store={store}>
				<Skills />
			</Provider>
		);
		expect(screen.getByText('Skill 1')).toBeInTheDocument();
		expect(screen.getByText('Skill 2')).toBeInTheDocument();
	});

	it('toggles form visibility', () => {
		jest
			.mocked(useSelector)
			.mockReturnValue(stateStatus.succeeded)
			.mockReturnValue([]);

		render(
			<Provider store={store}>
				<Skills />
			</Provider>
		);
		const button = screen.getByText('Open edit');
		fireEvent.click(button);
		expect(screen.getByText('Close edit')).toBeInTheDocument();
		expect(screen.getByTestId('skill-form')).toBeInTheDocument();
		fireEvent.click(screen.getByText('Close edit'));
		expect(screen.queryByTestId('skill-form')).not.toBeInTheDocument();
	});

	// TODO
	//   it("dispatches fetchSkills action on mount if skills state status is idle", () => {
	//     const mockDispatch = jest.fn();
	//     jest.mocked(useDispatch).mockReturnValue(mockDispatch);
	//     jest.mocked(useSelector).mockReturnValue(stateStatus.idle);
	//     jest.mocked(useSelector).mockReturnValue([]);

	//     render(
	//       <Provider store={store}>
	//         <Skills />
	//       </Provider>
	//     );
	//     expect(mockDispatch).toHaveBeenCalledWith(fetchSkills());
	//   });
});
