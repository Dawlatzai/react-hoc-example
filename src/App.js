import './App.scss'

import UserProfile from './components/user-profile/user-profile.component'
function App() {
  return (
    <div className="App">
      <div className="container">
        <UserProfile name="Ali" email="Ali@email.com" />
      </div>
    </div>
  )
}

export default App
