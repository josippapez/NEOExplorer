const initState={
    data:[]
}

const rootReducer=(state=initState,action)=>{
    switch (action.type) {
        case 'FETCH_NEO_SORTED':
            console.log("Fetched sorted data: ",action.data );
            return {...state, data:action.data}
        default:
            return state;
    }
}

export default rootReducer;