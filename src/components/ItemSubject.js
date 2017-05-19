import React, { Component } from 'react';

class ItemSubject extends Component {
    
    render() {
        const { subject,selectSubject } = this.props
        return (
            <div className={ subject.status?"index-card-change":"index-card"} onClick={ ()=>selectSubject(subject.subject_id) }>
                <div className="detail-card">
                    <div>{ subject.subject_id }</div>
                    <div>{ subject.name }</div>
                </div>
            </div>
        )
    }
}

export default ItemSubject;