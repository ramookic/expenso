interface ErrorMessageParams {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageParams> = ({ message }) => {
  return (
    <div className="bg-red-100 p-2 text-center rounded-full">
      <p className="text-sm font-semibold text-red-500">{message}</p>
    </div>
  );
};

export default ErrorMessage;
