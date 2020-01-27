import React from 'react';

const validationComponent = (props) => {
    const textLength = props.length;
    let output = ""

    let style={
        backgroundColor: 'red'
    }

    if (textLength >= 5) {
        style={
            backgroundColor: 'green'
        }
        output = <p style={style}>Text long enough</p>
    } else {
        style={
            backgroundColor: 'red'
        }
        output = <p style={style}> Text too short </p>
    }
    return(
        <div>
            {output}
        </div>
    )

}

export default validationComponent;