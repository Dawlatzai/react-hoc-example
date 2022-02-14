import React from 'react'

import WithComponent from './../with-component'

const UserList = ({data}) => (
  <div className="container user-list">
    <h1> Users List </h1>
    {data.map((user) => (
      <div className="user-list" key={user.id}>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
    ))}
  </div>
)

export default WithComponent(UserList)
