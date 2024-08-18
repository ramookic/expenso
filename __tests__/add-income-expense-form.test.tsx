import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddIncomeExpenseForm from "@/components/dashboard/add-income-expense-form";
import { addIncomeExpenseAction } from "@/lib/actions";

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

describe("AddIncomeExpenseForm", () => {
  it("renders the form fields and submit button", () => {
    const mockSetOpen = jest.fn();

    render(<AddIncomeExpenseForm isAddIncome={true} setOpen={mockSetOpen} />);

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Amount")).toBeInTheDocument();
    expect(screen.getByText("Select a category")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Create" })).toBeInTheDocument();
  });

  it("accepts input and submits data correctly", async () => {
    const mockSetOpen = jest.fn();
    const mockAddIncomeExpenseAction =
      addIncomeExpenseAction as jest.MockedFunction<
        typeof addIncomeExpenseAction
      >;

    const { findByTestId } = render(
      <AddIncomeExpenseForm isAddIncome={true} setOpen={mockSetOpen} />
    );

    await userEvent.type(screen.getByLabelText("Title"), "Salary");
    await userEvent.type(
      screen.getByLabelText("Description"),
      "November 2023 - 3 work weeks one holiday"
    );
    await userEvent.type(screen.getByLabelText("Amount"), "1400");

    const selectElement = await findByTestId("select-category");

    fireEvent.pointerDown(
      selectElement,
      new MockPointerEvent("pointerdown", { ctrlKey: false, button: 0 })
    );

    const option = screen.getByRole("option", { name: "Salary" });
    expect(option).toBeInTheDocument();
    await userEvent.click(option);

    fireEvent.click(screen.getByRole("button", { name: "Create" }));

    await waitFor(() => {
      expect(mockAddIncomeExpenseAction).toHaveBeenCalledWith(
        expect.any(FormData),
        true
      );
    });

    const formData = mockAddIncomeExpenseAction.mock.calls[0][0] as FormData;

    expect(formData.get("title")).toBe("Salary");
    expect(formData.get("description")).toBe(
      "November 2023 - 3 work weeks one holiday"
    );
    expect(formData.get("amount")).toBe("1400");
    expect(formData.get("category")).toBe("Salary");
  });
});

afterEach(() => {
  jest.resetAllMocks();
});
