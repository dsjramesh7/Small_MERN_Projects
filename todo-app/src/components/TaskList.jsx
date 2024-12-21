const TaskList = () => {
  return (
    <div className="flex justify-between px-4">
      <input type="checkbox" />
      <div className="flex gap-3">
        <p>1</p>
        <h1>play violin</h1>
      </div>

      <div className="flex gap-3">
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default TaskList;
