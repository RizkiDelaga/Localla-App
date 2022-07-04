import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import DetailProduct from "./DetailProduct";

afterEach(cleanup);

describe("Test Detail Product", () => {
  const view = () =>
    render(
      <Router>
        <DetailProduct />
      </Router>
    );
  test("should render the title", () => {
    view();
    const detailHeader = screen.getByTestId("testH5");
    expect(detailHeader).toHaveTextContent("Deskripsi");
  });
  test("render negotiation button", () => {
    view();
    const negotiationButton = screen.getByRole("button", { name: /nego/i });
    expect(negotiationButton).toBeTruthy();
  });
});
