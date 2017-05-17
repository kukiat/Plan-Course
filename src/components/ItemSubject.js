import React, { Component } from 'react';

class ItemSubject extends Component {
    
    render() {
        const { subject } = this.props
        return (
            <div className="index-card z-depth btn-focus">
                <div className="detail-card">
                    <div>{ subject.subject_id }</div>
                    <div>{ subject.name }</div>
                </div>
            </div>
        )
    }
}

export default ItemSubject;