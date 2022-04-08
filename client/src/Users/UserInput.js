import React, { useEffect, useState } from 'react';

function UserInput(props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const createUser = () => {
        fetch(process.env.REACT_APP_API_URL, {
            method: 'POST',
            body: JSON.stringify({
                'title': title,
                'body': body,
                'author': author,
                'date': Date.now()
            }),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
        props.notifyParent();
    }

    return <>
        <>
            Enter new users:
            <div>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <input id="body" type="text" value={body} onChange={(e) => setBody(e.target.value)} />
            </div>
            <div>
                <label htmlFor="author">Author</label>
                <input id="author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <button onClick={createUser}>Add</button>
        </>

    </>

}

export default UserInput;