interface VotesProp {
    name: string
    image: string
}

export default function VoteCard({name, image}: VotesProp) {
  return (
    <div className="card">
        <h2>{name}</h2>
        <img src={image} />
    </div>
  )
}
