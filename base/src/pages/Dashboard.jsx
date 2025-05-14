import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <nav>
        <Link to="profile/1">Profile</Link> |<Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Dashboard;
