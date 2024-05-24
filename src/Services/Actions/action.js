import {Addcart} from '../constants'

export const addtocart = (data)=>{
  return{
    type:Addcart,
    data : data
  }
   
}


