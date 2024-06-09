import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider, useDispatch, useSelector } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import configureMockStore from "redux-mock-store";
import { stateStatus } from "../../../store/constants";
import { Education } from "../Education";

const mockStore = configureMockStore();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock("../../../store/education/educationThunk", () => ({
  fetchEducations: jest.fn(),
}));

jest.mock("../../../components/Loading/Loading", () => ({
  Loading: () => <div>Loading</div>,
}));

jest.mock("../../../components/Failed/Failed", () => ({
  Failed: () => <div>Failed</div>,
}));

describe("Education Component", () => {
  let store;
  let mockDispatch;

  beforeEach(() => {
    store = mockStore({});
    mockDispatch = jest.fn();
    jest.clearAllMocks();
    jest.mocked(useDispatch).mockReturnValue(mockDispatch);
  });

  it("renders loading state", () => {
    jest.mocked(useSelector).mockReturnValue(stateStatus.loading);
    render(
      <Provider store={store}>
        <Education />
      </Provider>
    );
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  it("renders failed state", () => {
    const responseFailedMessage = "Failed";
    jest.mocked(useSelector).mockReturnValue(stateStatus.failed);
    render(
      <Provider store={store}>
        <Education />
      </Provider>
    );
    expect(screen.getByText(responseFailedMessage)).toBeInTheDocument();
  });

  it("renders educations when data is fetched successfully", () => {
    const educationList = [
      { date: 2012, title: "Education 1", description: "Description 1" },
      { date: 2013, title: "Education 2", description: "Description 2" },
    ];
    jest
      .mocked(useSelector)
      .mockReturnValue(stateStatus.succeeded)
      .mockReturnValue(educationList);

    render(
      <Provider store={store}>
        <Education />
      </Provider>
    );
    expect(screen.getByText("Education 1")).toBeInTheDocument();
    expect(screen.getByText("Education 2")).toBeInTheDocument();
  });

  //   TODO;
  //   it("dispatches fetchEducations action on mount if educations state status is idle", () => {
  //     const mockDispatch = jest.fn();
  //     jest.mocked(useDispatch).mockReturnValue(mockDispatch);
  //     jest.mocked(useSelector).mockReturnValue([]);

  //     render(<Education />);
  //     expect(mockDispatch).toHaveBeenCalledWith(fetchEducations());
  //   });
});
