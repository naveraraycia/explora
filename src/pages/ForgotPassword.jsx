import { Link } from 'react-router-dom'
import { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast, Flip } from 'react-toastify'
import Button from '../components/shared/Button'

function ForgotPassword() {
  const [email, setEmail] = useState('')

  function onChange(e) {
    setEmail(e.target.value)
  }

  async function onSubmit(e){
    e.preventDefault()
    
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was sent', {transition: Flip})
    } catch(error) {
      toast.error('Could not send reset password email', {transition: Flip})
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen md:p-10">
      <div className="relative flex flex-col items-center h-screen w-full bg-white md:rounded-2xl md:h-fit md:shadow-2xl lg:items-stretch lg:flex-row lg:space-y-0 lg:m-0 lg:w-fit">
          <div className="p-5 w-full max-w-[450px] md:p-10">
            <h1 className="font-sans font-bold text-gray text-4xl mb-5 md:text-center">Forgot Password</h1>
            <p className="font-sans font-regular mb-2 text-gray tracking-wider max-w-md md:text-center">Enter your email and we'll send you a link for resetting your password.</p>
            <p className="font-sans text-orange-500 font-regular text-xs mb-5 tracking-wider max-w-md leading-5 md:text-center">Password reset emails go right into your spam folder. Make sure to check it out.</p>
        
        <form onSubmit={onSubmit}>
            <div className="max-w-md">
              <input type="email" className="rounded-lg border border-lightGray mb-5 w-full text-gray p-5 placeholder:font-sans placeholder:font-normal focus:outline-none" placeholder="Email" id='email' value={email} onChange={onChange} />
            </div>

            <div className="flex flex-col items-center">
              <Button color='teal' btnBlock={true} type={'submit'}>Send Reset Link</Button>
              <Link to='/sign-in'>
                <p className="font-sans font-normal my-5 text-blueGreen text-sm tracking-wider hover:text-darkBlueGreen hover:md:scale-110">back to Sign In</p>
              </Link>
            </div>
        </form>
          </div>
      </div>
    </div>
  )
}

export default ForgotPassword