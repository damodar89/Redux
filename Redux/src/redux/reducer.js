
// ######################### part-1 #######################
// export const  CartData = (date = [],action)=>{
//     console.log("reducer data>>>>",action);
//     return "abc"
// }

// ######################### part-2 #######################

// import { REMOVE_TO_CART,ADD_TO_CART } from "./constant";


// export const CartData = (date = [], action) => {
//     console.log("reducer called>>>>",action);
//     if(action.type===ADD_TO_CART){
//         return action.date
//     } else{
//         return "no action matched"
//     }

// }

// ######################### part-3 #######################
import { REMOVE_FROM_CART, ADD_TO_CART, EMPTY_CART } from "./constant";
export const CartData = (date = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            //  add to cart logic
            console.log("ADD_TO_CART>>>>", action);
            return [action.date, ...date]

        case REMOVE_FROM_CART:
            //  add to cart logic
            console.log("REMOVE_FROM_CART>>>>", action);
            date.length = date.length - 1
            return [...date]

        // case EMPTY_CART:
        //     //  add to cart logic
        //     // console.log("EMPTY_CART>>>>", action);
        //     data = []
        //     return [...date]

        default:
            return date
    }
}

