import headerImg from '../assets/desktop/profileHeader.jpg'
import Navbar from '../components/shared/Navbar'
import {getAuth, updateProfile, updateEmail} from 'firebase/auth'
import {useNavigate, Link } from 'react-router-dom'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateDoc, doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import {useState, useEffect} from 'react'
import {toast, Flip} from 'react-toastify'

import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'


function EditProfile() {
  const footerYear = new Date().getFullYear()
  const auth = getAuth()
  const navigate = useNavigate()
  const storage = getStorage()
  const [imageSave, setImageSave] = useState(false)
  const [photo, setPhoto] = useState('')
  const [loading, setLoading] = useState(false)
  const [photoURL, setPhotoURL] = useState('')
  const [defaultPhoto, setDefaultPhoto] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
  const [formData,setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const {name, email} = formData

  async function upload(file, currentUser, setLoading){
    const fileRef = ref(storage, 'images/' + auth.currentUser.uid)

    setLoading(true)
    console.log(loading)
    uploadBytes(fileRef, file).then(()=> {
      getDownloadURL(fileRef).then((url)=>{
          setPhotoURL(url)
          setDefaultPhoto(url)

      }).catch(error => {
       toast.error('An error occurred while uploading image', {transition: Flip})
      })
    }).catch(error => {
      toast.error('An error occurred while uploading image', {transition: Flip})
    })

    setLoading(false)
    toast.success('Changing image...', {transition: Flip, autoClose: 3000})
  }

  //////////////////////////////////////////////////

  useEffect(()=>{
    async function fetchProfilePic(){
      const docRef = doc(db, 'users', auth.currentUser.uid)
      const docSnap = await getDoc(docRef)
      setDefaultPhoto(docSnap.data().profileImg)

    }
    fetchProfilePic()
    
  },[auth.currentUser])


  //////////////////////////////////////////////////

  async function onSubmit() {

    try{
      auth.currentUser.displayName !== name && (

        await updateProfile(auth.currentUser, {
          displayName: name
        })
      )
      
      auth.currentUser.email !== email &&
        (await updateEmail(auth.currentUser, email))


        const userRef = doc(db, 'users', auth.currentUser.uid)
        await updateDoc(userRef, {
          name: name,
          email: email
        })

        imageSave && (
          updateDoc(userRef, {
            profileImg: photoURL
          })
        )
        toast.success('Saved', {transition: Flip, autoClose: 500})
        navigate('/profile')
        
      
    } catch(error) {
      toast.error('Could not edit your profile', {transition: Flip})
    }
  }

  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  function onSubmitImage(){
    upload(photo, auth.currentUser, setLoading )
    setImageSave(true)
      
  }

  function onFileUpload(e){
    if(e.target.files[0]){
      setPhoto(e.target.files[0])
    }
  }


  return (
    <>
       <section id="edit-profile" className='space-y-10'>
      <div className="bg-cover bg-center w-full h-[300px]" style={{
        backgroundImage: `url(${headerImg})`
      }}>
        <div className="container flex-col flex max-w-6xl mx-auto px-5 py-12">
          <Navbar />    
        </div>
      </div>

      <div className="container space-y-5 max-w-6xl mx-auto px-5 py-12 md:space-y-0">
        <form className='flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-10 '>
        <div className="flex-col items-center flex space-y-5 sm:inline-flex sm:items-start md:items-center">
          <img src={defaultPhoto} alt="profile" className='rounded-lg border-4 border-white w-[200px] h-[200px]' />
          <label>
            <input type="file" className="inline text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold file:font-sans
            file:bg-white file:text-blueGreen
            hover:file:bg-slate-200 hover:cursor-pointer
            " onChange={onFileUpload}/>
          </label>
          <p className="font-sans text-md font-semibold text-blueGreen hover:text-darkBlueGreen hover:cursor-pointer" onClick={()=> onSubmitImage()}>Save Photo</p>
            
        </div>

        <div className="flex flex-col flex-1 space-y-6">
          <div className='flex flex-col space-y-3'>
            <label htmlFor="name" className='font-sans text-md font-bold text-gray'>Full Name</label>
            <input type="text" className="rounded-lg bg-white p-4 text-gray text-md placeholder:text-md placeholder:text-lightGray placeholder:font-sans focus:outline-none" placeholder={name} value={name} onChange={onChange} id="name" />
          </div>
          
          <div className='flex flex-col space-y-3'>
            <label htmlFor="name" className='font-sans text-md font-bold text-gray'>Email</label>
            <input type="email" className="rounded-lg bg-white p-4 text-gray text-md placeholder:text-md placeholder:text-lightGray placeholder:font-sans focus:outline-none" placeholder={email} value={email} onChange={onChange} id="email" />
          </div>

          <p className="font-sans text-md font-semibold text-blueGreen hover:text-darkBlueGreen hover:cursor-pointer" onClick={()=> onSubmit()}>Save Changes</p>

        </div>
        </form>
      </div>

      
    <footer className='bg-blueGreen mt-20'>
     
     <div className='flex flex-col py-10 px-5  space-y-4 items-center justify-end md:justify-between md:items-end md:flex-row md:p-20 md:py-10'>

      <div className="flex space-x-4">
        <a href='https://www.facebook.com/' target={'_blank'} rel='noreferrer'>
        <FaFacebookSquare className='text-4xl md:text-5xl text-white hover:text-darkBlueGreen' />
        </a>

        <a href='https://www.instagram.com/' target={'_blank'} rel='noreferrer'>
        <FaInstagramSquare className='text-4xl md:text-5xl text-white hover:text-darkBlueGreen' />
        </a>

        <a href='https://twitter.com/?lang=en' target={'_blank'} rel='noreferrer'>
        <FaTwitterSquare className='text-4xl md:text-5xl text-white hover:text-darkBlueGreen' />
        </a>
      </div>

      <Link to='/'>
      <p className="font-sans font-black text-white text-5xl text-center uppercase hover:cursor-pointer md:text-5xl">Explora</p>
      </Link>

      <p className="font-sans text-center font-semibold text-lg tracking-wide text-white md:text-2xl md:font-bold">&copy; {footerYear} <span className='text-xs'> RMFN</span></p>

     
     </div>

    </footer>
    </section>
    </>
  )
}


export default EditProfile