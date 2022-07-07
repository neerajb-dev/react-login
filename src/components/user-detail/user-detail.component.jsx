import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
    const params = useParams();
    const user_id = params.id;
    const [user_detail, setUserDetail] = useState({});

    useEffect(() => {
        getUserDetail();
    })

    const getUserDetail = () => {
        axios.get("https://reqres.in/api/users/" + user_id)
            .then(res => {
                if (res.data) {
                    setUserDetail(res.data.data);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="user-detail bg-dark vw-100 vh-100 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center bg-secondary p-5 rounded-5 gap-2">
                <img src={user_detail.avatar} alt="user_avatar" className="rounded-circle" />
                <span className="fw-bold">Name: {`${user_detail.first_name} ${user_detail.last_name}`}</span>
                <span>Email: {user_detail.email}</span>
            </div>
        </div>
    )
};

export default UserDetail;