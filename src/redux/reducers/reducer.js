const INIT_STATE={
    carts:[]
}

export const cartreducer=(state=INIT_STATE,action)=>{
    switch(action.type){
        case "ADD_CART":
            
        const itemIndex= state.carts.findIndex((item)=> item.id===action.payload.id)
        if(itemIndex>=0){
            state.carts[itemIndex].qnty+=1
            console.log("qnty increase");
        }
        else{
            const temp= {...action.payload,qnty:1}
            return{
                ...state,
                carts:[...state.carts,temp]
            }
        }
           
            case "RMV_CART":
                const data= state.carts.filter((item)=> item.id!==action.payload)
                return{
                    ...state,
                    carts:data
                }

                case "RMV_ONE":
                    console.log("remove one calls");
                    const dec_itemIndex= state.carts.findIndex((item)=> item.id===action.payload.id)
                    if( state.carts[dec_itemIndex].qnty>=1){
                       const temp= state.carts[dec_itemIndex].qnty-=1;
                         const newData=[...state.carts,temp]
                       return{
                        ...state,
                        carts:[...state.carts]
                       }
                    }else{
                        const data= state.carts.filter((item)=> item.id!==action.payload.id)
                        return{
                            ...state,
                            carts:data
                        }
                    }


        default:
        return state    
    }
}