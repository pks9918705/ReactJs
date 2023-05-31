//! rerendering the App after change in UI- 
// virtual DOM is working here 
let score = 0;
let wicket = 0;
let ballWiseRes = []
let hit = 0;
//? creeating ref
let inputRef=React.createRef()


function addScore(s) {
    if (wicket < 11) {
        hit = s
        // score += s;
        // ballWiseRes.push(s)
        // console.log(score);
        // console.log(ballWiseRes);
        rootElement.render(<App />)

    }

}
function wicketFxn() {

    if (wicket < 11) {
        hit = "W"

        // wicket += 1;
        // ballWiseRes.push("W")
        // console.log(ballWiseRes);
        rootElement.render(<App />)
    }

}

// creating a score component
const ScoreButtons = () => (
    <div>
        <button onClick={() => addScore(0)}>0</button>
        <button onClick={() => addScore(1)}>1</button>
        {/* <button onClick={addScore(2)}>2</button> */}
        {/* Above will get trapped in infinte loop  */}
        {/* to make it work we use inline function */}
        <button onClick={() => addScore(2)}>2</button>
        <button onClick={() => addScore(3)}>3</button>
        <button onClick={() => addScore(4)}>4</button>
        <button onClick={() => addScore(5)}>5</button>
        <button onClick={() => addScore(6)}>6</button>
        <button onClick={wicketFxn}>wicket</button>


    </div>


)

const spanStyle = {
    color: 'red',
    fontWeight: 'bold',
    fontSize: '18px',
}
// Ball Wise Display
const Result = () => (
    <div>

        {ballWiseRes.map((num, index) => (
            <>
                {index % 6 == 0 ? <br /> : ""}
                <span key={index}>
                    {
                        num === 0 ? <strong>.</strong> : (num === "W" ? <span style={spanStyle}> {num} </span> : num)
                    }&nbsp;&nbsp;&nbsp;
                </span>
            </>
        ))
        }

    </div>
)
//handler to prevent default submitting behaviour
function handleSubmit(e) {
    e.preventDefault()

    
    //! in array we can give html elements 
    ballWiseRes.unshift(
        // <span>{hit}{", "}{inputRef.current.value}</span>
        <span>{`${hit} , ${inputRef.current.value}`}</span> 
    )
    console.log(ballWiseRes);

    if(hit =="w" || hit == "W"){
        wicket+=1;

    }
    else {
        score += hit;
    }

    console.log('*******',inputRef.current.value);
    //if you don't render App then see that inputRef.current.value is empty because it is not a react component (uncontrolled component) and resct does not suggest to use
    inputRef.current.value=""
    hit=0
    
    rootElement.render(<App />)

}

// creating a Form component 
const Form = () => (
    <form onSubmit={handleSubmit}>
        <input value={hit} />
         {/* we are extracting the value of input field by using refference(ref)
        it provides us to access the value of node directly */}
        {/* create a ref and assign the value below input box and now i can access it from anywhere */}
        <input ref={inputRef} placeholder="Add comment" />
        <button>Submit </button>
    </form>
)
//  Creating score keeper app
function App() {

    return (
        <>
            <h1>SCORE KEEPER</h1>
            <h2>SCORE: {score}/{wicket}</h2>

            {/* calling Score button component  */}
            <ScoreButtons />
            {/* <Result /> */}
            <br />
            <hr />
            <Form />
            <br />
            <hr />

            <div>
                {ballWiseRes.map((ball, index) => (
                    <p key={index}>{ball}</p>
                )

                )}

            </div>





        </>
    );
}

var rootElement = ReactDOM.createRoot(document.getElementById("root"))
rootElement.render(<App />)



