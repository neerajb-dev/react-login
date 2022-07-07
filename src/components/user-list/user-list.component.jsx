import axios from "axios";
import { useEffect, useState } from "react";

const UserList = () => {

    const [user_list, setUserList] = useState([]);

    useEffect(() => {
        getUserList();
    }, [])

    const getUserList = () => {
        axios.get("https://reqres.in/api/users?page=2")
            .then((res) => {
                if (res.data) {
                    setUserList(res.data.data);
                }
            })
            .catch((err) => {
                console.log(err)
            });
    }

    return (
        <>
            <div className="user-list d-flex flex-column justify-content-center align-items-center text-light gap-3 p-5" >
                <h1>User List</h1>
                {
                    user_list.map((user) => {
                        return (
                            <div className="d-flex flex-column justify-content-center align-items-center bg-secondary p-5 rounded-5 gap-2" key={user.id}>
                                <img src={user.avatar} alt="user_avatar" className="rounded-circle"/>
                                <h3 className="fw-bold">{user.first_name}</h3>
                                <h5>{user.last_name}</h5>
                                <span>{user.email}</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
};

export default UserList;