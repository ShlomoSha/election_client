import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { fetchCandidates } from '../../redux/slice/candidatesSlice'
import VoteCard from './VoteCard'

export default function Votes() {

  const dispatch = useAppDispatch()
  const { user } = useAppSelector(state => state.user)
  const { candidates } =  useAppSelector(state => state.candidates)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user?._id) {
      navigate('/login')
    }
    dispatch(fetchCandidates())
  },[])

  return (
    <div className='votes'>
      {candidates?.map(v => <VoteCard key={v._id} name={v.name} image={v.image} />)}
    </div>
  )
}
