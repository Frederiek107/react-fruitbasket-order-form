import React from 'react'

function Label({register, title, id, condition}) {
    return (
    <label htmlFor={id}>
        {title}:
        <input ref={register} type="input" id={id} name={id}/>
        {condition}
    </label>
    )
}



export default Label;