import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";

afterEach(cleanup);

describe("Test Bottom Navigation", () => {
  const view = () => {
    render(
      <Router>
        <BottomNavigation />
      </Router>
    );
  };
  test("render bottom navigation img", () => {
    view();
    const imgBottomNavigation = screen.getAllByAltText("item-img");
    expect(imgBottomNavigation).toBeTruthy();
  });
});
