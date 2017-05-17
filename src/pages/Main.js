import React,{ Component } from 'react'
import Header from './Header'
import Dashboard from '../container/Dashboard'

class Main extends Component{
  
  render(){
    return (
      <div>
        <Header/>
        <Dashboard/>
      </div>
    )
  }
}

export default Main
