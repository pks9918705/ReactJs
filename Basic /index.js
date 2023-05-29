 
//! Component in React

//react component
function App(){
    return <>
        <h1>
            Hello JSX!!
        </h1>
        <p>
            this is the paragraph
            <ul>
                <li>About</li>
                <li>Contact Us</li>
                <li>Docs     </li>
            </ul>
        </p>
    
    </>
}


ReactDOM.createRoot(document.getElementById("root")).render(App());

