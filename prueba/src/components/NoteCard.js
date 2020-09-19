import React from "react";
import NoteAction from "./NoteAction"
import "./NoteCard.css"


class NoteCard extends React.Component {
    

    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#d35e0f",
            opacity: 0.4,
            textDecoration: "line-through",
          }
          
        return <div className="note-card">
                    <div className="container">
                        <input 
                        type="checkbox" 
                        checked={this.props.todo.completed}
                        //both utilize props to change state
                        onChange={() => this.props.handleChangeProps(this.props.todo.id)} 
                        />
                        <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
                        Delete
                        </button>
                        <span style={this.props.todo.completed ? completedStyle : null}>
                        {this.props.todo.title}
                        </span>
                        <NoteAction 
                        textProp={this.props.todo.title}/>
                    </div>
            </div>
    }
}

export default NoteCard