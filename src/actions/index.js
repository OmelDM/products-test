import { CREATE_PRODUCT, DELETE_PRODUCT } from "../constants/ActionTypes";

export const createProduct = product => {
    return {
        type: CREATE_PRODUCT,
        product
    };
};

export const deleteProduct = id => {
    return {
        type: DELETE_PRODUCT,
        id
    };
};
