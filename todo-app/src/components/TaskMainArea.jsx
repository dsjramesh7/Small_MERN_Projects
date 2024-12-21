import InputAddTask from "./InputAddTask";
import TaskList from "./TaskList";

const TaskMainArea = () => {
  return (
    <div className="flex flex-col gap-3">
      <InputAddTask />
      <TaskList />
    </div>
  );
};

export default TaskMainArea;
