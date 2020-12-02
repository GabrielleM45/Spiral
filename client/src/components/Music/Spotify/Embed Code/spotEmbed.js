import React from 'react';

function Iframe () {
    return (
        <div>
        <iframe src={this.props.src} height={this.props.height} width={this.props.width}/>
    </div>
    )
};

export default Iframe;