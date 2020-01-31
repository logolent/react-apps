export const validate = ({ name, phone, birthday, gender, hobby }) => {
    const errors = [];

    validateField('name', name, validations['name'], errors);
    validateField('phone', phone, validations['phone'], errors);
    validateField('birthday', birthday, validations['birthday'], errors);
    validateField('gender', gender, validations['gender'], errors);

    return {
        valid: errors.length === 0,
        errors
    }
};

const validateField = (name, value, validators, errors) => {
    for (const validator of validators) {
        const result = validator(name, value);
        if (result) {
            errors.push(result);
            return;
        }
    }
};

const notNullValidation = (name, value) => {
    if (String(value).trim() === '') {
        return {name, errorMessage: 'Поле не может быть пустым'};
    }
};

const onlyDigitRegEx = /^\d+$/;
const onlyDigitValication = (name, value) => {
    if (!onlyDigitRegEx.test(String(value).trim())) {
        return {name, errorMessage: 'Поле должно содержать только цифры'};
    }
};

const validations = {
    name: [notNullValidation],
    phone: [notNullValidation, onlyDigitValication],
    birthday: [notNullValidation],
    gender: [notNullValidation]
};