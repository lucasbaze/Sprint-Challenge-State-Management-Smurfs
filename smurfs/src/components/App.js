import React, { useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { useStateValue } from '../state';
import { getSmurfs } from '../reducers';

import { Header, Table, Icon, Container } from 'semantic-ui-react';
import SmurfForm from './Form';

const App = () => {
    const [{ smurfs }, dispatch] = useStateValue();

    useEffect(() => {
        getSmurfs(dispatch);
    }, []);

    return (
        <div className="App">
            <h1>SMURFS! 2.0 W/ Redux</h1>
            <div>Welcome to your state management version of Smurfs!</div>
            <div>Start inside of your `src/index.js` file!</div>
            <SmurfForm />
            <Container style={{ marginTop: 20 }}>
                {!Array.isArray(smurfs) || !smurfs.length ? (
                    <Header as="h1" content="Loading" />
                ) : (
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan="4">
                                    Smurfs
                                </Table.HeaderCell>
                            </Table.Row>
                            <Table.Row>
                                <Table.HeaderCell>Id</Table.HeaderCell>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Age</Table.HeaderCell>
                                <Table.HeaderCell>Height</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {smurfs.map((smurf, index) => {
                                let cells = [
                                    smurf.id,
                                    smurf.name,
                                    smurf.age,
                                    smurf.height,
                                ];

                                return <Table.Row key={index} cells={cells} />;
                            })}
                        </Table.Body>
                    </Table>
                )}
            </Container>
        </div>
    );
};

export default App;
