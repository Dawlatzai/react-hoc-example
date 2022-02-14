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

// class UserList extends React.Component {
// constructor(props) {
//   super(props)
//   this.state = {
//     users: [],
//   }
// }

// componentDidMount() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((data) => this.setState({users: data.slice(0, 5)}))
// }

//   render() {
//     const {users} = this.state
//     return (
//       <div className="container user-list">
//         {users.map((user) => (
//           <div className="user-list" key={user.id}>
//             <h1>{user.name}</h1>
//             <p>{user.email}</p>
//           </div>
//         ))}
//       </div>
//     )
//   }
// }

export default WithComponent(UserList)
