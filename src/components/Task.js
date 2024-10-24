import { useState } from "react";
import './Task.scss';
export default function Task({id, task, onClickDeleteTask, onTaskCheckBoxChange}) {

   // const [isTaskCompleted, setIsTaskCompleted] = useState(false);

    // function onTaskChange(e) {
    //     const isChecked = e.target.checked;
    //     if(isChecked) {
            
    //     }
    //     setIsTaskCompleted(isChecked);
    // }
    const completedDate = task.isCompleted ? <> | Completed on: {task.completionDate} </>: <></>;
    return (
        <div key={id}>
        <input type="checkbox" checked={task.isCompleted} onChange={onTaskCheckBoxChange}/>
        <label className={task.isCompleted? 'task-completed': ''}>{task.task}</label>
        <button style={{marginLeft: '10px'}} onClick={onClickDeleteTask}>Delete</button>
        <span>Created on: {task.creationDate} {completedDate} </span>
        </div>
    )
}