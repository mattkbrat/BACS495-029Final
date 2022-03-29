import React, { useEffect, useState } from 'react';

function UserInput(props) {
    const [name, setName] = useState('');
    const [id, setId] = useState('');

    const createUser = () => {
        fetch(process.env.REACT_APP_API_URL, {
            method: 'POST',
            body: JSON.stringify({
                'name': name,
                'id': id
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
        <p>
            Enter new users:
            <br/>
            <input placeholder="id" type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <input placeholder="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={createUser}>Add</button>
        </p>

    </>

}

export default UserInput;