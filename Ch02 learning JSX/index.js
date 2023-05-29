

function App(){
    //below return only JSX should be there
    // variable is declared here
    var name="Priyanshu Kumar Singh"
    var age=23
    //indefined values and boolean value are not rendered on screen
    var demo =null
    var bool=false

    return(
    <>
         <h1>Lets Run JSX !!</h1>
         <p>Name: {name}</p>
         <p>Age: {age}</p>
         <p>demo: {demo}</p>
         <p>Boolean: {bool}</p>
        </>
       
    )
            

    
    
    
}

ReactDOM.createRoot(document.getElementById("root")).render( <App/>);