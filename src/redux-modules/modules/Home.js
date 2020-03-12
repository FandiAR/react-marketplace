const LOAD = 'modules/Home/LOAD';
const GET_DATA = 'modules/Home/GET_DATA';
const FAIL = 'modules/Home/FAIL';
const HANDLE_LOVED = 'modules/Home/HANDLE_LOVED';
const ADD_BUY = 'modules/Home/ADD_BUY';

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
            },
        ],
        productSold: [
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
            const object = action.result[0];

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

        case HANDLE_LOVED:
            const isLoved = state.data.productPromo.filter(x => x.id === action.id);
            isLoved[0].loved = action.value;
            return {
                ...state,
                loaded: true,
                loading: false,
            };

        case ADD_BUY:
            let soldList = [];
            const sold = state.data.productPromo.filter(x => x.id === action.id);
            const getSoldList = JSON.parse(localStorage.getItem('sold'));
            sold.map((data) => {
                if (!getSoldList) {
                    soldList.push(data);
                } else {
                    soldList = JSON.parse(localStorage.getItem('sold'));
                    soldList.push(data);
                }
                return data;
            });
            state.data.productSold = soldList;
            localStorage.setItem('sold', JSON.stringify(state.data.productSold));

            return {
                ...state,
                loaded: false,
                loading: true,
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

export function handleLoved(value, id, fieldName) {
    return {
        type: HANDLE_LOVED,
        value,
        id,
        fieldName,
    };
}

export function addBuy(id) {
    return {
        type: ADD_BUY,
        id,
    };
}