import PropTypes from 'prop-types'
import Button from './shared/Button'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {addDoc, collection, doc, getDoc, updateDoc, serverTimestamp} from 'firebase/firestore'
import { db } from '../firebase.config'
import boracayImg from '../assets/desktop/bookingBoracay.jpg'
import palawanImg from '../assets/desktop/bookingPalawan.jpg'
import boholImg from '../assets/desktop/bookingBohol.jpg'
import { toast, Flip } from 'react-toastify'

function BookingItem({ booking, id }) {
  const auth = getAuth()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [disabledBtn, setDisabledBtn] = useState(false)
  const [commentPublished, setCommentPublished] = useState(false)
  const [showModal, setShowModal] = useState(null)
  const [profilePic, setProfilePic] = useState(null)
  const isMounted = useRef(true)
  const [commentData, setCommentData] = useState({
    location: '',
    text: '',
    userImg: '',
    username: '',
  })
  const {location, price, timestamp, comment, travelPackage} = booking

  let actualDate = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds/1000000)

  let month, day, year, fullDate;

  month = actualDate.getMonth() + 1
  day = actualDate.getDate()
  year = actualDate.getFullYear()
  fullDate = `${month}-${day}-${year}`

  ////////////////////////////////////////////////

  useEffect(()=>{
    if(isMounted) {
      onAuthStateChanged(auth, (user)=>{
        if(user) {
          setCommentData({
            ...commentData, userRef:user.uid
          })
        } else {
          navigate('/sign-in')
        }
      })
    }

    async function fetchProfilePic(){
      const docRef = doc(db, 'users', auth.currentUser.uid)
      const docSnap = await getDoc(docRef)
      setProfilePic(docSnap.data().profileImg)
    }

    fetchProfilePic()

  },[isMounted])



  function openReviewModal() {
    setShowModal(true)

      setCommentData((prevState)=>({
        ...prevState,
        username: auth.currentUser.displayName,
        location: location,
        userImg: profilePic
      }))
  }

  function closeModal() {
    setShowModal(false)

    setCommentData((prevState)=>({
      ...prevState,
      username: '',
      location: '',
      userImg: '',
      text: ''
    }))

  }

  function closeOnBackground(e) {
    if(e.target.classList.contains('close-modal')){
      closeModal()
    }
  }

  async function onSubmit(e){
    setCommentPublished(true)
    e.preventDefault()
    
    if(commentData.text === ''){
      toast.error('Please write a comment before publishing')
      setCommentPublished(false)
    } else {
     toast.success('Successfully reviewed!', {transition: Flip})

  
      const commentDataCopy = {
        ...commentData,
        timestamp: serverTimestamp()
      }
  
      const docRef = await addDoc(collection(db, 'comments'),commentDataCopy)

      const bookingRef = doc(db, 'bookings', id)
        await updateDoc(bookingRef, {
          rated: true
        })
      
      
      setLoading(false)
      navigate(0)
    
      }
    }

  function onMutate(e){
    e.preventDefault()
    if(e.target.value.length <= 5){
      setDisabledBtn(true)
    } else {
      setDisabledBtn(false)
      setCommentData((prevState)=> ({
        ...prevState,
        [e.target.id]: e.target.value,
      }))
    }
    
  }

  return (
    <>
  
    <section id="booking-package">

  
    <div className="flex flex-col space-y-10 md:items-center md:space-x-10 md:space-y-0 md:flex-row my-10 ">
      <div className="bg-center bg-cover w-full h-[350px] md:w-[400px] md:h-[400px] rounded-lg" style={{
        backgroundImage: `url(${location === 'Palawan' ? palawanImg : location === 'Bohol' ? boholImg : boracayImg})`
      }}></div>
      
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col space-y-1">
          <h1 className="font-sans font-bold text-gray text-3xl capitalize">{location}</h1>
          <p className="font-sans text-gray text-md capitalize">{`${travelPackage} Package`}</p>
        </div>

        <p className="font-sans font-bold text-4xl text-blueGreen">{`$${price}`}</p>

        <div className="flex flex-col space-y-2">
          <p className="font-sans text-gray capitalize text-sm">date booked</p>
          <div className="flex space-x-10">
            <p className="font-sans font-bold text-md text-gray">{fullDate}</p>
       
            {typeof booking.rated === 'undefined' && (
              <p onClick={openReviewModal} className="font-sans text-md font-bold text-blueGreen hover:text-darkBlueGreen hover:cursor-pointer">Write a review</p>
            )}
          </div>
          <p className="font-sans text-red-400 font-semibold text-sm max-w-sm">Kindly wait for our agent to email you for tour accomodation and booking finalizations.</p>
        </div>
      </div>
    </div>

    {showModal &&
     (
    <div id="review" className="close-modal fixed items-center py-20 px-5 justify-center w-full h-screen bg-[rgba(0,0,0,0.2)] top-0 left-0 right-0 bottom-0 " onClick={closeOnBackground}>
    <div className="p-10  bg-white text-gray items-center justify-center max-w-3xl mx-auto flex flex-col space-y-8 rounded-lg md:p-20">
        <h1 className="font-sans font-bold text-xl md:text-3xl">Write your review</h1>
        <p className="font-sans text-sm tracking-wide text-md max-w-xs leading-6 md:text-lg">Let people know how much you enjoyed your <span className='font-bold'>{booking.location}</span> trip!</p>
        <textarea id='text' name="reviewComment" typeof='text' maxLength={200} rows={6} className="rounded-lg border border-lightGray font-sans w-full text-gray text-xs placeholder:text-xs p-5 placeholder:font-sans placeholder:font-normal focus:outline-none md:placeholder:text-md md:text-md" placeholder="It was fun ..." onChange={onMutate} />
        <p className={`text-red-400 text-sm font-sans ${disabledBtn ? 'block' : 'hidden'}`} >Please type atleast 6 characters.</p>

        <div className="flex flex-col w-full space-y-3">

          <div className={`${commentPublished ? 'pointer-events-none' : ''} w-full`} onClick={onSubmit}>
            <Button btnBlock={true} isDisabled={disabledBtn} color='blue'>PUBLISH</Button>
          </div>

          <p className="text-sm font-sans tracking-wide text-blueGreen hover:text-darkBlueGreen mx-auto capitalize hover:cursor-pointer w-fit" onClick={closeModal} >Close</p>

        </div>
      </div>
      </div>
    )
    }


    </section>
    </>
  )
}

BookingItem.defaultProps = {
  booking: {},
  id: ''
}

BookingItem.propTypes = {
  booking: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
}

export default BookingItem