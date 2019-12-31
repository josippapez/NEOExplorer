const initState={
    data:[]
}

const rootReducer=(state=initState,action)=>{
    switch (action.type) {
        case 'FETCH_NEO':
            console.log("Fetched data: ",action.data );
            return {...state, data:action.data}
        case 'FETCH_NEO_ERROR':
            console.log('Fetch neo-today error', action.err)
            return state;
        case 'FETCH_NEO_THIS_WEEK':
            console.log("Fetched this week data: ",action.data );
            return {...state, data:action.data}
        case 'FETCH_NEO_THIS_WEEK_ERROR':
            console.log('Fetch neo-this-week error', action.err)
            return state;
        default:
            return state;
    }
}

export default rootReducer;