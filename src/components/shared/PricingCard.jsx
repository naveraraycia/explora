import PropTypes from 'prop-types'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase.config'
import { FaDollarSign, FaCheckCircle } from 'react-icons/fa'
import { toast, Flip } from 'react-toastify'
import Button from './Button'

function PricingCard({ color, promo, price, deals, location }) {
  const [showModal, setShowModal] = useState(false)
  const auth = getAuth()
  const navigate = useNavigate()
  
  function onBookTour() {
    if(auth.currentUser) {
      let bookingDataCopy

      bookingDataCopy = {
        location,
        price,
        travelPackage: promo,
        timestamp: serverTimestamp(),
        userRef: auth.currentUser.uid
      }

      try {
        async function userAddBooking(){
          await addDoc(collection(db, 'bookings'), bookingDataCopy)
          toast.success('Package successfully booked!', {transition: Flip})
          navigate('/profile')
        }

          userAddBooking()
      } catch(error) {
          toast.error(`Error: ${error}`, {transition: Flip}) 
      }
    } else {
      toast.error('Login to book with Explora!', {transition: Flip})
      navigate('/sign-in')
    }
  }

  return (
    <>
      <div className={`${color === 'teal' ? 'bg-[rgba(153,184,191,0.7)]' : color === 'blue' ? 'bg-[rgba(133,158,177,0.5)]' : 'bg-[rgba(176,145,137,0.7)]'} p-10 rounded-lg flex-1 md:p-20`}>
        <div className="flex flex-col space-y-5">
          <h1 className="font-sans mx-auto text-center text-white uppercase text-xl tracking-wide md:text-2xl">{promo}</h1>
          <div className="flex items-center justify-center mx-auto">
            <FaDollarSign className={`${color === 'brown' ? 'text-brownSaturated' : color === 'teal' ? 'text-blueGreen-3' : color === 'blue' ? 'text-blue-3': ''} flex-none text-2xl md:text-4xl `} />
            <p className="font-black font-sans text-4xl text-white md:text-6xl">{price}</p>
          </div>

          <div className="flex flex-col space-y-3">
            {deals.map((dealItem, index)=>(
              <div key={index} className="flex items-center space-x-5">
                <FaCheckCircle className={`${color === 'brown' ? 'text-brownSaturated' : color === 'teal' ? 'text-blueGreen-3' : color === 'blue' ? 'text-blue-3': ''} flex-none text-2xl `} />
                <p className="font-sans leading-6 text-sm text-white">{dealItem}</p>
              </div>
            ))}
          </div>

          <div onClick={()=> {setShowModal(true)}}>
            <Button color={color} btnBlock={true}>BOOK NOW</Button>
          </div>
        </div>
      </div>

    {showModal &&
    (
      <div id="review" className="close-modal fixed items-center py-20 px-5 justify-center w-full h-screen bg-[rgba(0,0,0,0.2)] top-0 left-0 right-0 bottom-0" 
        onClick={(e)=> {
          if(e.target.classList.contains('close-modal')){
            setShowModal(false)
          }
        }}>
        <div className="p-10 bg-white text-gray items-center justify-center max-w-3xl mx-auto flex flex-col space-y-8 rounded-lg md:p-20">
          <h1 className="font-sans font-bold text-xl md:text-3xl">Are you sure you want to Book this trip?</h1>
            
          <div className="flex w-full space-x-10">
            <div className='w-full' onClick={() => onBookTour()}>
              <Button color={'teal'} btnBlock={true}>Yes</Button>
            </div>

            <div className='w-full' onClick={() => setShowModal(false)}>
              <Button color={'red'} btnBlock={true}>No</Button>
            </div>
          </div>
        </div>
      </div>
    )
    }
  </>
  )
}


PricingCard.defaultProps = {
  color: 'blue',
  promo: 'basic',
  price: 699,
  deals: [],
  location: ''
}

PricingCard.propTypes = {
  color: PropTypes.string.isRequired,
  promo: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  deals: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired
}

export default PricingCard