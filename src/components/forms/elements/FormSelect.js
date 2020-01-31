import React from "react";
import PropTypes from 'prop-types';


const FormSelect = React.forwardRef(({ name, options = [], selectedValue, onChange }, ref) =>{
    return (
        <select ref={ref} name={name} onChange={onChange} value={selectedValue}>
            {options.map(({ id, value }) => (
                <option key={id} value={id}>{value}</option>
            ))}
        </select>
    )
});

FormSelect.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    selectedValue: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default FormSelect;