import React from 'react';
import ErrorMessage from "../elements/ErrorMessage";


const RenderDateTimePicker = ({
    input: { onChange, value },
    meta: { touched, error }
}) => (
    <>
        <label>
            <input
                type="date"
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

export default RenderDateTimePicker;