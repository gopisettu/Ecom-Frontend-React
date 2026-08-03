import { AddToCart,Delete_From_Cart } from "../Actions/CartAction"
const initialState={
    cart:[],
}

export const CartReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'AddToCart':
            [...state],
            cart=[...state.cart,action.payload]
            break;
        case 'Delete_From_Cart':
            [...state],
            cart=state.cart.filter((p)=>p.id!=action.payload)
            break;
            default:
                return state;

    }

}