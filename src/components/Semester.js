import React, { Component } from 'react';
import ItemSubject from './ItemSubject'

class Semester extends Component {
    
    render() {
        const { semester,selectSubject } = this.props
        const ShowSemester = semester.map((data,index) => <ItemSubject key={index} subject={data} selectSubject={ selectSubject }/>)
        return(
            <div className="row-header">
               { ShowSemester }
            </div>
        );
    }
}

export default Semester;