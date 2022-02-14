import UserProfile from './components/user-profile/user-profile.component'
import UserList from './components/user-list/user-list.component'
import PostComments from './components/post-comments/post-comments.component'
import './App.scss'

function App() {
  return (
    <div className="App">
      <UserList dataSource="https://jsonplaceholder.typicode.com/users" />
      <UserProfile
        name="Ali"
        email="Ali@email.com"
        dataSource="https://jsonplaceholder.typicode.com/posts"
      />
      <PostComments dataSource="https://jsonplaceholder.typicode.com/comments" />
    </div>
  )
}

export default App
