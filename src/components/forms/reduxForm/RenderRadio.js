import React from 'react';
import FormRadio from "../elements/FormRadio";
import ErrorMessage from "../elements/ErrorMessage";


const RenderRadio = ({
    input: { onChange, value },
    meta: { touched, error },
    options,
    name
}) => (
    <>
        <FormRadio
            name={name}
            options={options}
            selectedValue={value}
            onChange={onChange}
        />
        {
            (touched && error) ?
                <ErrorMessage error={error}/> : null
        }
    </>
);

export default RenderRadio;