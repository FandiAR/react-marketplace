const LOAD = 'modules/Login/LOAD';

const initialState = {
    user: {
        username: 'vandaime',
        fullname: 'Fandi Agus Riyanto',
    },
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                loaded: false,
                loading: true,
            };
        default:
            return state;
    }
}

export function getDataLogin() {
    return {
        type: LOAD,
    };
}
