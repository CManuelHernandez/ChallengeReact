import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import { UserCard } from "../components/users/UserCard";

describe("UserCard is render", () => {
  test("should return true", () => {
    render(<UserCard />);
    const title = screen.getByText("ID :");
    expect(title).toBeInTheDocument();
  });
});

describe("Test on <UserCard />", () => {
  test("snapshot testing", () => {
    const tree = renderer.create(<UserCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
