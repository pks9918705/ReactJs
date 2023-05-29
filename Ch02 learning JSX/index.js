

function App() {
    //below return only JSX should be there
    // variable is declared here
    var name = "Priyanshu Kumar Singh"
    var age = 23
    //indefined values and boolean value are not rendered on screen
    var demo = null
    var bool = false

    //function to embedded into JSX
    function sum(a, b) {
        return a + b
    }

    //it is returning JSX to header / header is js 
    const header = <h2>JSX EXPRESSION</h2>
    //here JSX is assigned to js and it now it is used as variable and can be access to JSX using {}

    return (
        // returnig JSX to UI
        <>
            <h1>Lets Run JSX !!</h1>
            {header}
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>demo: {demo}</p>
            <p>Boolean: {bool}</p>
            <p>Sum of 3 and 5: {sum(3, 5)}</p>
        </>

    )





}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);