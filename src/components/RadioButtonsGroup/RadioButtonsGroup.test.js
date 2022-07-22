import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import RadioButtonsGroup from "./RadioButtonsGroup";

afterEach(cleanup);

describe("Test no data found component", () => {
  const view = () =>
    render(
      <Router>
        <RadioButtonsGroup />
      </Router>
    );

  test("should render no data found image", () => {
    view();
    const noDataImg = screen.getByRole("group");
    expect(noDataImg).toBeTruthy();
  });
});
