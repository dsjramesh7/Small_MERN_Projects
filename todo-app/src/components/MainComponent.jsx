import Divider from "./sharedUI/Divider";
import TaskCategoryArea from "./TaskCategoryArea";
import TaskMainArea from "./TaskMainArea";

const MainComponent = () => {
  return (
    <div className="h-4/5 w-4/5 border border-red-500 flex gap-5">
      <div className="w-1/5">
        <TaskCategoryArea />
      </div>
      <Divider />
      <div className="w-4/5">
        <TaskMainArea />
      </div>
    </div>
  );
};

export default MainComponent;
