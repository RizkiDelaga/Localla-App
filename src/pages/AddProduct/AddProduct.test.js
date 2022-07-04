import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AddProduct from "./AddProduct";

afterEach(cleanup);

describe("Test Detail Product", () => {
  test("should render add product form", () => {
    render(
      <Router>
        <AddProduct />
      </Router>
    );
    const namaForm = screen.getByPlaceholderText("nama", { exact: false });
    expect(namaForm).toBeTruthy();
    const hargaForm = screen.getByPlaceholderText("Rp", {
      exact: false,
    });
    expect(hargaForm).toBeTruthy();
    const kategoriForm = screen.getByRole("combobox", {
      exact: false,
    });
    expect(kategoriForm).toHaveTextContent(/kategori/i);
    expect(kategoriForm).toBeInTheDocument();
    const alamatForm = screen.getByPlaceholderText("jalan", { exact: false });
    expect(alamatForm).toBeTruthy();
  });

  test("renders buttons", () => {
    render(
      <Router>
        <AddProduct />
      </Router>
    );
    const submitButton = screen.getByRole("button", { name: /terbitkan/i });
    expect(submitButton).toBeTruthy();
    const previewButton = screen.getByRole("button", { name: /preview/i });
    expect(previewButton).toBeTruthy();
  });
});
