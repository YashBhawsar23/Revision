import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login("yash", "admin"); // simulate login as admin
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login as Admin</button>
    </div>
  );
}

export default Login;
