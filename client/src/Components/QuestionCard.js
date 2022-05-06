/*
Each question has
- body
- date
- author
- comments
 */

import {Component} from "react";

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: body,
            date: date,
            author: author,
            comments: comments,
        }
    }
    handleEvent(){
            console.log(this.props);
    }

    render() {
        return (
            <div className="question">
                <div className="question-body">
                    {this.state.body}
                </div>
                <div className="question-date">
                    {this.state.date}
                </div>
                <div className="question-author">
                    {this.state.author}
                </div>
                <div className="question-comments">
                    {this.state.comments}
                </div>
            </div>
        );
    }
}

export default Question;