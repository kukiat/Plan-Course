import React from 'react'

class Arrow extends React.Component{

    render() {
        const { status } = this.props
        return(
            <div className="index-arrow">
                <div className="line" style={ status? { "background":"red" }: { "background":"#eba821" } }></div>
                <div className={ status? "index-arrow-enable": "index-arrow-disable"}></div>
             </div>
                
        )
    }
}

export default Arrow