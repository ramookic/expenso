import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LoginForm from "@/components/auth/login-form";
import { loginAction } from "@/lib/actions";

jest.mock("@/lib/actions");

describe("Login Form", () => {
  it("renders the form fields and submit button", () => {
    render(<LoginForm />);

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Log in" })).toBeInTheDocument();
  });

  it("accepts input in form fields", async () => {
    render(<LoginForm />);

    await userEvent.type(
      screen.getByLabelText("Email"),
      "john.doe@example.com"
    );
    await userEvent.type(screen.getByLabelText("Password"), "password123");

    await waitFor(() => {
      expect(screen.getByLabelText("Email")).toHaveValue(
        "john.doe@example.com"
      );
      expect(screen.getByLabelText("Password")).toHaveValue("password123");
    });
  });

  it("submits the form data correctly", async () => {
    const mockLoginAction = loginAction as jest.MockedFunction<
      typeof loginAction
    >;

    render(<LoginForm />);

    await userEvent.type(
      screen.getByLabelText("Email"),
      "john.doe@example.com"
    );
    await userEvent.type(screen.getByLabelText("Password"), "password123");

    userEvent.click(screen.getByRole("button", { name: "Log in" }));

    await waitFor(() => {
      expect(mockLoginAction).toHaveBeenCalledWith(expect.any(FormData));
    });
  });
});

afterEach(() => {
  jest.resetAllMocks();
});
