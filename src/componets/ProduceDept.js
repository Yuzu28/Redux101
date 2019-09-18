import React, {Component} from 'react';

//we want this component to know about redux.
//to do that, we need some help... or some glue
//the glue is react-redux.... we need the CONNECT   function

import { connect } from 'react-redux';
import updateProduce from '../actions/produceInvUpdate'
import { bindActionCreators } from 'redux';




class ProduceDept extends Component{

    increment= (operation, index) =>{
        this.props.updateProduce(operation, index);
        // console.log(operation,index);
        // if (operation ==="+"){
        //     updateFrozen();

        // }else if(operation === "-"){

        // }

    }


    render(){
        // console.log(this.props.frozenData)
        
        const produceInventory = this.props.produceData.map((item,i) =>{
            return (
                <div key={i}>
                    <li>{item.food}: {item.quantity}</li>
                    <input type="button" onClick={() =>{this.increment('+',i)}} value="+" />
                    <input type="button" onClick={() =>{this.increment('-',i)}} value="-" />
    
                </div>
                )        
            })
        
        return(
            <div>
            <h1>The Produce department</h1>
            <ul>
                {produceInventory}
            </ul>
            </div>
        )
    }
}

// console.log(connect);
//connec take 2 args, the first one is a function that is going to map
// a piece of redux to this components props


//mapStateToProps take 1 arg, "state" and that is the rootReducers/store
function mapStateToProps(state){
    //mapStateToProps returns an object, with:
    //property is the local prop name to this component
    //value will be the property in the root reducer... , a piece of the store
    return{
        produceData: state.produce,

    }

}


//it comes with connect
//mapDispatchToProps is how we tie our commponent to the dispatch
//it takes 1 args dispath
function mapDispatchToProps(dispatch){
    // this function returns, bindActionCreators
    //and we hand bindActionCreators an object:
    //each property will a be a local prop
    //each value will be a function that is a dispatch when run
    return bindActionCreators({
        updateProduce: updateProduce
    }, dispatch)

}



// export default FrozenDept;
export default connect(mapStateToProps, mapDispatchToProps )(ProduceDept);
//connect is redux....fetch it from the redux store...then hand it to the component