import Task from '../components/Task.js';
import AddTask from '../components/AddTask.js';
import { useRef, useState } from 'react';
export default function TaskManager() {
    const [tasksState, setTasksState] = useState([]);
    const [taskInputState, setTaskInputState] = useState('');
    const taskCountRef = useRef(0);
    function addTask() {
        taskCountRef.current++;
        tasksState.push({
            id:  taskCountRef.current,
            task: taskInputState
        });
        setTasksState([...tasksState]);
        setTaskInputState('');
    }
    function onTaskInputChange(e) {
        setTaskInputState(e.target.value);
    }
    function deleteTask(e, data) {
        const filteredTasks = tasksState.filter(x => x.id !== data.id);
        setTasksState([...filteredTasks]);

    }
    let Tasks = tasksState.map(e => {
        return (
            <div key={e.id}>
                <Task id={e.id} task={e.task} onClickDeleteTask={(evt) => {deleteTask(evt, e)}}/>
            </div>
        )

    });
    return (
        <div>
            {Tasks}
            <div>
                <AddTask task={taskInputState} onClickAddTask={addTask} onTaskInputChange={onTaskInputChange} />
            </div>
        </div>
    )
}