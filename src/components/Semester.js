import React, { Component } from 'react';
import ItemSubject from './ItemSubject'

class Semester extends Component {
    
    render() {
        const { semester } = this.props
        const ShowSemester = semester.map((data) => <ItemSubject key={data.subject_id} subject={data}/>)
        return(
            <div className="row-header">
               { ShowSemester }
            </div>
        );
    }
}

export default Semester;