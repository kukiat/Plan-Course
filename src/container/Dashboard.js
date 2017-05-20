import React, { Component } from 'react';
import ItemSubject from '../components/ItemSubject'
import Semester from '../components/Semester';
import { course,check }  from '../data/course'
import Arrow from '../components/Arrow'

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
       const selectAll = Object.assign({}, ...(check.filter((data) => data.subject_id === subjectId))).child
       for(let i in courses){
            for(let j=0;j<courses[i].length;j++){
                courses[i][j].status = false
            }
        }
       if(selectAll == undefined){
            for(let i in courses){
                for(let j=0;j<courses[i].length;j++){
                    if(courses[i][j].subject_id == subjectId){
                        courses[i][j].status = true
                    }
                }
            }
       }else{
            for(let i in courses){
                for(let j=0;j<courses[i].length;j++){
                    if(courses[i][j].subject_id == subjectId){
                        courses[i][j].status = true
                    }
                }
            }
            for(let k in selectAll){
                for(let i in courses){
                    for(let j=0;j<courses[i].length;j++){
                        if(courses[i][j].subject_id == selectAll[k]){
                            courses[i][j].status = true
                        }
                    }
                }
            }   
       }
       this.setState({
            courses:courses
        })
       
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