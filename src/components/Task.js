import { useState } from "react";
import './Task.css';
export default function Task({id, task, onClickDeleteTask}) {

    const [isTaskCompleted, setIsTaskCompleted] = useState(false);

    function onTaskChange(e) {
        setIsTaskCompleted(e.target.checked);
    }
    return (
        <div key={id}>
        <input type="checkbox" checked={isTaskCompleted} onChange={onTaskChange}/>
        <label className={isTaskCompleted? 'task-completed': ''}>{task}</label>
        <button style={{marginLeft: '10px'}} onClick={onClickDeleteTask}>Delete</button>
        </div>
    )
}