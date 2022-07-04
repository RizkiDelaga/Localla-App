import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import RegisterForm from "../../components/Form/RegisterForm";
import AuthLayout from "../../layouts/Auth/AuthLayout";

afterEach(cleanup);

describe("Test Register Page", () => {
  const view = () =>
    render(
      <Router>
        <AuthLayout>
          <RegisterForm />
        </AuthLayout>
      </Router>
    );

  test("should render register form", () => {
    view();
    const nameForm = screen.getByPlaceholderText("nama", { exact: false });
    expect(nameForm).toBeTruthy();
    const emailForm = screen.getByPlaceholderText("gmail", { exact: false });
    expect(emailForm).toBeTruthy();
    const passwordForm = screen.getByPlaceholderText("password", {
      exact: false,
    });
    expect(passwordForm).toBeTruthy();
  });
  test("render register button", () => {
    view();
    const registerButton = screen.getByRole("button", { name: /daftar/i });
    expect(registerButton).toBeTruthy();
  });
});
