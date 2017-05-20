import React, { Component } from 'react';
import Arrow from '../components/Arrow'
import { check } from '../data/course'

class ItemSubject extends Component {
    
    render() {
        const { subject,selectSubject } = this.props
        const showArrow = check.filter((data) => subject.subject_id === data.subject_id )
        console.log(...showArrow)
        return (
            <div>
                <div className={ subject.status?"index-card-change":"index-card"} onClick={ ()=>selectSubject(subject.subject_id) }>
                    <div className="detail-card">
                        <div>{ subject.subject_id }</div>
                        <div>{ subject.name }</div>
                    </div>
                    
                </div>
                <Arrow status={ subject.status }/>
                <Arrow status={ subject.status }/>
                <Arrow status={ subject.status }/>
                {/*วาดarrow 17 อัน ตามตูดมัน แล้วใช้id เช็คว่าควรแสดงผลไหม*/}
                {/*อีกวิธีคือ ส่ง id ไปแล้วให้ไปต่อกับcssในarrow ว่าจะเปน css อันไหน*/}
            </div>
        )
    }
}

export default ItemSubject;