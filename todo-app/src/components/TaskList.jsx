import Button from "./sharedUI/Button";

const TaskList = () => {
  const handleDelete = () => {
    console.log("dlete");
  };
  const handleEdit = () => {
    console.log("edit");
  };
  return (
    <div className="flex justify-between px-4">
      <input type="checkbox" />
      <div className="flex gap-3">
        <p>1</p>
        <h1>play violin</h1>
      </div>

      <div className="flex gap-3">
        <Button onClick={handleDelete}>Delete</Button>
        <Button onClick={handleEdit}>Edit</Button>
      </div>
    </div>
  );
};

export default TaskList;
