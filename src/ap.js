import React, { Component } from 'react'
import List from'./list'
import App from './App'
import {BrowserRouter, Route} from 'react-router-dom'
import Description from './description'
import './App.css'

export default class Ap extends Component {
  render() {
    return (
      
     <BrowserRouter>
     <div>
        <Route exact path="/"  component={App} />
        <Route path="/list" component={List} />
        <Route  path='/description' component={Description} />
      </div>
      </BrowserRouter>
     
    )
  }
}
