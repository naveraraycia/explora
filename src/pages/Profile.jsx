import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import {getAuth} from 'firebase/auth'
import { doc, collection, getDocs, query, where, orderBy, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config'

import headerImg from '../assets/desktop/profileHeader.jpg'
import Navbar from '../components/shared/Navbar'
import BookingItem from '../components/BookingItem'


function Profile() {
  const auth = getAuth()
  
  const [bookings, setBookings] = useState(null)
  const [loading, setLoading] = useState(true)
  const [profilePic, setProfilePic] = useState(null)
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
    photoURL: profilePic
  })

  const {name, email, photoURL} = formData
  const navigate = useNavigate()

  useEffect(()=>{
    async function fetchProfilePic(){
      const docRef = doc(db, 'users', auth.currentUser.uid)
      const docSnap = await getDoc(docRef)
      setProfilePic(docSnap.data().profileImg)
    }
    fetchProfilePic()
    async function fetchUserBookings() {
      const bookingsRef = collection(db, 'bookings')
      const q = query(bookingsRef, where('userRef', '==', auth.currentUser.uid), orderBy('timestamp', 'desc'))
      const querySnap = await getDocs(q)

      let bookings =[]

      querySnap.forEach((docItem)=>{
        return bookings.push({
          id: docItem.id,
          data: docItem.data()
        })
      })

      setBookings(bookings)
      setLoading(false)
    }

    fetchUserBookings()
  },[auth.currentUser.uid])

  function onLogout(){
    auth.signOut()
    navigate('/sign-in')
  }

  const footerYear = new Date().getFullYear()

  return (
    <>
    <section id="header">
      <div className="bg-cover bg-center w-full h-[300px]" style={{
        backgroundImage: `url(${headerImg})`
      }}>
        <div className="container flex-col flex max-w-6xl mx-auto px-5 py-12">
          <Navbar />    
        </div>
      </div>


      <div className="container space-y-5 columns-xs max-w-6xl mx-auto gap-0 px-5 py-12 md:space-y-0">

        <div className="-mt-32 flex-col items-center flex space-y-5 sm:inline-flex sm:items-start md:items-center">
            <img src={profilePic} alt="profile" className='rounded-lg border-4 border-white w-[200px] h-[200px]' />
            <p className="font-sans font-semibold text-center tracking-wide text-lg text-blueGreen capitalize hover:text-darkBlueGreen hover:cursor-pointer" onClick={()=> navigate('/edit-profile')}>edit profile</p>
        </div>

        <div className=" flex-col items-center flex space-y-5 sm:items-start">
          <div className="flex flex-col space-y-1">
            <h1 className="font-sans font-bold text-center text-gray text-xl capitalize sm:text-left">{name}</h1>
            <p className="font-sans text-gray tracking-wide text-md">{email}</p>
          </div>
          <p className="font-sans text-md font-bold text-blueGreen hover:cursor-pointer hover:text-darkBlueGreen capitalize" onClick={onLogout}>log out</p>
        </div>

      </div>
    </section>

    <section id="bookings">
      <div className="container flex flex-col space-y-10 max-w-6xl mx-auto gap-0 px-5 py-12 ">
        <h1 className="font-sans font-bold text-center text-gray text-xl capitalize sm:text-left">Your Bookings</h1>
        
        <div className="flex flex-col">

        
        {!loading && bookings?.length > 0 && (
          <>
            {bookings.map((bookingItem)=>(
             
              <BookingItem key={bookingItem.id} booking={bookingItem.data} id={bookingItem.id} />

              
            ))}
          </>
        )}
 
        </div>
      </div>
    </section>

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
    
    </>
  ) 
}

export default Profile