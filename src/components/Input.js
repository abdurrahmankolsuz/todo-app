import React, { Component } from 'react'

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.inputRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    componentDidMount(){
        this.inputRef.current.focus();

    }

    addTask(event) {
        console.log(event.target.value)
        event.preventDefault();
        var val = this.state.value;
        event.target.value = '';
        this.props.addTask(val);
    }

    clearInput() {
        this.setState({ value: '' });
    }

    render() {
        return (
            <div className="text-center">
                <form className="form-group" onSubmit={this.addTask}>
                    <div className="add-items d-flex">
                        <input
                            type="text" value={this.state.value} onChange={this.handleChange}
                            onClick={this.clearInput}
                            className="form-control"
                            ref = {this.inputRef}
                            placeholder="add something to do later"
                        />
                        <button className="add btn btn-primary font-weight-bold todo-list-add-btn"  >Add</button> </div>
                </form>
            </div>

        );
    }
}

export default Input
