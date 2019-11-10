import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ToDoList from './components/ToDoList'
import Input from './components/Input'

export class App extends Component {

  constructor(props) {
    super(props)

    let Todo = [{
      id: 1, text: "First thing to do", done: true
    }, {
      id: 2, text: "Second thing to do", done: false
    }, {
      id: 3, text: "Third thing to do", done: false
    }
    ]

    this.state = {
      Todo: Todo
    }

    this.addTask = this.addTask.bind(this);
    this.removeDone = this.removeDone.bind(this)
  }


  addTask(task) {
    let updatedList = this.state.Todo;
    let lastElementId = this.state.Todo.length > 0 ? this.state.Todo.slice(-1)[0].id : 1;
    updatedList.push({ id: ++lastElementId, text: task, done: false });
    this.setState({ Todo: updatedList });
  }

  removeDone(id) {
    let updatedList = this.state.Todo;
    for (var i = updatedList.length; i--;) {
      if (updatedList[i].id == id) {
        updatedList.splice(i, 1);
      }
      this.setState({ Todo: updatedList });

    }
  }

  render() {
    return (
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-lg-12">
              <div className="card px-3">
                <div className="card-body">
                  <h4 className="card-title">Awesome Todo list</h4>
                  <Input addTask={this.addTask} />
                  <ToDoList todoList={this.state.Todo} removeDone={this.removeDone} />
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

