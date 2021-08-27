export const loggedUserAction = (payload) => {
    return {
        type: "LOGGED_USER",
        payload
    };
};

export const fetchUsers = () => {
    return function (dispatch) {
        dispatch({
            type: "FETCH_USER_ITEMS_LOADING"
        });
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: "FETCH_USER_ITEMS",
                    items: json
                });
            })
    };
};

export const addUserToList = (payload) => {
    return {
        type: "ADD_USER_TO_LIST",
        payload
    };
};
