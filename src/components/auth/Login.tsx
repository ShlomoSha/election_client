import { useState } from 'react'
import { useAppDispatch } from '../../redux/store'
import { fetchLogin } from '../../redux/slice/userSlice'

export default function Login() {
  const dispatch = useAppDispatch()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div>
      <input type="text" placeholder='user name' value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => dispatch(fetchLogin({username, password}))}>Login</button>
    </div>
  )
}
