import React from "react";
import { Formik } from "formik";
import FormSelect from "../elements/FormSelect";
import FormRadio from "../elements/FormRadio";
import ErrorMessage from "../elements/ErrorMessage";
import {GENDERS, HOBBIES} from "../elements/formConstants";
import { validate } from '../registrationValidation';

const styles = {
    column: {
        display: "flex",
        flexDirection: "column"
    }
};

const initValues = {
    name: '',
    phone: '',
    birthday: '',
    gender: '',
    hobby: '',
};

const validation = values => {
    const { errors } = validate(values);
    const convertedErrors = {};
    errors.forEach(({ name, errorMessage }) => {
        convertedErrors[name] = errorMessage;
    });
    return convertedErrors;
};

const onSubmit = (values, {setSubmitting}) => {
    setTimeout(() => {
        setSubmitting(false);
        alert('submission done');
    },1000)
};


const FormikForm = () => (
        <Formik
            initialValues={initValues}
            validate={validation}
            onSubmit={onSubmit}
        >
            {({
                values : {name, phone, birthday, gender, hobby},
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
            }) => (
                <form style={styles.column} onSubmit={handleSubmit}>
                    <label>
                        Имя
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <ErrorMessage error={errors.name}/>
                    </label>
                    <label>
                        Телефон
                        <input
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <ErrorMessage error={errors.phone}/>
                    </label>
                    <label>
                        Дата рождения
                        <input
                            type="date"
                            name="birthday"
                            value={birthday}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <ErrorMessage error={errors.birthday}/>
                    </label>
                    <label>
                        Пол
                        <FormRadio
                            name="gender"
                            options={GENDERS}
                            selectedValue={gender}
                            onChange={handleChange}
                        />
                        <ErrorMessage error={errors.gender}/>
                    </label>
                    <label>
                        Хобби
                        <FormSelect
                            name="hobby"
                            options={HOBBIES}
                            selectedValue={hobby}
                            onChange={handleChange}
                        />
                        <ErrorMessage error={errors.hobby}/>
                    </label>

                    <button type="submit" disabled={isSubmitting}> Отправить форму </button>
                </form>
            )}
        </Formik>
);

export default FormikForm;