function UserDisplay(props) {
    console.log(props);
    return <>
        List of current users:
        <ul>
            {props.users.map(user => <li key={user._id}>{user.author+" "+user.body}</li>)}
        </ul>
    </>
}

export default UserDisplay;