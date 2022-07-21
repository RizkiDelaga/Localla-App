import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ShareButtons from "./ShareButtons";

afterEach(cleanup);

describe("Test share buttons component", () => {
  const view = () =>
    render(
      <Router>
        <ShareButtons />
      </Router>
    );

  test("should render buttons", () => {
    view();
    const shareBtn = screen.getAllByRole("button");
    expect(shareBtn).toBeTruthy();
  });
  test("should render share icons", () => {
    view();
    const shareIcons = screen.getAllByRole("img");
    expect(shareIcons).toBeTruthy();
  });
});
