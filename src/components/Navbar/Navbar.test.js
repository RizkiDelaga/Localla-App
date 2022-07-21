import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

afterEach(cleanup);

describe("Test navbar component", () => {
  const view = () =>
    render(
      <Router>
        <Navbar />
      </Router>
    );

  test("should render login button", () => {
    view();
    const loginBtn = screen.getByRole("button", { name: /masuk/i });
    expect(loginBtn).toBeTruthy();
  });
});
