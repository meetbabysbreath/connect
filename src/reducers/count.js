import Action from 'actions';
let countAction = Action.count;
const initValue = {
    'first'  : 0,
    'second' : 1,
    'third'  : 2
};
const count = (state = initValue,action) =>{
    switch(action.type) {
        case countAction.ADD : //加1
        let newState= {
            ...state,
            [action.captionType] : state[action.captionType] +1
        };
        console.log(newState);
        return newState;
        case countAction.SUB : //减1
        return {
            ...state,
            [action.captionType] : state[action.captionType] -1
         };
        default :
        return state;
    }
}
export default count;