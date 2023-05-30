//!  Returning components based on Conditional Rendering - ternary operators
// function App() {
   // student data
//      let n=4

//     return (
       // returning JSX to UI
//         <>
//            <h1> Hello { (n==3)? "Alexa!!":"Priyanshu" } </h1>
            
//         </>
//     );
// }
//!  Returning components based on Conditional Rendering - AND operators
// function App() {
    // student data
//      let loggedIn = false;
    //  let loggedIn = true;

//     return (
       // returning JSX to UI
//         <>
//             <h1>Hello {(loggedIn)?"Alexa !!":"User"}</h1>
//              {/* since it is show the last truly value so we put 2nd para in last parameter */}
//             <p>{ loggedIn && "Welcome Alexa to your profile"  }</p>            
//         </>
//     );
// }
//!  Returning components based on Conditional Rendering - OR operators
function App() {
     
     let loggedIn = true;
      let first="Priyanshu"
      let lastname="Singh"

    return (
        // JSX to UI
        <>
            <h1>Hello {(loggedIn)? lastname || first :"User"}</h1>
             {/* since it is show the last truly value so we put 2nd para in last parameter */}
            <p>{ loggedIn && "Welcome Alexa to your profile"  }</p>            
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
