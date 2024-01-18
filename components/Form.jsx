import { useState } from "react";

function Form(props) {

    const [ name, setName ] = useState("");

    function handleName(e) {
        setName(e.target.value);
    }

    return (
        <div>
            Name:
            <input type ="text" value={name} onChange={handleName}/>
            <button onClick={props.handleCalculate}>
                Calculate
            </button>
        </div>
    )
}

export default Form;