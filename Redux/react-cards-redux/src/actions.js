import { loggedUser } from "./action-types";

export const loggedUser = (payload) => {
    type: LOGGED_USER,
    payload
}