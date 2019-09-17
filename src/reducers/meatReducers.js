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

export default (state=seedData, action)=>{
    return state;
}
