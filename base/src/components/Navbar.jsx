import { Link } from "react-router-dom";

function Navbar({ isAuth, setIsAuth }) {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      {isAuth ? (
        <>
          <Link to="/dashboard">Dashboard</Link> |{" "}
          <button onClick={() => setIsAuth(false)}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;
