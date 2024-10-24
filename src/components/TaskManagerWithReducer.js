import Task from './Task.js';
import AddTask from './AddTask.js';
import { useRef, useState, memo, useReducer } from 'react';
import moment from 'moment';

function TaskManagerWithReducer() {
    // const [tasksState, setTasksState] = useState([]);
    const [tasks, dispatch] = useReducer(tasksReducer, []);
    const [taskInputState, setTaskInputState] = useState('');
    const taskCountRef = useRef(0);
    function addTask() {
        if(!taskInputState) return;
        taskCountRef.current++;
        dispatch({
            type: 'addTask',
            task: {
                id:  taskCountRef.current,
                task: taskInputState,
                creationDate: moment().calendar(),
                isCompleted: false,
                completionDate: ''
            }
          });
        setTaskInputState('');
    }
    function onTaskInputChange(e) {
        setTaskInputState(e.target.value);
    }
    function deleteTask(e, data) {
        dispatch({
            type: 'delete',
            id: data.id
        });
    }
    function updateTaskCompletion(e, task) {
        const isChecked = e.target.checked;
        dispatch({
            type: 'updateTaskCompletion',
            id: task.id,
            isChecked: isChecked
        });

    }
    function tasksReducer(tasks, action) {
        switch (action.type) {
          case 'addTask': {
            return [
              ...tasks,
              action.task,
            ];
          }
          case 'updateTaskCompletion': {
                var myTask = tasks.find( x => x.id === action.id);
                myTask.isCompleted = action.isChecked;
                myTask.completionDate = action.isChecked ? moment().calendar() : '';
            return [... tasks]
          }
          case 'delete': {
            return tasks.filter((t) => t.id !== action.id);
          }
          default: {
            throw Error('Unknown action: ' + action.type);
          }
        }
      }
    let Tasks = tasks.map(e => {
        return (
            <div key={e.id}>
                <Task 
                    id={e.id} 
                    task={e} 
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

export default memo(TaskManagerWithReducer);