export const addToCartAction=(data)=>{
    return {
        type:"ADD_TO_CART",
        payload:data
    }
}

export const deleteProductAction=(data)=>{
    return {
        type:"DELETE",
        payload:data
    }
}

export const plus=(id)=>{
    return {
        type:"PLUS",
        payload:id
    }
}

export const minus=(id)=>{
    return {
        type:"MINUS",
        payload:id
    }
}