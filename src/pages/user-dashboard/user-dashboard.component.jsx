import UserList from "../../components/user-list/user-list.component";
import "./user-dashboard.styles.css";

const UserDashboard = () => {
    return (
        <div className="user-dashboard__container bg-dark ">
            <UserList />
        </div>
    )
};

export default UserDashboard;