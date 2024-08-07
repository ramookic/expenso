import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import RegisterForm from "@/components/auth/register-form";
import { registerAction } from "@/lib/actions";

jest.mock("@/lib/actions");

describe("RegisterForm", () => {
  it("renders the form fields and submit button", () => {
    render(<RegisterForm />);

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign up" })).toBeInTheDocument();
  });

  it("accepts input in form fields", async () => {
    render(<RegisterForm />);

    await userEvent.type(screen.getByLabelText("Name"), "John Doe");
    await userEvent.type(
      screen.getByLabelText("Email"),
      "john.doe@example.com"
    );
    await userEvent.type(screen.getByLabelText("Password"), "password123");

    await waitFor(() => {
      expect(screen.getByLabelText("Name")).toHaveValue("John Doe");
      expect(screen.getByLabelText("Email")).toHaveValue(
        "john.doe@example.com"
      );
      expect(screen.getByLabelText("Password")).toHaveValue("password123");
    });
  });

  it("submits the form data correctly", async () => {
    const mockRegisterAction = registerAction as jest.MockedFunction<
      typeof registerAction
    >;

    render(<RegisterForm />);

    await userEvent.type(screen.getByLabelText("Name"), "John Doe");
    await userEvent.type(
      screen.getByLabelText("Email"),
      "john.doe@example.com"
    );
    await userEvent.type(screen.getByLabelText("Password"), "password123");

    userEvent.click(screen.getByRole("button", { name: "Sign up" }));

    await waitFor(() => {
      expect(mockRegisterAction).toHaveBeenCalledWith(expect.any(FormData));
    });
  });
});

afterEach(() => {
  jest.resetAllMocks();
});
