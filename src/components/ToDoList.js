import React, { Component } from 'react'

class ToDoList extends Component {


    render() {
        const content = this.props.todoList.map((item) =>
            <div className="text-center" key={item.id}>
                <li  className="completed">
                    <div className="form-check">
                        <label className="form-check-label">

                            {item.text}
                            <i className="input-helper">
                            </i>
                        </label>
                    </div>
                    <i className="remove mdi mdi-close-circle-outline">

                    </i>
                </li>

            </div>

        );

        return (
            <div className="list-wrapper" >
                <ul className="d-flex flex-column-reverse todo-list">
                    {content}
                </ul>

            </div>
        )
    }
}

export default ToDoList
