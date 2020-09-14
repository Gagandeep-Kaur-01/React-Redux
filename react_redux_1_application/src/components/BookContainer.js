import React, { useState } from 'react';
import {connect} from 'react-redux';
import {buyBook} from '../redux'

function BookContainer(props) {
    
    return (
        <div>
            <h1> Book Component </h1>
            <h2> Number of Books - {props.numberOfBooks}</h2>           
            <button onClick = { () => props.buyBook}>Buy Book</button>
        </div>
    )
}

const mapStatetoProps= (state) => {
    return{
        numberOfBooks: state.numberOfBooks
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        buyBook : function() {
            dispatch(buyBook());
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps) (BookContainer);