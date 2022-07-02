import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import EditProfile from "./EditProfile";

afterEach(cleanup);

describe("Test Detail Product", () => {
  const view = () => {
    render(
      <Router>
        <EditProfile />
      </Router>
    );
  };
  test("renders edit profile form", () => {
    view();
    const namaForm = screen.getByPlaceholderText("nama", { exact: false });
    expect(namaForm).toBeTruthy();
    const kotaForm = screen.getByRole("combobox");
    expect(kotaForm).toHaveTextContent(/kota/i);
    expect(kotaForm).toBeInTheDocument();
    const alamatForm = screen.getByPlaceholderText("jalan", {
      exact: false,
    });
    expect(alamatForm).toBeTruthy();
    const nomorHpForm = screen.getByPlaceholderText("+62", {
      exact: false,
    });
    expect(nomorHpForm).toBeTruthy();
  });
  test("renders submit form", () => {
    view();
    const submitButton = screen.getByRole("button", { name: /simpan/i });
    expect(submitButton).toBeInTheDocument();
  });
});
