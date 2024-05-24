import { Addcart } from "../constants"

const initialState = {
    cartData:[]
}

export default function cartItem(state=[],action){
    switch(action.type){
        case Addcart:
            return[
                ...state,
                {cartData:action.data}
            ]
            default:
                return state
        
    }

}


