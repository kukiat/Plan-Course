import React from 'react'
import ReactDom from 'react-dom'
import AppRoutes from './components/AppRoutes';
import './static/css/style.css'

window.onload = () => {
  ReactDom.render(
    <AppRoutes/>,
    document.getElementById('root')
  )
}
