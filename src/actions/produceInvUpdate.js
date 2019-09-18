//this file is an action creator
//action creators return actions
//action is ab object that has at LEAST a property of type
//this action creator is going to be handed to the dispatch

// export default () =>{
//     console.log("Updating produce Inventory!!!!")
//     return {
//         type: 'updateProduce'
//     }

// }


export default (operation, index) =>{
    console.log(operation, index);
    return {
        type: 'updateProduce',
        payload:{
            operation,
            index
        }
    }

}