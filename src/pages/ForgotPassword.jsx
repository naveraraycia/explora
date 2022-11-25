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
    <div className="flex items-center justify-center min-h-screen">
    <div className="relative flex flex-col m-6 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
  
      <form onSubmit={onSubmit}>

      <div className="p-10 md:p-20">
        <h1 className="font-sans font-bold text-gray text-4xl mb-5 md:text-center">Forgot Password</h1>
        <p className="font-sans font-regular mb-5 text-gray tracking-wider max-w-md leading-8 md:text-center">Enter your email and we'll send you a link for resetting your password.</p>

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