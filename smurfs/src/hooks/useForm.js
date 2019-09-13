import { useState } from 'react';

export const useForm = (initialValues, callback) => {
    let [formValues, setFormValues] = useState(initialValues);

    const setAll = (obj, value) => {
        Object.keys[obj].forEach(k => (obj[k] = value));
    };
    const setNull = obj => setAll(obj, null);

    const handleChange = event => {
        e.persist();
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        e.preventDefault();
        callback(formValues);

        //Reset all form values to empty strings
        setAll(formValues, '');
        setFormValues({ ...formValues });
    };

    return [formValues, handleChange, handleSubmit];
};
