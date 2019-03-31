import React from 'react';

const withClass = (InnerComponent, classes) => {
    return props => {
        return <div className={classes}><InnerComponent {...props}></InnerComponent></div>
    }
}

export default withClass;