
export const TYPES = {
    LIST_DATA: 'LIST_DATA', 
}

export const updateListData = (params)=> {
    return {
        type : TYPES.LIST_DATA ,
        payload : params
    }
} 
