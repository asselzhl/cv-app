import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Navigation } from "../Navigation";

type NavItemID =
  | "about"
  | "education"
  | "experience"
  | "skills"
  | "portfolio"
  | "contacts"
  | "feedbacks";
interface NavListItem {
  icon: JSX.Element;
  text: string;
  id: NavItemID;
}

jest.mock("react-router-hash-link", () => ({
  HashLink: jest.fn(({ children, ...props }) => <a {...props}>{children}</a>),
}));

describe("Navigation component", () => {
  const navList: NavListItem[] = [
    { id: "about", text: "Section 1", icon: <svg data-testid="icon1" /> },
    { id: "education", text: "Section 2", icon: <svg data-testid="icon2" /> },
  ];

  it("renders correctly with given navList", () => {
    render(<Navigation navList={navList} />);

    navList.forEach((item, index) => {
      const icon = screen.getByTestId(`icon${index + 1}`);
      expect(icon).toBeInTheDocument();

      const text = screen.getByText(item.text);
      expect(text).toBeInTheDocument();
    });
  });
});
