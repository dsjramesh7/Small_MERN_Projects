const Button = ({ onClick, children, variant = "primary" }) => {
  const defaultStyles =
    "px-4 py-2 rounded-lg transition duration-200 font-medium ";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const applyStyles = variants[variant];
  return (
    <button onClick={onClick} className={`${defaultStyles} ${applyStyles}`}>
      {children}
    </button>
  );
};
export default Button;
