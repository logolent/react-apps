import React from "react";
import PropTypes from 'prop-types';

const styles = {
    red: {
        color: 'red'
    }
};

const ErrorMessage = ({error}) => (
    error?
        <span style={styles.red}> {error} </span>
        :
        null
);

ErrorMessage.propTypes = {
    error: PropTypes.string
};

export default ErrorMessage;