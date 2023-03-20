import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskTableRows = (doneValue) => {
    return tasks.map(obj=>(
      <TaskRow task={obj} key={obj.name} toggleTask={toggleTask} />
    ));
  };
  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tasks</th>
        </tr>
      </thead>

      <tbody>{taskTableRows(showCompleted)}</tbody>
      <tbody>
      

      </tbody>
    </table>
  );
};