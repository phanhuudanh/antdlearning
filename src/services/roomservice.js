import { post } from "../utils/request"

export const bookRoom = async (options) => {
    const result = post("bookroom", options);
    return result;
}