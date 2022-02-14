import React from 'react'
import WithComponent from '../with-component'

const PostComments = ({data}) => (
  <div className="container post-comments">
    <h1>Posts Comments</h1>
    {data.map((comment) => (
      <div className="comment" key={comment.id}>
        <h1>{comment.name}</h1>
        <p>{comment.body}</p>
      </div>
    ))}
  </div>
)

export default WithComponent(PostComments)
