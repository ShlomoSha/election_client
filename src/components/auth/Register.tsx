import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { user } = useAppSelector((state) => state.user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const registerFetch = async () => {
    try {
      const newUser = {username, password, isAdmin}
      const res = await fetch('http://localhost:2222/api/users/register', {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      if (res.status != 201) {
        setUsername("")
        setPassword("")
        setIsAdmin(false)
        alert('You mossing something in data')
        return
      }
      const data = await res.json()
      navigate('/login')
      return data
  } catch (err) {
    console.log(err)
  }
  };      

  useEffect(() => {
    if (user?._id) {
      navigate("/votes");
    }
  }, []);

  return (
    <div>
      <div className="login">
        <input
          type="text"
          placeholder="user name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>
          Admin
          <input
            type="checkbox"
            onChange={(e) => setIsAdmin(e.target.checked)}
            checked={isAdmin}
          />
        </label>
        <button onClick={registerFetch}>Register</button>
      </div>
    </div>
  );
}
