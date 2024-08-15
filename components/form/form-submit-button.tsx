import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

interface FormSubmitButtonProps {
  children: string;
  isLoading: boolean;
}

const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({
  children,
  isLoading,
}) => {
  return (
    <Button size="lg" type="submit" className="w-full" disabled={isLoading}>
      {isLoading ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          {children}
        </>
      ) : (
        children
      )}
    </Button>
  );
};

export default FormSubmitButton;
