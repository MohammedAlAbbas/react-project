
export default function NestedComponent({children}) {
return (
    <>
    <div style={{backgroundColor: 'lightblue', padding: '1rem', margin: '1rem'}}>
        <p>The nested components are listed below: </p>
        {children}
    </div>

    </>
)
}