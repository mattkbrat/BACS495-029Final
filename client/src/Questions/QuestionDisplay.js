import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {Context} from "../UserContext";

const QuestionDisplay = (props) => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [answer, setAnswer] = useState('');

    const voteQuestion = (id, votes) => {
        setLoading(true);
        let newVotes = (votes == null || votes == 0) ? 1 : votes + 1;

        // fetch(process.env.REACT_APP_API_URL + "/questions/id=" + id,
        //     {
        //         method: 'PATCH',
        //         body: JSON.stringify(updateQuestions),
        //         headers: {
        //             "Content-Type": "application/json; charset=utf-8",
        //         }
        //     })
        //     .then(res => res.json())
        //     .then(data => setQuestions(data))

        axios.patch(process.env.REACT_APP_API_URL + "/questions/votes/id/" + id, {'votes': newVotes})
            .then(() => props.notifyParent())
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }

    const answerQuestion = (id) => {
        setLoading(true);
        axios.patch(process.env.REACT_APP_API_URL + "/questions/answers/id/" + id, {'answer': answer})
            .then(() => props.notifyParent())
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }

    return (
        <div className="question-display">
            {loading ? <div>Loading...</div> :
                <div>
                    <h2>Questions</h2>
                    <div>
                        {
                            props.questions.map(
                                q =>
                                    <div key={q.id}>{q.body} (Votes: {q.votes == null ? "0" : q.votes}, asked by {q.author})
                                        <form>
                                            <input type="text" placeholder="Answer" disabled={loading}
                                                   value={answer} onChange={(e)=>setAnswer(e.target.value)}/>
                                            <div>
                                                <button disabled={loading} value="Vote"
                                                        onClick={() => voteQuestion(q.id, q.votes)}>Vote for Question</button>
                                                <button disabled={loading} value="Answer"
                                                        onClick={() => answerQuestion(q.id, q.votes)}>Answer Question</button>
                                                {q.answers.length > 0 ?
                                                    <div>Answers: {q.answers.map((a, i) => <div key={i}>{a}</div>)}</div> : null}
                                            </div>
                                        </form>
                                    </div>
                            )
                        }
                    </div>
                </div>
            }
        </div>
    )
}
export default QuestionDisplay;