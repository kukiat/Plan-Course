import React, { Component } from 'react';
import Arrow from '../components/Arrow'
import { check } from '../data/course'

class ItemSubject extends Component {
    
    render() {
        const { subject,selectSubject } = this.props
        const showArrow = check.filter((data) => subject.subject_id === data.subject_id )
        return (
            <div className="container-main">
                <div className="container-arrow">
                    <Arrow status={ subject.status }/>
                    <Arrow status={ subject.status }/>
                    <Arrow status={ subject.status }/>
                    
                </div>
                <div className="container-card" onClick={ ()=>selectSubject(subject.subject_id) }>
                    <div className={ subject.status?"index-card-change":"index-card"}>
                        <div className="detail-card">
                            <div>{ subject.subject_id }</div>
                            <div>{ subject.name }</div>
                        </div>
                    </div>
                </div>
                
            </div>
                
                
            
        )
    }
}

export default ItemSubject;