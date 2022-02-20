import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";

import { UserDetailPage } from "../components/users/UserDetailPage";

const MockUserDetailPage = () => {
  return (
    <BrowserRouter>
      <UserDetailPage />
    </BrowserRouter>
  );
};

describe("UserDetailPage is render", () => {
  test("should return true", () => {
    render(<MockUserDetailPage />);
    const title = screen.getByText("User Info");
    expect(title).toBeInTheDocument();
  });
});

describe("UserPage show data from the async call", () => {
  test("should return true", async () => {
    render(<MockUserDetailPage />);
    const userPageDivElement = await screen.findByTestId("testUser");
    expect(userPageDivElement).toBeInTheDocument();
  });
});

describe("Test on <UserDetailPage />", () => {
  test("snapshot testing", () => {
    const tree = renderer.create(<MockUserDetailPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
