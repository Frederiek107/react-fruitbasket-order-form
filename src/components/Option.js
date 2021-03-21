import React from 'react'
import { useForm } from 'react-hook-form';

function Option({id, name, title, errors}) {
    const {register} = useForm();
    return(
        <label htmlFor={id}>
            <input ref={register({required: true})} type="radio" id={id} name={name} value={id}/>
            {title}
            {errors}
        </label>
    )
}

export default Option;