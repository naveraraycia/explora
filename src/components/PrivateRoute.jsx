import {Navigate, Outlet} from 'react-router-dom'
import {useAuthStatus} from '../hooks/useAuthStatus'
import Spinner from './shared/Spinner'


function PrivateRoute(){
  const { loggedIn, checkingStatus }  = useAuthStatus()
  
  // check if components are still loading / fetching auth.currentUser
  if(checkingStatus) {
    return (
      <Spinner />
    )
  }
  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PrivateRoute