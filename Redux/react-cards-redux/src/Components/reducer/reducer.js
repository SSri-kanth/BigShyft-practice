const INITIAL_STATE = {
    loggedUser: null,
    userList: [],
    isLoaded: false,
    addUserToList: null
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGGED_USER":
            return {
                ...state,
                loggedUser: action.payload,
            };

        case "ADD_USER_TO_LIST":
            return {
                ...state,
                userList: [action.payload, ...state.userList]
            };

        case "FETCH_USER_ITEMS_LOADING":
            return {
                ...state,
                isLoaded: false
            }
        case "FETCH_USER_ITEMS":
            return {
                ...state,
                userList: action.items,
                isLoaded: true
            }

        default: return state;

    }
};
export default reducer;
