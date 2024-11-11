import { NavLink, useNavigate } from 'react-router-dom'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store'
import userSlice from '../redux/slice/userSlice'

export default function Nav() {
  const user = useAppSelector((state: RootState) => state.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  const handleClick = () => {
    dispatch(userSlice.actions.logout())
    localStorage.clear()
    navigate('login')
  }
  return (
    <div  className='nav'>
      {user.user?._id ? (
        <>
          <NavLink to={'/votes'}>Votes</NavLink>
          {user.user.isAdmin && <NavLink to={'/statistics'}>Statistics</NavLink>}          
          <button onClick={handleClick}>Logout</button>
        </>
      ) : (
        <>
          <NavLink to={'/login'}>Login</NavLink>
          <NavLink to={'/register'}>Register</NavLink>
        </>
      )}
    </div>
  )
}
