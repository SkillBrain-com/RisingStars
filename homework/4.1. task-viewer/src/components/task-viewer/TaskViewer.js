import "./TaskViewer.css";
import TaskCard from "../task-card/TaskCard";

function TaskViewer(props) {
    return (
        <div className="task-viewer">
            <TaskCard
                id={props.data[0].id}
                status={props.data[0].status}
                name={props.data[0].name}
                dueDate={props.data[0].dueDate}
            />
            <TaskCard
                id={props.data[1].id}
                status={props.data[1].status}
                name={props.data[1].name}
                dueDate={props.data[1].dueDate}
            />
            <TaskCard
                id={props.data[2].id}
                status={props.data[2].status}
                name={props.data[2].name}
                dueDate={props.data[2].dueDate}
            />
        </div>
        
    );
}

export default TaskViewer;
