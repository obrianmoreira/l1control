import searchState from "./state";

const reducer = (state = searchState, action) => {

    switch(action.type){
        case 'UPDATE_SEARCH_VISIBILITY':
            return {
                ...state,
                visibility: action.payload,
            };
        default:
            return state
    };

};

export default reducer;