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
        className="p-2 w-4/5"
      />
      <Button onClick={handleAddTodo}>Add</Button>
    </div>
  );
};

export default InputAddTask;
