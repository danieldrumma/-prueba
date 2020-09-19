import React from "react";
import NoteCard from "./NoteCard";
import "./NoteRepository.css"

class NoteRepository extends React.Component {
    render() {
        return (
            <div className="grid-container">
                {this.props.todos.map(todo => (
                    <NoteCard 
                    key={todo.id} 
                    todo={todo}
                    handleChangeProps={this.props.handleChangeProps}
                    deleteTodoProps={this.props.deleteTodoProps}
                    />
                ))}
            </div>
        )
    }
}

export default NoteRepository