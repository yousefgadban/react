import React from "react";

const Spinner = (props) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100px'}}>
            <div 
                class="ui medium active inline loader"
                style={{ margin: '10px'}}></div>
            <p>{props.message}</p>
        </div>
       
    );
};

Spinner.defaultProps = {
    message:  'Loading...'
}

export default Spinner;