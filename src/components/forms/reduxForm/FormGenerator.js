import React from 'react';
import PropTypes from 'prop-types';
import {FormProps} from "../../../propTypes/proptypes";
import {Field} from "redux-form";


const FormGenerator = ({ form }) => {
    return (
        form.map((field, id) => {
            const {name, label, component, options = null} = field;
            return (
                <div key={id}>
                    <label htmlFor={name}>{label}</label>
                    <Field
                        name={name}
                        component={component}
                        options={options}
                    />
                </div>
            )
        })
    );
};

FormGenerator.propTypes = {
    form: PropTypes.arrayOf(FormProps)
};

export default FormGenerator;