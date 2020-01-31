import React from 'react';
import {GENDERS, HOBBIES} from "../elements/formConstants";
import RenderTextInput from "./RenderTextInput";
import RenderDateTimePicker from "./RenderDateTimePicker";
import RenderRadio from "./RenderRadio";
import RenderSelect from "./RenderSelect";
import {validate} from "../registrationValidation";
import {reduxForm} from "redux-form";
import FormGenerator from "./FormGenerator";

const styles = {
    column: {
        display: "flex",
        flexDirection: "column"
    }
};

const form = [
    {
        name: "name",
        label: "Имя",
        component: RenderTextInput
    },
    {
        name: "phone",
        label: "Телефон",
        component: RenderTextInput
    },
    {
        name: "birthday",
        label: "Дата рождения",
        component: RenderDateTimePicker
    },
    {
        name: "gender",
        label: "Пол",
        component: RenderRadio,
        options: GENDERS
    },
    {
        name: "hobby",
        label: "Хобби",
        component: RenderSelect,
        options: HOBBIES
    },
];


let ReduxForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form style={styles.column} onSubmit={handleSubmit}>
            <FormGenerator form={form}/>

            <div>
                <button type="button" disabled={pristine || submitting} onClick={reset}> Сбросить форму </button>
                <button type="submit" disabled={pristine || submitting}> Отправить форму </button>
            </div>
        </form>
    )
};

const reduxValidate = values => {
    const { errors } = validate(values);
    const convertedErrors = {};
    errors.forEach(({ name, errorMessage }) => {
        convertedErrors[name] = errorMessage;
    });
    return convertedErrors;
};

const onSubmit = ({ values, dispatch }) => {
    alert('ok');
};

export default reduxForm({
    form: 'registration',
    validate: reduxValidate,
    onSubmit,
    destroyOnUnmount: true,
    initialValues: {
        name: '',
        phone: '',
        birthday: '',
        gender: '',
        hobby: '',
    }
})(ReduxForm);