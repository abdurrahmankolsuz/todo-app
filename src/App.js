import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ToDoList from './components/ToDoList'
import Input from './components/Input'

export class App extends Component {

  Todo = [{
    id: 1, text: "First thing to do"
  }, {
    id: 2, text: "Second thing to do"
  }, {
    id: 3, text: "Third thing to do"
  }

  ]

  render() {
    return (
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-lg-12">
              <div className="card px-3">
                <div className="card-body">
                  <h4 className="card-title">Awesome Todo list</h4>
                  <Input />
                  <ToDoList todoList={this.Todo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

