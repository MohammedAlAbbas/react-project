import Task from './Task.js';
import AddTask from './AddTask.js';
import { useRef, useState, memo } from 'react';
import moment from 'moment';

function TaskManagerWithState() {
    const [tasksState, setTasksState] = useState([]);
    const [taskInputState, setTaskInputState] = useState('');
    const taskCountRef = useRef(0);
    function addTask() {
        if(!taskInputState) return;
        taskCountRef.current++;
        tasksState.push({
            id:  taskCountRef.current,
            task: taskInputState,
            creationDate: moment().calendar(),
            isCompleted: false,
            completionDate: ''
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
    function updateTaskCompletion(e, task) {
        const isChecked = e.target.checked;
        var myTask = tasksState.find( x => x.id === task.id);
        myTask.isCompleted = isChecked;
        myTask.completionDate = isChecked ? moment().calendar() : '';
        setTasksState([... tasksState]);

    }
    let Tasks = tasksState.map(e => {
        return (
            <div key={e.id}>
                <Task 
                    id={e.id} 
                    task={e} 
                    setTasksState={setTasksState} 
                    onClickDeleteTask={(evt) => {deleteTask(evt, e)}}
                    onTaskCheckBoxChange={(evt) => {updateTaskCompletion(evt, e)}}/>
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

export default memo(TaskManagerWithState);