
//! Rect with js 
// const reactHeading= React.createElement("h1", {

//     id:"heading",
//     children:"Hi, Priyanshu Kumar Singh"
//   });

//   ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);

//! React with JSX
const jsxHeading = (<React.Fragment>
    <h1>
        Hello JSX!!
    </h1>
    <p>
        this is the paragraph
    </p>

</React.Fragment>
)
ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);

