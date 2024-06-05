// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchEducations } from '../../../store/education/educationThunk';
// import { stateStatus } from '../../../store/constants';
// import { Education } from '../Education';
// // import { useAppDispatch } from "../../../store/store";

// jest.mock('react-redux', () => ({
// 	useSelector: jest.fn(),
// 	useAppDispatch: jest.fn(),
// }));

// jest.mock('../../../store/education/educationThunk', () => ({
// 	fetchEducations: jest.fn(),
// }));

// describe('Education component', () => {
// 	it('renders loading state', () => {
// 		const mockDispatch = jest.fn();
// 		const mockedUseDispatch = useDispatch as unknown as jest.Mock;
// 		const mockedUseSelector = useSelector as unknown as jest.Mock;

// 		mockedUseDispatch.mockReturnValue(mockDispatch);
// 		mockedUseSelector.mockReturnValue(stateStatus.loading);

// 		render(<Education />);

// 		expect(screen.getByTestId('spinner')).toBeInTheDocument();
// 		expect(mockDispatch).toHaveBeenCalledWith(fetchEducations());
// 	});
// });
