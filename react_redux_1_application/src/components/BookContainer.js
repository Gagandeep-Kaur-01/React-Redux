import React, { useState } from 'react';

function BookContainer(props) {
    
    return (
        <div>
            <h1> Book Component </h1>
            <h2> Number of Books - {props.numberOfBooks}</h2>           
            <button onClick = { () => props.buyBook}>Buy Book</button>
        </div>
    )
}

export default BookContainer;