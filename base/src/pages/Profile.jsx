import { useParams } from "react-router-dom";

function Profile() {
  const { userId } = useParams();
  return <h3>👤 Profile for User ID: {userId}</h3>;
}
export default Profile;
