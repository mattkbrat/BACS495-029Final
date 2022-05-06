function UserDisplay(props) {
    console.log("UserDisplay props: ", props);
    return <>
        List of current users:
        <ul>
            {props.users.map(user => <li key={user.id}>{user.name+" "+user.university}</li>)}
        </ul>
    </>
}

export default UserDisplay;