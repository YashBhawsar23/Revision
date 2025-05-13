import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? <p>You are logged in as {user.name}</p> : <p>Not logged in</p>}
    </div>
  );
};

export default Dashboard;
