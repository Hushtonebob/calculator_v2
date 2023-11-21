import { useState } from "react";
import ButtonNumbers from "./ButtonNumbers.js";

export default function ButtonPad({display,setDisplay,num1,setNum1,num2,setNum2}){


    const [active, setActive] = useState("Non Active");
    const [symbol, setSymbol] = useState("");
    const [plusBtn, setPlusBtn] = useState("numberButton");
    const [minusBtn, setMinusBtn] = useState("numberButton");
    const [timesBtn, setTimesBtn] = useState("numberButton");
    const [divideBtn, setDivideBtn] = useState("numberButton");
    const [answered, setAnswered] = useState(false);
    const numbersArr = ["1","2","3","4","5","6","7","8","9","0","."];

    const numberMap = numbersArr.map((e)=>{
        return(<ButtonNumbers key={e} blam={e} />);});

    const press=(e)=>{
    if(e.target.value===undefined){}
    else{
        if(display==="React Calculator" && e.target.value==="."){
            setDisplay("0.");
            setNum1(0);
        }
        else if(e.target.value==="." && display.includes(".")){}

        else if(display==="React Calculator"){ 
            setDisplay(e.target.value);
            setNum1(e.target.value);
        }
        //math active stuff below this
        
        else if(active==="Active"){
            if(e.target.value==="." && !display.includes(".")){
                setDisplay("0.");
                setNum2(0);
            }
            else if(display===""){
                setDisplay(e.target.value);
                setNum2(e.target.value);
            }
            else{
            setDisplay(display+e.target.value);
            setNum2(display+e.target.value);
         }
         //end of math active
        }
        else{
            setDisplay(display+e.target.value);
            setNum1(display+e.target.value);
        };
    //end of the top level else
    };
//end of press    
};

    const math=(e)=>{
        if(e.target.value===undefined){}
        else{
            if(e.target.value==="+" && active==="Active"){
                setActive("Non Active");
                setSymbol("");
                setPlusBtn("numberButton");
                setDisplay(num1);
                setMinusBtn("numberButton");
                setTimesBtn("numberButton");
                setDivideBtn("numberButton");
                console.log("blam");
            }
            else if(e.target.value==="+"){
                setActive("Active");
                setSymbol(e.target.value);
                setDisplay("");
                setPlusBtn("mathEngaged");
                setMinusBtn("numberButton");
                setTimesBtn("numberButton");
                setDivideBtn("numberButton");
                console.log("did it work?");
            }
            else if(e.target.value==="-" && active==="Active"){
                setActive("Non Active");
                setSymbol("");
                setMinusBtn("numberButton");
                setDisplay(num1);
                setPlusBtn("numberButton")
                setTimesBtn("numberButton");
                setDivideBtn("numberButton");
        }
            else if(e.target.value==="-"){
                setActive("Active");
                setSymbol(e.target.value);
                setDisplay("");
                setMinusBtn("mathEngaged");
                setPlusBtn("numberButton");
                setTimesBtn("numberButton");
                setDivideBtn("numberButton");
                console.log("did it work?");
        }
            else if(e.target.value==="X" && active==="Active"){
                setActive("Non Active");
                setSymbol("");
                setTimesBtn("numberButton");
                setDisplay(num1);
                setPlusBtn("numberButton");
                setMinusBtn("numberButton");
                setDivideBtn("numberButton");
            }
            else if(e.target.value==="X"){
                setActive("Active");
                setSymbol(e.target.value);
                setDisplay("");
                setTimesBtn("mathEngaged");
                setPlusBtn("numberButton");
                setMinusBtn("numberButton");
                setDivideBtn("numberButton");
                console.log("did it work?");
            }
            else if(e.target.value==="÷" && active==="Active"){
                setActive("Non Active");
                setSymbol("");
                setDivideBtn("numberButton");
                setDisplay(num1);
                setPlusBtn("numberButton");
                setMinusBtn("numberButton");
                setTimesBtn("numberButton");
            }
            else if(e.target.value==="÷"){
                setActive("Active");
                setSymbol(e.target.value);
                setDisplay("");
                setDivideBtn("mathEngaged");
                setPlusBtn("numberButton");
                setMinusBtn("numberButton");
                setTimesBtn("numberButton");
                console.log("did it work?");
            }
    }
}

    const equal=(e)=>{
        if(e.target.value===undefined){}
        else{
            if(symbol==="+"){
                let answer= parseFloat(num1)+parseFloat(num2);
                console.log(typeof answer)
                setDisplay(answer);
                setNum1(0);
                setNum2(0);
                setActive("Non Active");
                setSymbol("");
                setPlusBtn("numberButton");
            }
            else if(symbol==="-"){
                let answer= parseFloat(num1)-parseFloat(num2);
                console.log(typeof answer)
                setDisplay(answer);
                setNum1(0);
                setNum2(0);
                setActive("Non Active");
                setSymbol("");
                setMinusBtn("numberButton");
            }
            else if(symbol==="X"){
                let answer= parseFloat(num1)*parseFloat(num2);
                console.log(typeof answer)
                setDisplay(answer);
                setNum1(0);
                setNum2(0);
                setActive("Non Active");
                setSymbol("");
                setTimesBtn("numberButton");  
            }
            else if(symbol==="÷"){
                let answer= parseFloat(num1)/parseFloat(num2);
                console.log(typeof answer)
                setDisplay(answer);
                setNum1(0);
                setNum2(0);
                setActive("Non Active");
                setSymbol("");
                setDivideBtn("numberButton");  
            }
        };
    };

    return(
        <div>
            <div className="buttonPad" onClick={press}>
                {numberMap}
            </div>
            <div className="otherButtonPad" onClick={math}>
                <button id={plusBtn} value={"+"}>+</button>
                <button id={minusBtn} value="-">-</button>
                <button id={timesBtn} value={"X"}>X</button>
                <button id={divideBtn} value={"÷"}>÷</button>
                <button id="numberButton" value={"%"}>%</button>
            </div>
            <button id="equal" onClick={equal}>=</button>
            <button id="AC">AC</button>
        </div>
    );
};