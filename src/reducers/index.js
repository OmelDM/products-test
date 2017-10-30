import { CREATE_PRODUCT, DELETE_PRODUCT } from "../constants/ActionTypes";

const appReducers = (state, action) => {
    switch (action.type) {
        case CREATE_PRODUCT:
            return {
                products: [...state.products, action.product]
            };
        case DELETE_PRODUCT:
            const products = state.products.filter(
                product => product.id !== action.id
            );
            return {
                products
            };
        default:
            return state;
    }
};

export default appReducers;
