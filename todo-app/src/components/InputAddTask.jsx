const InputAddTask = () => {
  return (
    <div className="flex justify-center gap-3 mt-4">
      <input type="text" placeholder="add task here.." className="p-2 w-4/5" />
      <button className="bg-green-400 px-4 py-2">Add</button>
    </div>
  );
};

export default InputAddTask;
