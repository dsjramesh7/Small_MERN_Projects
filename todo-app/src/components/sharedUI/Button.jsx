const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="bg-green-400 px-4 py-2">
      {children}
    </button>
  );
};
export default Button;
