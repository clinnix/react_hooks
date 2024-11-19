import { useEffect, useState } from "react";

function GitHubUsers(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://api.github.users')
        .then(response => response.json())
        .then(data => {
            setUsers(data);
        })
    },[]);

    return (
        <div className="section">
            {console.log('我渲染了两次')}
            {users.map(user =>(
                <div key={user.id} className="card">
                    <h5>{user.login}</h5>
                </div>
            ))}
        </div>
    )

}

export default GitHubUsers;