const LOAD = 'modules/Home/LOAD';
const GET_DATA = 'modules/Home/GET_DATA';
const FAIL = 'modules/Home/FAIL';

const initialState = {
    data: {
        category: [
            {
                imageUrl: '',
                id: 0,
                name: '',
            },
        ],
        productPromo: [
            {
                id: '',
                imageUrl: '',
                title: '',
                description: '',
                price: '',
                loved: 0,
            }
        ]
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

        case GET_DATA:
            let object;
            action.result.map((data) => {
                object = data;
                return data;
            })
            return {
                ...object,
                loaded: true,
                loading: false,
            }

        case FAIL:
            delete state.result;
            return {
                loaded: true,
                loading: false,
                result: false,
                error: action.error,
            };
        default:
            return state;
    }
}

export function getDataHome() {
    const url = 'https://private-4639ce-ecommerce56.apiary-mock.com/home';
    return {
        types: [LOAD, GET_DATA, FAIL],
        promise: client => client.get(url, {}),
    };
}
