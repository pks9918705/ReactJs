
//! Component in React

function Name(){
    return (
        <>
        <p>JSX is Javascript XML</p>
        </>
    )
}
//react Function component using Arrow Function
const App = () => (
     <>
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

        <Name/>  
    
    </>
)
// calling another comp fxn from other  components function
//calling two components side by side
ReactDOM.createRoot(document.getElementById("root")).render(  <App/>   );// called it as component

 