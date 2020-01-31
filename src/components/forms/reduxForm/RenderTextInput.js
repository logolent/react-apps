import React from 'react';
import ErrorMessage from "../elements/ErrorMessage";


const RenderTextInput = ({
    input: { onChange, value },
    meta: { touched, error },
    name
}) => (
    <>
        <label>
            {name}
            <input
                name={name}
                type="text"
                value={value}
                onChange={onChange}
            />
            {
                (touched && error) ?
                    <ErrorMessage error={error}/> : null
            }
        </label>
    </>
);

export default RenderTextInput