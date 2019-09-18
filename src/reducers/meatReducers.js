// All reducers have 2 params:
//1. Current State, ysually provide a default state
//2. Info that came from any action

const seedData = [

    {
        food: "Salmon",
        quantity: 77

    },
    {
        food: "Steak",
        quantity: 37


    },
    {
        food: "Chicken",
        quantity: 8


    }


]

// export default (state=seedData, action)=>{
//     console.log("meat is running");
//     console.log(action);
//     return state;
// }

export default (state = seedData, action)=>{
    console.log("Meat Reducer is running!");
    console.log(action);
    if(action.type === 'updateMeat'){
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