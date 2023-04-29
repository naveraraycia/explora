import PropTypes from 'prop-types'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase.config'
import { FaDollarSign, FaCheckCircle } from 'react-icons/fa'
import { toast, Flip } from 'react-toastify'
import Button from './Button'
import Spinner from './Spinner'

function PricingCard({ color, promo, price, deals, location }) {
  // const [loading, setLoading] = useState(false)
  const [clicked, setClicked] = useState(false)
  const auth = getAuth()
  const navigate = useNavigate()

  function onClick(){
    if((window.confirm('Are you sure you want to Book this trip?')) === true){
      setClicked(true)

    if(auth.currentUser){
      let bookingDataCopy

      bookingDataCopy = {
        location,
        price,
        travelPackage: promo,
        timestamp: serverTimestamp(),
        userRef: auth.currentUser.uid
      }
    
      // @todo =>Await .then redirect to /profile

      addDoc(collection(db, 'bookings'), bookingDataCopy)
      toast.success('Package successfully booked!', {transition: Flip})
      // setLoading(false)
    
      setTimeout(()=>{
        navigate('/profile')
      },2000)
    } else {
      toast.error('Login to book with Explora!', {transition: Flip})
      navigate('/sign-in')
    }
  }
}

  return (
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

        <div onClick={onClick} >
          <Button color={color} isDisabled={clicked} btnBlock={true}>BOOK NOW</Button>
        </div>
      </div>
    </div>
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