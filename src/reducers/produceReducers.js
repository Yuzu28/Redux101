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

export default (state=seedData, action)=>{
    return state;
}
