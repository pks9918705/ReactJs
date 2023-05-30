//! rerendering the App after change in UI- 
// virtual DOM is working here 
let score = 0;
let wicket = 0;

function addOne() {
    if(wicket<11){
    score += 1;
    console.log(score);
    rootElement.render(<App />)
    }
}
function addScore(s) {
    if(wicket<11){
        score += s;
    console.log(score);
    rootElement.render(<App />)
    }
    
}
function wicketFxn(){

    if(wicket<11){
        wicket += 1;
    rootElement.render(<App />)
    }
    
}
//  Creating score keeper app
function App() {

    return (
        <>
            <h1>SCORE KEEPER</h1>
            <h2>SCORE: {score}/{wicket}</h2>

            <div>
                <button onClick={addOne}>1</button>
                {/* <button onClick={addScore(2)}>2</button> */}
                {/* Above will get trapped in infinte loop  */}
                {/* to make it work we use inline function */}
                <button onClick={()=>addScore(2)}>2</button>
                <button onClick={()=>addScore(3)}>3</button>
                <button onClick={()=>addScore(4)}>4</button>
                <button onClick={()=>addScore(5)}>5</button>
                <button onClick={()=>addScore(6)}>6</button>
                 
                <button onClick={wicketFxn}>wicket</button>
            </div>
        </>
    );
}

var rootElement = ReactDOM.createRoot(document.getElementById("root"))
rootElement.render(<App />)



 