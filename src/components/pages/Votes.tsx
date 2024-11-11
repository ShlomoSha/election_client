import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/store'

export default function Votes() {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(state => state.user)
  const navigate = useNavigate()
  useEffect(() => {
    if (!user?._id) {
      navigate('./login')
    }
  },[])
  return (
    <div>Votes</div>
  )
}
