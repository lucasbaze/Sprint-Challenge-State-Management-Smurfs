export const GET_SMURFS = 'smurfs/get_smurfs';

export default function reducer(state, action) {
    switch (action.type) {
        case GET_SMURFS:
            return state;
        default:
            return state;
    }
}

export const getSmurfs = async dispatch => {
    let url = 'http://localhost:3333/smurfs';
    let payload = fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to fetch');
            }
            return res.json();
        })
        .then(data => {
            return data;
        })
        .catch(err => console.log(err));

    dispatch({
        type: GET_SMURFS,
        payload: payload,
    });
};
