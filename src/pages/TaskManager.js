import TaskManagerWithReducer from "../components/TaskManagerWithReducer";
import TaskManagerWithState from "../components/TaskManagerWithState";
import {GlobalContext} from '../App.js';
import { useContext, useState } from "react";

export default function TaskManager() {
    const [globalContext, setGlobalContext] = useContext(GlobalContext);
    return (
        <>
            <p>{globalContext.text}</p>
            <div>
                Task Manager with useState Hook:
                <TaskManagerWithState />
            </div>
            <div>Task Manager With useReducer Hook:</div>
            <TaskManagerWithReducer />
        </>
    )
}