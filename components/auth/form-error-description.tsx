const FormErrorDescription: React.FC<{ message: string | undefined }> = ({
  message,
}) => {
  if (message === undefined) return null;

  return <p className="text-sm text-zinc-500">{message}</p>;
};

export default FormErrorDescription;
