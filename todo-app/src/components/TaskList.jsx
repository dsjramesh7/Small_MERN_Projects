import Button from "./sharedUI/Button";

const TaskList = () => {
  const handleDelete = () => {
    console.log("dlete");
  };
  const handleEdit = () => {
    console.log("edit");
  };
  return (
    <div className="flex justify-between items-center px-4 py-3 bg-gray-100 rounded-lg shadow-md">
      <input type="checkbox" className="w-5 h-5 accent-blue-500" />
      <div className="flex gap-3">
        <p className="text-gray-500 font-medium">1</p>
        <h1 className="text-gray-700 font-semibold">Play violin</h1>
      </div>

      <div className="flex gap-3">
        <Button onClick={handleDelete} variant="secondary">
          Edit
        </Button>
        <Button onClick={handleDelete} variant="danger">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TaskList;
