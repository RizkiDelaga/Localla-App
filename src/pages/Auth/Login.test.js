import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import LoginForm from "../../components/Form/LoginForm";
import AuthLayout from "../../layouts/Auth/AuthLayout";

afterEach(cleanup);

describe("Test Login Page", () => {
  const view = () =>
    render(
      <Router>
        <AuthLayout>
          <LoginForm />
        </AuthLayout>
      </Router>
    );

  test("should render register form", () => {
    view();
    const emailForm = screen.getByPlaceholderText("gmail", { exact: false });
    expect(emailForm).toBeTruthy();
    const passwordForm = screen.getByPlaceholderText("password", {
      exact: false,
    });
    expect(passwordForm).toBeTruthy();
  });
  test("render login button", () => {
    view();
    const loginButton = screen.getAllByRole("button", { name: /masuk/i });
    expect(loginButton).toBeTruthy();
  });
});
