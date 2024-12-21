import TaskCategoryArea from "./TaskCategoryArea";
import TaskMainArea from "./TaskMainArea";

const MainComponent = () => {
  return (
    <div className="h-4/5 w-4/5 border border-red-500 flex gap-5">
      <div className="w-1/5">
        <TaskCategoryArea />
      </div>
      <div className="border border-red-500 w-2 bg-gray-500"></div>
      <div className="w-4/5">
        <TaskMainArea />
      </div>
    </div>
  );
};

export default MainComponent;
