import { useState, useRef } from "react";
export default function StateObject() {
    let obj = {
        firstName: '',
        lastName: '',
        position: ''
    };
    const [state, setState] = useState(obj);
    const stateRef = useRef(obj);

    function handleFirstNameChange(e) {
        stateRef.current.firstName = e.target.value;
        setState({...stateRef.current});
    }
    function handleLastNameChange(e) {
        stateRef.current.lastName = e.target.value;
        setState({...stateRef.current});
    }
    function handlePositionChange(e) {
        stateRef.current.position = e.target.value;
        setState({...stateRef.current});
    }

    return (
        <>

        <label>first Name:</label>
        <input value={state.firstName} onChange={handleFirstNameChange}></input>

        <label>last Name:</label>
        <input value={state.lastName} onChange={handleLastNameChange}></input>

        <label>position: </label>
        <input value={state.position} onChange={handlePositionChange}></input>


        {state.firstName && <p>My name is {state.firstName} {state.lastName} and I'm a {state.position}</p>}

        </>
    )
}