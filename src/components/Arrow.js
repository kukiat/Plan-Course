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
                { subjectId == "040613374" && <ArrowFour status={ status }/> }
                { subjectId == "040613393" && <ArrowFive status={ status }/> }
                { subjectId == "040613331" && <ArrowSix status={ status }/> }
                { subjectId == "040613344" && <ArrowSeven status={ status }/> }
                { subjectId == "040203202" && <ArrowEight status={ status }/> }
                { subjectId == "040613241" && <ArrowNine status={ status }/> }
                { subjectId == "040613292" && <ArrowTen status={ status }/> }
                { subjectId == "040203201" && <ArrowOne status={ status }/> }
                { subjectId == "040613202" && <ArrowEleven status={ status }/> }
                { subjectId == "040613222" && <ArrowTwelve status={ status }/> }
                { subjectId == "040203102" && <ArrowOne status={ status }/> }
                { subjectId == "040613121" && <ArrowThirteen status={ status }/> }
                { subjectId == "040613182" && <ArrowThirteen status={ status }/> }
                { subjectId == "080103002" && <ArrowOne status={ status }/> }
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
        <div className="line4" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className={ status? "curve1": "curve2" } style={{ "marginTop":"4.85em","marginLeft":"-12.15em" }}></div>
        <div className="line4-2" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line5" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line6" style={ status? { "background":"red" }: { "background":"orange" } }></div>
    </div>
)
export const ArrowThree = ({status}) => (
    <div className="index-arrow">
        <div className={ status? "arrow-enable": "arrow-disable"}></div>
        <div className="line7" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line8" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line9" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line10" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line11" style={ status? { "background":"red" }: { "background":"orange" } }></div>
    </div>
)
export const ArrowFour = ({status}) => (
    <div className="index-arrow">
        <div className={ status? "arrow-enable": "arrow-disable"}></div>
        <div className="line12" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line13" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line14" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line15" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line16" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className={ status? "curve1": "curve2" } style={{ "marginTop":"13.65em","marginLeft":"-50.58em" }}></div>
        <div className="line17" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line18" style={ status? { "background":"red" }: { "background":"orange" } }></div>
    </div>
)
export const ArrowFive = ({status}) => (
    <div className="index-arrow">
        <div className={ status? "arrow-enable": "arrow-disable"}></div>
        <div className="line12" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line19" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line20" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line21" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line22" style={ status? { "background":"red" }: { "background":"orange" } }></div>
    </div>
)
export const ArrowSix = ({status}) => (
    <div className="index-arrow">
        <div className={ status? "arrow-enable": "arrow-disable"}></div>
        <div className="line2" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line23" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line24" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line25" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line26" style={ status? { "background":"red" }: { "background":"orange" } }></div>
    </div>
)
export const ArrowSeven = ({status}) => (
    <div className="index-arrow">
        <div className={ status? "arrow-enable": "arrow-disable"}></div>
        <div className="line27" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line28" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line29" style={ status? { "background":"red" }: { "background":"orange" } }></div>
    </div>
)
export const ArrowEight = ({status}) => (
    <div className="index-arrow">
        <div className={ status? "arrow-enable": "arrow-disable"}></div>
        <div className="line27" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line30" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line31" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line32" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line33" style={ status? { "background":"red" }: { "background":"orange" } }></div>
    </div>
)
export const ArrowNine = ({status}) => (
    <div className="index-arrow">
        <div className={ status? "arrow-enable": "arrow-disable"}></div>
        <div className="line34" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line35" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line36" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line37" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line38" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className={ status? "curve1": "curve2" } style={{ "marginTop":"0.85em","marginLeft":"-24.85em" }}></div>
        <div className="line39" style={ status? { "background":"red" }: { "background":"orange" } }></div>
    </div>
)
export const ArrowTen = ({status}) => (
    <div className="index-arrow">
        <div className={ status? "arrow-enable": "arrow-disable"}></div>
        <div className="line40" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className={ status? "curve1": "curve2" } style={{ "marginTop":"0.05em","marginLeft":"1.2em" }}></div>
        <div className="line41" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line42" style={ status? { "background":"red" }: { "background":"orange" } }></div>
    </div>
)
export const ArrowEleven = ({status}) => (
    <div className="index-arrow">
        <div className={ status? "arrow-enable": "arrow-disable"}></div>
        <div className="line43" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line41" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line42" style={ status? { "background":"red" }: { "background":"orange" } }></div>
    </div>
)
export const ArrowTwelve = ({status}) => (
    <div className="index-arrow">
        <div className={ status? "arrow-enable": "arrow-disable"}></div>
        <div className="line44" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line45" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className="line46" style={ status? { "background":"red" }: { "background":"orange" } }></div>
    </div>
)
export const ArrowThirteen = ({status}) => (
    <div className="index-arrow">
        <div className={ status? "arrow-enable": "arrow-disable"}></div>
        <div className="line47" style={ status? { "background":"red" }: { "background":"orange" } }></div>
        <div className={ status? "curve1": "curve2" } style={{ "marginTop":"0.05em","marginLeft":"0.85em" }}></div>
        <div className="line48" style={ status? { "background":"red" }: { "background":"orange" } }></div>
    </div>
)
export default Arrow