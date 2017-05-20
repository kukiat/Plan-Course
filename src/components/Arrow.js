import React from 'react'

class Arrow extends React.Component{

    render() {
        const { status } = this.props
        return(
            <div className={ status? "index-arrow-enable": "index-arrow-disable"}>
                <div className="line" style={ status? { "background":"red" }: { "background":"#eba821" } }>
                            
                </div>
            </div>
                
        )
    }
}

export default Arrow