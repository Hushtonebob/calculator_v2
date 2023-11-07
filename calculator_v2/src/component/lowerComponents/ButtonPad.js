export default function ButtonPad(){
    return(
        <div>
                        <div className="buttonPad">
                <button id="numberButton" value={1}>1</button>
                <button id="numberButton" value={2}>2</button>
                <button id="numberButton" value={3}>3</button>
                <button id="numberButton" value={4}>4</button>
                <button id="numberButton" value={5}>5</button>
                <button id="numberButton" value={6}>6</button>
                <button id="numberButton" value={7}>7</button>
                <button id="numberButton" value={8}>8</button>
                <button id="numberButton" value={9}>9</button>
                <button id="numberButton" value={0}>0</button>
                <button id="numberButton" value={"."}>.</button>
            </div>
            <div className="otherButtonPad">
                <button id="numberButton" value="+">+</button>
                <button id="numberButton" value="-">-</button>
                <button id="numberButton" value={"X"}>X</button>
                <button id="numberButton" value={"÷"}>÷</button>
                <button id="numberButton" value={"%"}>%</button>
            </div>
            <button id="equal">=</button>
            <button id="AC">AC</button>
        </div>
    );
};