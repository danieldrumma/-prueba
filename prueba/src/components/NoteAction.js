import React from "react"
import "./NoteAction.css"

class NoteAction extends React.Component {
    // provide ability to email, tweet, and copy
    render() {
        return <div className="action-bar">
                <ul className="action-items">
                    <li className="action-item">
                            <a class="action-item"
                                href= {"https://twitter.com/intent/tweet?text=" + this.props.textProp.replace(/%20/g, " ")}> tweet this! </a></li>
                    <li className="action-item"><a href='#'> email this! </a></li>
                    <li className="action-item" onClick={() => {navigator.clipboard.writeText(this.props.textProp)}}><a href='#'>copy this!</a></li>
                </ul>
            </div>
    }
}

export default NoteAction