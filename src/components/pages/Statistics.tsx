import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/store'

export default function Statistics() {
  const { user } = useAppSelector(state => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (user?._id && !user?.isAdmin) navigate('/votes')
    if (!user?._id) navigate('/login')
  }, [])
  return (
    <div>
      
    </div>
  )
}
