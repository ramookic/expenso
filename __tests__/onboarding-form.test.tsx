import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import OnboardingForm from "@/components/auth/onboarding-form";
import { finishOnboardingAction } from "@/lib/actions";
import userEvent from "@testing-library/user-event";

class MockPointerEvent extends Event {
  button: number;
  ctrlKey: boolean;
  pointerType: string;

  constructor(type: string, props: PointerEventInit) {
    super(type, props);
    this.button = props.button || 0;
    this.ctrlKey = props.ctrlKey || false;
    this.pointerType = props.pointerType || "mouse";
  }
}
window.PointerEvent = MockPointerEvent as any;
window.HTMLElement.prototype.scrollIntoView = jest.fn();
window.HTMLElement.prototype.hasPointerCapture = jest.fn();
window.HTMLElement.prototype.releasePointerCapture = jest.fn();

jest.mock("@/lib/actions");

const mockCurrencies = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
];

describe("OnboardingForm", () => {
  it("renders the form fields and submit button", () => {
    render(<OnboardingForm currencies={mockCurrencies} />);

    expect(screen.getByText("Select a currency")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Continue" })
    ).toBeInTheDocument();
  });

  it("accepts input and submits data correctly", async () => {
    const mockFinishOnboardingAction =
      finishOnboardingAction as jest.MockedFunction<
        typeof finishOnboardingAction
      >;

    const { findByTestId } = render(
      <OnboardingForm currencies={mockCurrencies} />
    );

    const selectElement = await findByTestId("select-currency");

    fireEvent.pointerDown(
      selectElement,
      new MockPointerEvent("pointerdown", { ctrlKey: false, button: 0 })
    );

    const option = screen.getByRole("option", { name: "USD - US Dollar" });
    expect(option).toBeInTheDocument();
    await userEvent.click(option);

    fireEvent.click(screen.getByRole("button", { name: "Continue" }));

    await waitFor(() => {
      expect(mockFinishOnboardingAction).toHaveBeenCalledWith(
        expect.any(FormData)
      );
    });

    await waitFor(() => {
      const formData = mockFinishOnboardingAction.mock.calls[0][0] as FormData;
      expect(formData.get("currency")).toBe("USD");
    });
  });
});

afterEach(() => {
  jest.resetAllMocks();
});
