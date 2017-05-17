import React, { Component } from 'react';
import ItemSubject from '../components/ItemSubject'
import Semester from '../components/Semester';
import course  from '../data/course'

class Dashboard extends Component {
    
    
    render() {
        const ShowCourse = course.map((data,index) => <Semester key={index} semester={data}/>)
        return (
            <div className="index_container z-depth-3 border-rad-4">
                <div className="layout">
                   { ShowCourse }
                </div>
            </div>
        );
    }
}

export default Dashboard;