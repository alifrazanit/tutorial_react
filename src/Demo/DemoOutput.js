import React from 'react';
const DemoOutput = props => {
    console.log('DEMOOUTPUT')
    return <p>{props.show ? 'this is new' : ''}</p>
}

export default React.memo(DemoOutput)