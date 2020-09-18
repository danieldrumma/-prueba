import React, { Component } from "react"


// holds state --- class component
class InputTodo extends Component {
    state = {
        title: "",
        tag: ""
    };

    // handle text input changes
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
      };

      //handle submit - delete could sit in another func
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title, this.state.tag);
        this.setState({
            title: "",
            tag: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input 
                    type="text"
                    placeholder="Add Todo..." 
                    value={this.state.title} 
                    onChange={this.onChange} 
                    name="title"
                />
                <input 
                    type="text"
                    placeholder="Add tag..." 
                    value={this.state.tag} 
                    onChange={this.onChange} 
                    name="tag"
                />
                <input type="submit" value="Submit"/>
            </form>
        )

    }
}

export default InputTodo