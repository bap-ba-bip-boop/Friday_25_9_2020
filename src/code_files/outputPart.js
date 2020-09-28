import React from 'react';

const OutputPart = props =>(
    <div>
        <h4>{props.message}: {props.encrypted}</h4>
    </div>
);

export default OutputPart;