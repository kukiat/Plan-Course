import React, { Component } from 'react';
import ItemSubject from './ItemSubject'
import RowSubject from './RowSubject';

class Dashboard extends Component {
    render() {
        return (
            <div className="index_container z-depth-3 border-rad-4">
                <div className="layout">
                    <RowSubject/>
                    <RowSubject/>
                    <RowSubject/>
                    <RowSubject/>
                    <RowSubject/>
                    <RowSubject/>
                    <RowSubject/>
                </div>
            </div>
        );
    }
}

export default Dashboard;