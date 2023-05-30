//!  Returning components based on Conditional Rendering - ternary operators
function App() {
    // student data
     let n=4

    return (
        // returning JSX to UI
        <>
           <h1> Hello { (n==3)? "Alexa!!":"Priyanshu" } </h1>
            
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
