import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuth(true);
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>🔐 Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
export default Login;
