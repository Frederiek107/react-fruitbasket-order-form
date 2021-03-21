import React from 'react'

function ResetButton({functionReset}){
    return (
        <button type="button" id="resetbutton" onClick={functionReset}>reset</button>
    )
}


export default ResetButton;