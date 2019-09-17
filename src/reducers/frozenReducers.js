// All reducers have 2 params:
//1. Current State, ysually provide a default state
//2. Info that came from any action

const seedData = [

    {
        food: "TV dinners",
        quantity: 10

    },
    {
        food: "Ice Cream",
        quantity: 21


    },
    {
        food: "Waffle",
        quantity: 32


    }


]

export default (state=seedData, action)=>{
    return state;
}

// function frozen(state=[], action){
//     return state;
// }

// export default frozen;