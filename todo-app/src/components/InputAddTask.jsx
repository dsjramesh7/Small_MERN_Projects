import Button from "./sharedUI/Button";

const InputAddTask = () => {
  const handleAddTodo = () => {
    console.log("add");
  };
  return (
    <div className="flex justify-center gap-3 mt-4">
      <input
        type="text"
        placeholder="add task here.."
        aria-label="ask Input"
        className="p-2 w-4/5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <Button onClick={handleAddTodo}>Add</Button>
    </div>
  );
};

export default InputAddTask;
