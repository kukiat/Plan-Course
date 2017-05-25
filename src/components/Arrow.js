import React,{ Component } from 'react'
import { datacheck } from '../data/course'

class Arrow extends Component{

    render() {
        const { status} = this.props
        const subjectId = this.props.subject.subject_id
        const id =5
        return (
            <div className="container-arrow">
                { subjectId == "040613405" && <ArrowOne status={ status }/> }
                { subjectId == "040613325" && <ArrowTwo status={ status }/> }
                { subjectId == "040613325" && <ArrowThree status={ status }/> }
            </div>
        )
    }
}

export const ArrowOne = ({status}) => (
    <div className="index-arrow">
        <div className={ status? "arrow-enable": "arrow-disable"}></div>
        <div className="line" style={ status? { "background":"red" }: { "background":"orange" } }></div>
    </div>
)

export const ArrowTwo = ({status}) => (
    <div className="index-arrow">
        <div className={ status? "arrow-enable": "arrow-disable"}></div>
        <div className="line2" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line3" style={ status? { "background":"red" }: { "background":"orange" } }></div>
    </div>
)
export const ArrowThree = ({status}) => (
    <div className="index-arrow">
        <div className={ status? "arrow-enable": "arrow-disable"}></div>
        <div className="line2" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line3" style={ status? { "background":"red" }: { "background":"orange" } }></div>
    </div>
)
export default Arrow