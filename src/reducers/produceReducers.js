// All reducers have 2 params:
//1. Current State, ysually provide a default state
//2. Info that came from any action

const seedData = [

    {
        food: "Lettuce",
        quantity: 2

    },
    {
        food: "Corn",
        quantity: 9


    },
    {
        food: "Apples",
        quantity: 11


    }


]




export default (state = seedData, action)=>{
    console.log("produce is running");
    console.log(action);
    if(action.type === 'updateProduce'){
        console.log("I care about this action!!!");
        // we make a copy of state, because WE NEVER EVER EVER mutate state
        const newState = [...state];
        if(action.payload.operation === '+'){
            newState[action.payload.index].quantity++    
        }else if(action.payload.operation === '-'){
            newState[action.payload.index].quantity--
        }
        return newState;
    }else{
        return state;
    }
}