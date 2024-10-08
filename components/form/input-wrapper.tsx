interface InputWrapperProps {
  children: React.ReactNode;
}

const InputWrapper: React.FC<InputWrapperProps> = ({ children }) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

export default InputWrapper;
