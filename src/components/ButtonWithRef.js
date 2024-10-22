import {useRef} from 'react';
export default function ButtonWithRef() {
    let count = useRef(0);
    let buttonRef = useRef(null);
    function updateCount() {
        console.log(count);
        console.log(buttonRef);
        count.current++;
    }
    return (
        <>
            <button onClick={updateCount} ref={buttonRef}>Count with Ref: {count.current}</button>
        </>
    )
}