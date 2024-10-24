import { useContext, useState } from "react";
import TaskManagerWithState from "../components/TaskManagerWithState";
import { GlobalContext } from '../App.js';

export default function About() {
    const [globalContext, setGlobalContext] = useContext(GlobalContext);
    function onClickUpdateContextText() {
        setGlobalContext({ text: 'global context text is updated!!' });
    }
    return (
        <>
            <p>This is about page.</p>
            <div style={{padding: '1em', border: '1px solid black'}}>
            <p>{globalContext.text}</p>
            <button onClick={onClickUpdateContextText}>Update global context text</button>
            </div>
            <TaskManagerWithState />
        </>
    )
}