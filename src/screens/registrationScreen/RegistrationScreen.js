import React from "react";
import FormikForm from "../../components/forms/formikForm/FormikForm";
import ReduxForm from "../../components/forms/reduxForm/ReduxForm";


const RegistrationScreen = () => (
    <>
        <h2> Formik </h2>
        <FormikForm/>
        <br/>
        <h2> Redux-form </h2>
        <ReduxForm/>
    </>
);

export default RegistrationScreen;