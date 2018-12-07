export default function(state = {}, action){
    switch(action.type){
        case 'DUMMY_ACTION': return { ...state, dummy: action.payload }; break;
        default: return state;
    }
}