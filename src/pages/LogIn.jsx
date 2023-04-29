import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { toast, Flip } from 'react-toastify'
import OAuth from '../components/OAuth'
import Button from '../components/shared/Button'
import loginPhoto from '../assets/desktop/login.jpg'
import visibilityIcon from '../assets/icons/visibilityIcon.svg'

function LogIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData

  const navigate = useNavigate()

  function onChange(e) {
    setFormData((prevState)=> ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  async function onSubmit(e){
    e.preventDefault()
    
    try{
      toast.success('Logging in...', {transition: Flip, autoClose: 500})
      const auth = getAuth()
      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      // check if there is an existing user with the inputted credentials
      if(userCredential.user) {
        navigate('/profile')
      }
    } catch(error) {
      toast.error('Bad user credentials', {transition: Flip})
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen md:p-10">
     <div className="relative flex flex-col items-center w-full bg-white md:rounded-2xl  lg:shadow-2xl lg:items-stretch lg:flex-row lg:space-y-0 lg:m-0 lg:w-fit">
      <div className="p-5 w-full max-w-[450px] md:p-10">
        <h1 className="font-sans font-bold text-gray text-4xl mb-5">Log In</h1>
        <p className="font-sans font-regular mb-5 text-gray tracking-wider leading-8">Log in to your account to book with Explora!</p> 
        <form onSubmit={onSubmit}>
          <div className="max-w-md">
            <input type="email" className="rounded-lg border border-lightGray mb-5 w-full text-gray p-5 placeholder:font-sans placeholder:font-normal focus:outline-none" placeholder="Email" id='email' value={email} onChange={onChange} />
            <div className="relative flex items-center justify-end">
              <img src={visibilityIcon} alt='show password' onClick={()=> setShowPassword((prevState) => !prevState)} className="absolute top-5 right-5 text-gray hover:cursor-pointer" />
              <input type={showPassword ? 'text' : 'password'} className="rounded-lg border border-lightGray mb-5 w-full text-gray p-5 placeholder:font-sans placeholder:font-normal focus:outline-none" placeholder="Password" id='password' value={password} onChange={onChange} />     
            </div>
          </div>

          <div className="flex flex-col items-center justify-between md:flex-row">
            <Link to='/forgot-password'>
            <p className="font-sans font-normal my-5 text-blueGreen text-sm tracking-wider hover:text-darkBlueGreen hover:md:scale-110">Forgot password</p>
            </Link>
            <Button color='blue' type={'submit'}>SIGN IN</Button>
          </div>

          <p className="font-sans font-normal my-5 text-center text-gray text-sm tracking-wider md:text-left">or log in with</p>
        </form>

        <div className="flex items-center justify-between flex-col md:flex-row">
          <OAuth />
          <Link to='/sign-up'>
            <p className="font-sans font-normal my-5 text-center text-blueGreen text-sm tracking-wider md:text-left hover:text-darkBlueGreen hover:md:scale-110">Sign Up instead</p>
          </Link>
        </div>
        
        <div className="my-5"> 
          <Link to='/'>
            <p className="font-sans text-gray text-xs hover:cursor-pointer hover:md:underline hover:text-[#373131] inline">Back to home</p>
          </Link>
        </div>
      </div>

      <img src={loginPhoto} alt="login" className="w-[430px] hidden lg:block lg:rounded-r-2xl" />
     </div>
    </div>
  )
}

export default LogIn