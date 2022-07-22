import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthLayout from "./AuthLayout";

afterEach(cleanup);

describe("Test layout for auth", () => {
  const view = () =>
    render(
      <Router>
        <AuthLayout />
      </Router>
    );

  test("should auth img", () => {
    view();
    const authImg = screen.getByAltText("login-img");
    expect(authImg).toBeInTheDocument();
  });
});
