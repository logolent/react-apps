import React from 'react';
import FormSelect from "../elements/FormSelect";
import ErrorMessage from "../elements/ErrorMessage";


const RenderSelect = ({
    input: { onChange, value },
    meta: { touched, error },
    options
}) => (
    <>
        <FormSelect
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

export default RenderSelect;