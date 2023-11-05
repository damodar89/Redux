import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./redux/constant";

export const productData = (date = [], action) => {
    switch (action.type) {

        case SET_PRODUCT_LIST:
            console.log("SET_PRODUCT_LIST>>>>", action);
            return [...action.date]

        default:
            return date
    }
}

