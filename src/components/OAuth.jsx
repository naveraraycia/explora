import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast, Flip } from 'react-toastify'
import googleIcon from '../assets/icons/google.png'

function OAuth() {
  const navigate = useNavigate()

  async function onGoogleClick() {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)

      if(!docSnap.exists()){
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp()
        })
      }

      toast.success('Logging in...', {transition: Flip, autoClose: 500})
      navigate('/profile')
    } catch(error){
      toast.error('Could not authorize with Google', {transition: Flip})
    }
  }

  return (
    <button className='py-6 px-12 flex space-x-2 items-center justify-center w-full bg-transparent rounded-lg text-gray border border-lightGray font-semibold font-sans transition hover:md:-translate-y-1 duration-150 hover:shadow-lg md:w-auto' onClick={onGoogleClick}>
      <img src={googleIcon} className="w-[35px]" alt="google" />
      <p className='font-sans tracking-wider font-semibold text-gray'>Google</p>
    </button>
  )
}

export default OAuth