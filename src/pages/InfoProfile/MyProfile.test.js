import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import MyProfile from "./MyProfile";

afterEach(cleanup);

describe("Test My Profile", () => {
  const view = () => {
    render(
      <Router>
        <MyProfile />
      </Router>
    );
  };
  test("should render My Profile image", () => {
    view();
    const imgProfile = screen.getByAltText("profile-img");
    expect(imgProfile).toBeTruthy();
  });
  test("renders option buttons", () => {
    view();
    const ubahAkunButton = screen.getByRole("heading", { name: /ubah akun/i });
    expect(ubahAkunButton).toBeTruthy();
    const pengaturanAkunButton = screen.getByRole("heading", {
      name: /pengaturan akun/i,
    });
    expect(pengaturanAkunButton).toBeTruthy();
    const logoutButton = screen.getByRole("heading", { name: /keluar/i });
    expect(logoutButton).toBeTruthy();
  });
});
