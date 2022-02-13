import React from 'react'
import './user-profile.styles.css'

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => this.setState({posts: data.slice(0, 5)}))
  }

  render() {
    const {name, email} = this.props
    const {posts} = this.state
    return (
      <div className="user-profile">
        <h1>{name}</h1>
        <p>{email}</p>
        <hr />
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default UserProfile
