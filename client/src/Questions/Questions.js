import React, {useEffect, useState} from 'react';

import QuestionDisplay from './QuestionDisplay';
import SubmitQuestion from "./SubmitQuestion";

function Users() {
    const [questions, setQuestions] = useState([]);
    const [update, setUpdate] = useState(0);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + "/questions")
            .then(res => res.json())
            .then(data => setQuestions(data))
            .then(data => console.log(data))
    }, [update]);

    console.log(questions);

    const rerender = () => {
        let newVal = update + 1;
        console.log(newVal);
        setUpdate(newVal);
    }

    return <>
        <QuestionDisplay notifyParent={rerender} questions={questions}/>
        <SubmitQuestion notifyParent={rerender}/>
    </>

}

export default Users;