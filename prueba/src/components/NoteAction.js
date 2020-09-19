import React from "react"
import "./NoteAction.css"

class NoteAction extends React.Component {
    // provide ability to email, tweet, and copy
    render() {
        return <div className="action-bar">
                <ul>
                    <li><a href='#'>Tweet this!</a></li>
                    <li><a href='#'>Email this!</a></li>
                    <li onClick={() => {navigator.clipboard.writeText(this.props.textProp)}}><a href='#'>Copy this!</a></li>
                </ul>
            </div>
    }
}

export default NoteAction