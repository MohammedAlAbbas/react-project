import { useState } from "react"

export default function AddTask({task, onTaskInputChange, onClickAddTask}) {
    // const [taskVal, setTaskVal] = useState('');
    // function onTaskInputChange(e) {
    //     setTaskVal(e.target.value);
    // }
    // function onClickAddTask(e) {
    //     e.preventDefault();
    //     if(!taskVal) return;
        
    //     setTaskVal('');
    // }
    return (
        <>

            <input type="text" placeholder="Task" value={task} onChange={onTaskInputChange}></input>
            <button onClick={onClickAddTask}>Add Task</button>

        </>
    )
}