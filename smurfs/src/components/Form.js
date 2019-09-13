import React from 'react';
import { useForm } from '../hooks';

import { useStateValue } from '../state';
import { Form } from 'semantic-ui-react';

import { postSmurf } from '../reducers';

const SmurfForm = () => {
    const initialValues = {
        name: '',
        height: '',
        age: '',
    };

    function submitCallback(formValues, dispatch) {
        postSmurf(formValues, dispatch);
    }

    const [{ smurfs }, dispatch] = useStateValue();
    const [formValues, handleChange, handleSubmit] = useForm(
        initialValues,
        submitCallback
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Input
                    type="text"
                    name="name"
                    placeholder="Smurf Name"
                    value={formValues.name}
                    onChange={handleChange}
                />
                <Form.Input
                    type="text"
                    name="age"
                    placeholder="Smurf Age"
                    value={formValues.age}
                    onChange={handleChange}
                />
                <Form.Input
                    type="text"
                    name="height"
                    placeholder="Smurf Height"
                    value={formValues.height}
                    onChange={handleChange}
                />
                <Form.Button
                    type="submit"
                    color="blue"
                    content="Add New Smurf!"
                />
            </Form.Group>
        </Form>
    );
};

export default SmurfForm;
