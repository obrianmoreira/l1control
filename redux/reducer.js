import serviceTypeArray, { serviceCard, serviceOption } from "./state";

const reducer = (state = serviceTypeArray, action) => {

    switch(action.type){
        case 'UPDATE_SERVICE_TYPE_ONE':
            return {
                ...state,
                name: action.payload,
            };
        default:
            return state
    };

};

export const cardReducer = (state = serviceCard, action) => {

    switch(action.type){
        case 'UPDATE_CARD_SERVICE_TYPE':
            return {
                ...state,
                name: action.payload,
            };
        case 'UPDATE_CARD_SERVICE_PRICE':
            return {
                ...state,
                price: action.payload,
            };
        default:
            return state
    };

};

export const serviceVisibility = (state = serviceOption, action) => {
    switch(action.type) {
        case 'UPDATE_SERVICE_TYPE_VISIBILITY':
            return {
                ...state,
                visibility: action.payload,
            };
        default:
            return state;
    }

}

export default reducer;