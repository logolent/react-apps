import React from "react";
import PropTypes from 'prop-types';


const FormRadio = React.forwardRef(
    ({ name, options = [], selectedValue, onChange }, ref) => {
        return (
            <div ref={ref} onChange={onChange}>
                {options.map(({ id, value }) => (
                    <React.Fragment key={id}>
                        <label>
                            {value}
                            <input
                                name={name}
                                type="radio"
                                value={value}
                                checked={value === selectedValue}
                                readOnly
                            />
                        </label>
                    </React.Fragment>
                ))}
            </div>
        )
    }
);

FormRadio.propTypes = {
    name: PropTypes.string,
    options: PropTypes.array.isRequired,
    selectedValue: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default FormRadio;