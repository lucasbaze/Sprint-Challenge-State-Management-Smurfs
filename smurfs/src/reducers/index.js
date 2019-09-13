export const GET_SMURFS = 'smurfs/get_smurfs';

export default function reducer(state, action) {
    console.log('Reducer loop start');
    switch (action.type) {
        case GET_SMURFS:
            console.log('Setting Smurfss');
            return {
                ...state,
                smurfs: action.payload,
            };
        default:
            return state;
    }
}

export const getSmurfs = async dispatch => {
    let url = 'http://localhost:3333/smurfs';
    console.log('Getting smurfs at: ', url);

    let payload = await fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to fetch');
            }
            return res.json();
        })
        .then(data => {
            console.log('Returned Data: ', data);
            return data;
        })
        .catch(err => console.log(err));

    dispatch({
        type: GET_SMURFS,
        payload: payload,
    });
};

export const postSmurf = async (smurf, dispatch) => {
    let { name, age, height } = smurf;

    let response = await fetch('http://localhost:3333/smurfs', {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'client',
        body: JSON.stringify({ name, age, height }),
    }).then(response => console.log(response.json()));

    getSmurfs(dispatch);
};
