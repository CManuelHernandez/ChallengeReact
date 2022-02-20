import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";

import { UsersPage } from "../components/users/UsersPage";

describe("UserPage is render", () => {
  test("should return true", () => {
    render(<UsersPage />);
    const title = screen.getByText("Carlos Manuel Hernández Montero");
    expect(title).toBeInTheDocument();
  });
});

const MockUsersPage = () => {
  return (
    <BrowserRouter>
      <UsersPage />
    </BrowserRouter>
  );
};

describe("UserPage show data from the async call", () => {
  test("should return true", async () => {
    render(<MockUsersPage />);
    const userPageDivElement = await screen.findByTestId("testUser1");
    expect(userPageDivElement).toBeInTheDocument();
  });
});

describe("Test on <UserPage />", () => {
  test("snapshot testing", () => {
    const tree = renderer.create(<UsersPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
