
//! Rect with js 
// const reactHeading= React.createElement("h1", {

//     id:"heading",
//     children:"Hi, Priyanshu Kumar Singh"
//   });

//   ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);

//! React with JSX
const jsxHeading =
//? method 1- React Fragment
// (<React.Fragment>
//     <h1>
//         Hello JSX!!
//     </h1>
//     <p>
//         this is the paragraph
//     </p>

// </React.Fragment>
// )
//? method 2- Empty fragment
(<>
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
)
ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);

