import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { HashRouter as Router } from "react-router-dom";
import { Panel } from "../Panel";

jest.mock("../../../components/Button/Button", () => ({
  Button: jest.fn(({ buttonConfig, onClick }) => (
    <button onClick={onClick}>{buttonConfig}</button>
  )),
}));

jest.mock("../../../components/PhotoBox/PhotoBox", () => ({
  PhotoBox: jest.fn(({ config }) => <div>{config}</div>),
}));

jest.mock(".../../../components/Navigation/Navigation", () => ({
  Navigation: jest.fn(({ navList }) => (
    <nav>
      <ul>
        {navList.map((item) => (
          <li key={item.id}>
            {item.icon}
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </nav>
  )),
}));

const buttonKeys = {
  togglePanel: "togglePanel",
  goBack: "goBack",
};

const navList = [
  { id: "section1", text: "Section 1", icon: <svg data-testid="icon1" /> },
  { id: "section2", text: "Section 2", icon: <svg data-testid="icon2" /> },
];

describe("Panel component", () => {
  it("renders correctly with initial state", () => {
    render(
      <Router>
        <Panel />
      </Router>
    );

    const toggleButton = screen.getByText(buttonKeys.togglePanel);
    expect(toggleButton).toBeInTheDocument();

    expect(screen.getByText("inner")).toBeInTheDocument();
  });

  it("toggles the panel state when the button is clicked", () => {
    render(
      <Router>
        <Panel />
      </Router>
    );

    const toggleButton = screen.getByText(buttonKeys.togglePanel);
    fireEvent.click(toggleButton);
  });
});
