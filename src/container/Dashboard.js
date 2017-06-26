import React, { Component } from 'react';
import ItemSubject from '../components/ItemSubject'
import Semester from '../components/Semester';
import { course,datacheck } from '../data/course'

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            courses:[]
        }
        this.selectSubject = this.selectSubject.bind(this)
    }

    componentWillMount(){
        const _course = course.map((sementer) => sementer.map((data) => Object.assign({},data,{status:false})))
        this.setState({
            courses:_course
        })
    }

    selectSubject(subjectId){
        const { courses } = this.state
        courses.map((semester) => semester.map((subject) => subject.status = false))
        let obj = []
        const arrData = this.findChildSubject(subjectId)
        arrData.map((id) => courses.map((semester) => semester.map((subject) => {
                    if(subject.subject_id == id) {
                        subject.status = true
                    }
                    if(subject.subject_id == "040613XXX" || subject.subject_id == "040603XXX" || subject.subject_id == "080203XXX" || subject.subject_id == "XXXXXXXXX" || subject.subject_id == "04XXXXXXX") {
                        subject.status = false
                    }
                })
            )
        )
        if(subjectId == "040613XXX" || subjectId == "040603XXX" || subjectId == "080203XXX" || subjectId == "XXXXXXXXX" || subjectId == "04XXXXXXX") {
            alert("Coming Soon")
        }
        this.setState({
            courses:courses
        })
    }

    findChildSubject(subjectId){
        let allObj = []
        allObj.push(subjectId)
        let arrayData = [subjectId]
        while(true) {
            const findData = arrayData.map((id) => datacheck.filter((subject) => subject.subject_id === id))
            const childData = findData.map((arr) => arr.map((subject) => subject.child))
            const data = Object.assign(...childData)
            if(data.length > 0) {
                arrayData = Object.assign(...data)
                arrayData.map((id) => allObj.push(id))
            }else {
                return allObj
            }
        }
    }

    render() {
        const { courses } = this.state
        const ShowCourse = courses.map((data,index) => 
            <Semester key={index} semester={data} selectSubject={this.selectSubject}/>
        )
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