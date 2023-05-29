
//! Rendering Array and Objects
function App() {

    const a=[1,2,3,4,5,6]
    const obj={
        name:"Alexa",
        age:23
    }
 

    

    return (
        // returnig JSX to UI
        <>
            <h1>Lets Run JSX !!</h1>
            <p>Array is {a}</p>
            {/* <p>Oject is {obj}</p> */} 
            {/* object cannot be rendered , Only its key value pair can be rendered */}
            <p>Name: {obj.name}</p>
            <p>Age: {obj.age}</p>

            {/* Elemts of Array  */}
            {a.map((num)=> <h2>{num}</h2>)}
              
        </>

    )





}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);