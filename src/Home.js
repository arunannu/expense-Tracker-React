import React from 'react'
import { signOut } from 'firebase/auth'
import { database } from './Components/Firebase'
import { useNavigate} from 'react-router-dom'
const Home = () => {
    const history = useNavigate()
    const signoutHandler = ()=>{
        signOut(database).then(val=>{
            console.log(val)
            history("/")
        })
        
    }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={signoutHandler}>SignOut</button>
    </div>
  )
}

export default Home
