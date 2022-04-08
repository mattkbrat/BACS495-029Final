import React, {useEffect, useState} from 'react';

import UserDisplay from './Users/UserDisplay';
import UserInput from './Users/UserInput';

function Users() {
    const [users, setUsers] = useState([]);
    const [update, setUpdate] = useState(0);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [update]);

    console.log(users);

    const rerender = () => {
        var newVal = update + 1;
        console.log(newVal);
        setUpdate(newVal);
    }

    return <>
        <UserDisplay users={users}/>
        <UserInput notifyParent={rerender}/>
    </>

}

export default Users;