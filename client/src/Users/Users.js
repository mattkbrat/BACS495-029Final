import React, {useEffect, useState} from 'react';

import UserDisplay from './UserDisplay';
import Register from './Register';

function Users() {
    const [users, setUsers] = useState([]);
    const [update, setUpdate] = useState(0);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+"/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [update]);

    console.log(users);

    const rerender = () => {
        let newVal = update + 1;
        console.log(newVal);
        setUpdate(newVal);
    }

    return <>
        <UserDisplay users={users}/>
        <Register notifyParent={rerender}/>
    </>

}

export default Users;