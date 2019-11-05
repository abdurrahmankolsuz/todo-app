import React, { Component } from 'react'

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'Bu kısma bir şeyler yazınız.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Gönderilen değer: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
           <div className="text-center">
            <form className="form-group" onSubmit={this.handleSubmit}>
               
              <div className="add-items d-flex">   <textarea value={this.state.value} onChange={this.handleChange} />
               
             <button className="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button> </div>
            </form>
            </div>
            
        );
    }
}

export default Input
