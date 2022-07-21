import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NoDataFound from "./NoDataFound";

afterEach(cleanup);

describe("Test no data found component", () => {
  const view = () =>
    render(
      <Router>
        <NoDataFound />
      </Router>
    );

  test("should render no data found image", () => {
    view();
    const noDataImg = screen.getByAltText("no-data");
    expect(noDataImg).toBeTruthy();
  });
});
