export const ADD =(item)=>{
    return{
        type:'ADD_CART',
        payload:item
    }
}

// Delete items

export const DLT =(item)=>{
    return{
        type:'RMV_CART',
        payload:item
    }
}


// Delete One 
export const RMV_ONE =(item)=>{
    return{
        type:'RMV_ONE',
        payload:item
    }
}