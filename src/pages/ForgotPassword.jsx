import {Link} from 'react-router-dom'
import { useState } from 'react'
import Button from '../components/shared/Button'
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import {toast, Flip} from 'react-toastify'

function ForgotPassword() {
  const [email, setEmail] = useState('')

  function onChange(e) {
    setEmail(e.target.value)
  }

  async function onSubmit(e){
    e.preventDefault()
    try{
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was sent', {transition: Flip})
    } catch(error) {
      toast.error('Could not send reset password email', {transition: Flip})
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen md:p-10">
    <div className="relative h-screen flex flex-col bg-white rounded-2xl md:flex-row md:space-y-0 md:m-0 md:h-auto md:shadow-2xl">
  
      <form onSubmit={onSubmit}>

      <div className="p-5 md:p-20">
        <h1 className="font-sans font-bold text-gray text-4xl mb-5 md:text-center">Forgot Password</h1>
        <p className="font-sans font-regular mb-2 text-gray tracking-wider max-w-md md:text-center">Enter your email and we'll send you a link for resetting your password.</p>
        <p className="font-sans text-orange-500 font-regular text-xs mb-5 tracking-wider max-w-md leading-5 md:text-center">Password reset emails go right into your spam folder. Make sure to check it out.</p>

        <div className="max-w-md">
        <input type="email" className="rounded-lg border border-lightGray mb-5 w-full text-gray p-5 placeholder:font-sans placeholder:font-normal focus:outline-none" placeholder="Email" id='email' value={email} onChange={onChange} />

        </div>

        <div className="flex flex-col items-center">
          <Button color='blue' btnBlock={true} type={'submit'}>Send Reset Link</Button>
          <Link to='/sign-in'>
          <p className="font-sans font-normal my-5 text-blueGreen text-sm tracking-wider hover:text-darkBlueGreen hover:md:scale-110">back to Sign In</p>
          </Link>
        </div>

      </div>

    </form>
    </div>
    </div>
  )
}

export default ForgotPassword