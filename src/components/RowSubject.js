import React, { Component } from 'react';
import ItemSubject from './ItemSubject'

class RowSubject extends Component {
    
    render() {
        return (
            <div className="index-header">
                <ItemSubject/>
                <ItemSubject/>
                <ItemSubject/>
                <ItemSubject/>
                <ItemSubject/>
                <ItemSubject/>
                <ItemSubject/>
                <ItemSubject/>
            </div>
        );
    }
}

export default RowSubject;