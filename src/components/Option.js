import React from 'react'

function Option({register, id, name, title, errors}) {
    return(
        <label htmlFor={id}>
            <input ref={register} type="radio" id={id} name={name} value={id}/>
            {title}
            {errors}
        </label>
    )
}

export default Option;