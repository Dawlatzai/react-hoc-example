import React from 'react'
import WithComponent from '../with-component'

const UserProfile = ({name, email, data}) => (
  <div className="container">
    <h1>{name}</h1>
    <p>{email}</p>
    <hr />
    {data.map((post) => (
      <div className="post" key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    ))}
  </div>
)

export default WithComponent(UserProfile)
