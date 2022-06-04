import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Login from "../pages/login";

const mockRouterPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}));

describe("Login", () => {
  it("renders", () => {
    const { container } = render(<Login />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should show errors if no username or password provided", async () => {
    const user = userEvent.setup();

    render(<Login />);

    const loginButton = screen.getByRole("button", { name: "Login" });

    await user.click(loginButton);

    expect(screen.getByText("A username is required")).toBeInTheDocument();
    expect(screen.getByText("A password is required")).toBeInTheDocument();
  });

  it("should show password required if username but no password provided", async () => {
    const user = userEvent.setup();

    render(<Login />);

    const loginButton = screen.getByRole("button", { name: "Login" });
    const usernameInput = screen.getByLabelText("Username");

    await user.type(usernameInput, "incard");
    await user.click(loginButton);

    expect(screen.getByText("A password is required")).toBeInTheDocument();
  });

  it("should show username required if password but no username provided", async () => {
    const user = userEvent.setup();

    render(<Login />);

    const loginButton = screen.getByRole("button", { name: "Login" });
    const passwordInput = screen.getByLabelText("Password");

    await user.type(passwordInput, "incard");
    await user.click(loginButton);

    expect(screen.getByText("A username is required")).toBeInTheDocument();
  });
});
