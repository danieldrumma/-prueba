import React, { Component } from "react"
import "./InputTodo.css"


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
                <textarea
                    type="text"
                    placeholder="add another note!" 
                    value={this.state.title} 
                    onChange={this.onChange} 
                    name="title"
                    className="note-input"
                ></textarea>
                <textarea
                    type="text"
                    placeholder="add another tag!" 
                    value={this.state.tag} 
                    onChange={this.onChange} 
                    name="tag"
                    className="tag-input"
                ></textarea>
                <input type="submit" value="Submit"/>
            </form>
        )

    }
}

export default InputTodo