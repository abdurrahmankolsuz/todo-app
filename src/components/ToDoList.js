import React, { Component } from 'react'

class ToDoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ...props
        }

        this.toggleChange = this.toggleChange.bind(this)
        this.removeDone = this.removeDone.bind(this)
    }
    toggleChange(event) {
        for (const each of this.state.todoList) {
            if (each.id == event.target.value) {
                each.done = event.target.checked;
            }
        }

        this.setState({ todoList: this.state.todoList })
    }
    removeDone(event) {
        event.preventDefault();
        var val = event.target.value;
        this.props.removeDone(val);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.todoList.length !== state.todoList.length) {
            return {
                todoList: props.todoList
            };
        }
        return null;
    }
    render() {
        const content = this.props.todoList.map((item) =>
            <div className="text-center" key={item.id}>
                <li >
                    <div>
                        <label className={item.done ? 'completed' : ''} >
                            {item.text}
                        </label>
                    </div>

                    {item.done ? <button className="btn btn-outline-danger btn-sm checkbox" value={item.id} onClick={this.removeDone} >Remove</button> :
                        <input type="checkbox" className="checkbox"
                            value={item.id}
                            checked={item.done}
                            onChange={this.toggleChange}
                        />}

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
