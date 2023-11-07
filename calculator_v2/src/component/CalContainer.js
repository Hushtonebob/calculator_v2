import Display from "./lowerComponents/Display";
import ButtonPad from "./lowerComponents/ButtonPad";

export default function CalContainer(){
    return(
        <div className="calContainer">
            <Display />
            <ButtonPad />
        </div>
    );
};