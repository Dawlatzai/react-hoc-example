import './App.scss'

import UserProfile from './components/user-profile/user-profile.component'
import UserList from './components/user-list/user-list.component'
function App() {
  return (
    <div className="App">
      <UserList />

      <UserProfile name="Ali" email="Ali@email.com" />
    </div>
  )
}

export default App
