import React, { useState } from "react";

const MyAccordion=({question,answer})=>{
    const [show,setShow] = useState(false);
    const down = () => {
        setShow(!show)
    }
    return (
        <>
            <div className="main-heading" onClick={down}>
                <p>{ show ? "-" : "+" } </p>
                <h3> {question}</h3>
            </div>
            {
                show && <p className="answer"> {answer}</p>
            }
        </>
    )
}
export default MyAccordion


