//
//CONSTANTS
//

export const GET_SMURFS = 'smurfs/get_smurfs';
export const DELETE_SMURF = 'smurfs/delete_smurf';
export const POST_SMURF = 'smurfs/post_smurf';

//
//REDUCER
//

export default function reducer(state, action) {
    console.log('Reducer loop start');
    switch (action.type) {
        case GET_SMURFS:
            console.log('Setting Smurfss');
            return {
                ...state,
                smurfs: action.payload,
            };
        case POST_SMURF:
            console.log('Posting a new smurf');
            return {
                ...state,
                smurfs: action.payload,
            };
        case DELETE_SMURF:
            console.log('Setting deleted smurfs');
            return {
                ...state,
                smurfs: action.payload,
            };
        default:
            return state;
    }
}

//
//ACTION CREATORS
//

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

    let smurfs = await fetch('http://localhost:3333/smurfs', {
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
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data;
        });

    dispatch({
        type: POST_SMURF,
        payload: smurfs,
    });
};

export const deleteSmurf = async (id, dispatch) => {
    let url = `http://localhost:3333/smurfs/${id}`;

    let smurfs = await fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
    })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            return data;
        });

    dispatch({
        type: DELETE_SMURF,
        payload: smurfs,
    });
};
