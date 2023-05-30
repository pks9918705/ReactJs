//! rerendering the App after change in UI- 
// virtual DOM is working here 
let score = 0;
let wicket = 0;
let ballWiseRes = []


function addScore(s) {
    if (wicket < 11) {
        score += s;
        ballWiseRes.push(s)
        // console.log(score);
        console.log(ballWiseRes);
        rootElement.render(<App />)

    }

}
function wicketFxn() {

    if (wicket < 11) {
        wicket += 1;
        ballWiseRes.push("W")
        console.log(ballWiseRes);
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

const spanStyle={
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
//  Creating score keeper app
function App() {

    return (
        <>
            <h1>SCORE KEEPER</h1>
            <h2>SCORE: {score}/{wicket}</h2>

            {/* calling Score button component  */}
            <ScoreButtons />
            <Result />

        </>
    );
}

var rootElement = ReactDOM.createRoot(document.getElementById("root"))
rootElement.render(<App />)



