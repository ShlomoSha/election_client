import { useEffect } from 'react'
import { useAppSelector } from '../../redux/store'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const { user } = useAppSelector(state => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (user?._id) {
      navigate('/votes')
    }
  }, [])
  return (
    <div>
      
    </div>
  )
}
