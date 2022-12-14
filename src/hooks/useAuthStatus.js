import {useEffect, useState} from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false) //logged out by default
  const [checkingStatus, setCheckingStatus] = useState(true) // loading

  useEffect(()=>{
    const auth = getAuth()

    onAuthStateChanged(auth, (user) => {
      if(user) {
        setLoggedIn(true)
      }
      setCheckingStatus(false)
    })
  })



  return {loggedIn, checkingStatus}
}
