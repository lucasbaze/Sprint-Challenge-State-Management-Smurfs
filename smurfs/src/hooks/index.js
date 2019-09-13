import { useState } from 'react';
import { useStateValue } from '../state';

export const useForm = (initialValues, callback) => {
    let [formValues, setFormValues] = useState(initialValues);
    let [{ smurfs }, dispatch] = useStateValue();

    const setAll = (obj, value) => {
        Object.keys(obj).forEach(k => (obj[k] = value));
    };
    const setNull = obj => setAll(obj, null);

    const handleChange = event => {
        event.persist();
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        callback(formValues, dispatch);

        //Reset all form values to empty strings
        setAll(formValues, '');
        setFormValues({ ...formValues });
    };

    return [formValues, handleChange, handleSubmit];
};
