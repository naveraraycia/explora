import { useState } from 'react'
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {db} from '../firebase.config'
import { useNavigate } from 'react-router-dom'
import {setDoc, doc, serverTimestamp} from 'firebase/firestore'
import {toast, Flip} from 'react-toastify'
import OAuth from '../components/OAuth'

import signUpPhoto from '../assets/desktop/signup.jpg'
import {Link} from 'react-router-dom'
import Button from '../components/shared/Button'
import visibilityIcon from '../assets/icons/visibilityIcon.svg'


function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email:'',
    password: '',
    name: '',
    profileImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  })

  const navigate = useNavigate()

  const {email, password, name} = formData

  function onChange(e){
    setFormData((prevState)=> ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    toast.success('Signing in...', {transition: Flip, autoClose: 800})
    try{
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      updateProfile(auth.currentUser, {
        displayName: name
      })

    
      // for saving user to firestore database
      const formDataCopy = {...formData}

      // don't include password when storing data to database
      delete formDataCopy.password

      // add timestamp property
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), formDataCopy)
      navigate('/profile')
    } catch (error) {
      toast.error('Something went wrong with the registration', {transition: Flip})
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen md:p-10">
    <div className="relative flex flex-col bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">

      <div className="order-2 p-5 md:p-20">
        <h1 className="font-sans font-bold text-gray text-4xl mb-5">Sign Up</h1>
        <p className="font-sans font-regular mb-5 text-gray tracking-wider leading-8">Create an account to start your awesome adventures!</p>

    <form onSubmit={onSubmit}>

        <div className="max-w-md">
        <input type="text" className="rounded-lg border border-lightGray mb-5 w-full text-gray p-5 placeholder:font-sans placeholder:font-normal focus:outline-none" placeholder="Name" id='name' value={name} onChange={onChange} />

        <input type="email" className="rounded-lg border border-lightGray mb-5 w-full text-gray p-5 placeholder:font-sans placeholder:font-normal focus:outline-none" placeholder="Email" id='email' value={email} onChange={onChange} />

        <div className="relative flex items-center justify-end">
          <img src={visibilityIcon} alt='show password' onClick={()=> setShowPassword((prevState) => !prevState)} className="absolute top-5 right-5 text-gray hover:cursor-pointer" />

          <input type={showPassword ? 'text' : 'password'} className="rounded-lg border border-lightGray mb-5 w-full text-gray p-5 placeholder:font-sans placeholder:font-normal focus:outline-none" placeholder="Password" id='password' value={password} onChange={onChange} />
          
        </div>
        </div>

        <div className="flex flex-col items-center justify-between md:flex-row">
          <Link to='/sign-in' className='order-2'>
          <p className="font-sans font-normal text-blueGreen text-sm tracking-wider hover:text-darkBlueGreen hover:md:scale-110 mt-5 md:mt-0">Log In instead</p>
          </Link>

          <Button type={'submit'} className="order-1" color='blue'>SIGN UP</Button>
        </div>

      </form>
        <div className="flex mb-5 items-center justify-between flex-col md:flex-row">
        
          <p className=" font-sans font-normal my-5 text-center text-gray text-sm tracking-wider md:text-left">or sign up with</p>
          
          <OAuth />
        </div>

        <div className="my-5"> 
        <Link to='/'>
          <p className="font-sans text-gray text-xs hover:cursor-pointer hover:md:underline hover:text-[#373131] inline">Back to home</p>
        </Link>
        </div>

      </div>
      
      <img src={signUpPhoto} alt="login" className="order-1 w-[430px] hidden md:block md:rounded-l-2xl" />
    </div>
    </div>
  )
}

export default SignUp