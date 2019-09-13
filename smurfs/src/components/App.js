import React, { useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { useStateValue } from '../state';
import { getSmurfs, deleteSmurf } from '../reducers';

import { Header, Table, Icon, Container, Button } from 'semantic-ui-react';
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
            <Container
                style={{
                    marginTop: 20,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <SmurfForm />
            </Container>
            <Container style={{ marginTop: 20 }}>
                {!Array.isArray(smurfs) || !smurfs.length ? (
                    <Header as="h1" content="Loading" />
                ) : (
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan="5">
                                    Smurfs
                                </Table.HeaderCell>
                            </Table.Row>
                            <Table.Row>
                                <Table.HeaderCell>Id</Table.HeaderCell>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Age</Table.HeaderCell>
                                <Table.HeaderCell>Height</Table.HeaderCell>
                                <Table.HeaderCell textAlign="right" wi>
                                    Remove
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {smurfs.map((smurf, index) => {
                                let cells = [
                                    smurf.id,
                                    {
                                        icon: 'user',
                                        content: smurf.name,
                                    },
                                    smurf.age,
                                    smurf.height,
                                    {
                                        width: 'one',
                                        textAlign: 'right',
                                        content: (
                                            <Button
                                                icon="delete"
                                                color="red"
                                                onClick={() =>
                                                    deleteSmurf(
                                                        smurf.id,
                                                        dispatch
                                                    )
                                                }
                                            />
                                        ),
                                    },
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
