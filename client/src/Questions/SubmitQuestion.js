import React, {useContext, useState} from 'react';
import {Context} from "../UserContext";
import axios from "axios";

const SubmitQuestion = (props) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [question, setQuestion] = useState("");
    const { user } = useContext(Context);

    const submitQuestion = (e) => {
        e.preventDefault();
        setLoading(true);
        const uri = process.env.REACT_APP_API_URL+'/questions';
        let insert = {
            'title': question,
            'author': user.name,
            'body': question,
        };

        console.log("insert: ", insert);

        axios.post(uri, insert)
            .then(res=> console.log(res.data)) //res.data is the response from the server
            .then(() => setError(''))  //clear error message
            .then(() => props.notifyParent()) //refresh the list
            .catch(err=> setError(err.response.data)) //set error message
            .finally(()=> setLoading(false)); //set loading to false
    }

    return (
        <div className="submit-question">
            {loading ? <div className="loading">Loading...</div> :
        <div>
            <p>Submit Question</p>
            <form>
                <label>Question:
                    <textarea disabled={loading || !user} className={'input'} value={question} onChange={(e)=>setQuestion(e.target.value)}></textarea>
                </label>
                <br/>
                <button disabled={loading || !user} value="Submit Question" onClick={submitQuestion}>
                    {!user ? <p>Please log in</p> : <>Submit</>}
                </button>
                {error && <p>{error}</p>}

            </form>
        </div>}
    </div>
    )
}

export default SubmitQuestion;