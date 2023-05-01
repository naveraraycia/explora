import { useState, useEffect } from "react"
import { collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore'
import { db } from '../firebase.config'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/shared/Header"
import Feature from "../components/shared/Feature"
import Package from "../components/shared/Package"
import RoomCard from "../components/shared/RoomCard"
import PurchaseHeader from "../components/shared/PurchaseHeader"
import PricingCard from "../components/shared/PricingCard"
import Footer from "../components/shared/Footer"
import CommentSet from '../components/shared/CommentSet'
import heroPic from '../assets/desktop/boholHeader.jpg'
import featureImg from '../assets/desktop/boholFeature.jpg'
import package1 from '../assets/desktop/boholPackage1.jpg'
import package2 from '../assets/desktop/boholPackage2.jpg'
import package3 from '../assets/desktop/boholPackage3.jpg'
import hotelImg1 from '../assets/desktop/boholRoom.jpg'
import hotelImg2 from '../assets/desktop/boholBathroom.jpg'
import hotelImg3 from '../assets/desktop/boholFood.jpg'
import purchaseHeader from '../assets/desktop/boholPurchaseHeader.jpg'
import footerImg from '../assets/desktop/boholFooter.jpg'

function Bohol() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    speed: 17000,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          speed: 500,
          autoplay: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          speed: 500,
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  }

  const [comments, setComments] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    async function fetchComments(){
      const commentsRef = collection(db, 'comments')
      const q = query(commentsRef, where('location', '==', 'Bohol'), orderBy('timestamp', 'desc'), limit(8))
      const querySnap = await getDocs(q)

      let commentsArray = []
      querySnap.forEach((docItem)=>{
        return commentsArray.push({
                  id: docItem.id,
                  data: docItem.data()
                })
      })
      setComments(commentsArray)
      setLoading(false)
    }
    
    fetchComments()
  },[])


  return (
    <>
    <Header headerBg={heroPic} smallTitle='travel' bigTitle='to bohol' btnColor='brown' btnRedirect='purchase-section' description={`The beauty of Bohol is that it is a place where people are still gentle and kind. It's a place where you can still find true Filipino hospitality and warmth. Visit Bohol and explore the wonders of this island for yourself!`} />

    <div className="mt-10">
      <Slider {...settings}>
        {!loading && (
          comments.map((commentItem)=>(
            <CommentSet key={commentItem.id} data={commentItem.data} />
          ))  
        )}
      </Slider>
    </div>

    <div className="container flex-col flex max-w-6xl mx-auto px-5 z-10 md:flex-row md:mt-10">
      <Feature smallTitle='jungle greenery' bigTitle='crystal clear waters' subTitle='Be one with nature as you enjoy Bohol’s jungle and smalller islands' featureImg={featureImg} />
    </div>
      
    <section id="tour-packages">
      <div className="container flex flex-col space-y-10 items-start mt-32 text-white max-w-6xl px-5 mx-auto">
        <div className="mx-auto flex flex-col text-center items-center">
          <h2 className="text-xl font-sans font-normal tracking-widest uppercase md:text-3xl">things to do</h2>
          <h1 className='text-3xl font-sans font-black uppercase md:mt-0 md:text-5xl'>Bohol tour packages</h1>
        </div>

        <div className="flex flex-col w-full justify-between">
          <Package number='01' title='Ocean Diving or Snorkling' description='During this full-day tour, explore the tropical marine life and vibrant corals in Panglao Island while snorkeling in the clear waters or unwinding on the white, sandy beaches.' subDescription='Have fun exploring under the ocean. For individuals who want to learn more about the undersea environment, diving is another alternative.' tourImg={package1} order='reverse'  />    

          <Package number='02' title='River Cruise' description='Experience a serene cruise on Loboc River as our tour guide shares the history of the island and comunity.' subDescription='Discover yet another cultural wonder of Bohol. This package include free lunch and snacks within the cruise ship.' tourImg={package2} />
              
          <Package number='03' title='Trip to Chocolate Hills with Tarsier' description='Discover the best of Bohol Province as you take a look at the majestic geological formations of the Chocolate Hills.' subDescription='Visit the remarkable geological formations known as the Chocolate Hills with a private guide and observe the little local Tarsier primates at a wildlife refuge. ' order='reverse' tourImg={package3} />
        </div>

        <div className="max-w-6xl w-full flex flex-col items-start text-white">
          <div>
            <h2 className="text-2xl font-sans font-normal tracking-widest uppercase text-left">hotel room package</h2>
            <h1 className='text-3xl font-sans font-black text-white uppercase md:text-5xl'>a cozy place to stay</h1>
            <p className="font-serif tracking-wider text-xl leading-7 text-white my-5 max-w-4xl mt-5">From amazing tour packages, Explora will also accomodate your hotel needs offering you the best and premium rooms in Bohol Province.</p>
          </div>

          <div className="flex flex-col space-y-10 my-10 md:flex-row md:space-y-0 md:space-x-10">
            <RoomCard color='brown' title='5 star room' caption='Relax from the trip and settle down on a luxury 5 star hotel room near the town.' cardImg={hotelImg1} />
               
            <RoomCard color='brown' title='Exquisite Showers' caption='The room comes with an exquisite bronze bathtub to top up the experience. Bath essentials included.' cardImg={hotelImg2} />

            <RoomCard color='brown' title='Finest Filipino Cousine' caption='Have a taste of authentic Filipino Cousine to complete your overall trip in the Philippines.' cardImg={hotelImg3} />
          </div>
        </div>
      </div>

      <section id="purchase-section" className="mt-20">
        <PurchaseHeader bgImg={purchaseHeader} />

        <div className="relative px-5 py-20 md:px-20">
          <div className="flex flex-col space-y-10 xl:flex-row xl:space-x-10 xl:space-y-0">
            <div className="xl:hover:scale-110 hover:shadow-lg hover:cursor-pointer flex flex-1 items-stretch">
              <PricingCard color='brown' location='Bohol' promo='basic' price={699} deals={['Choose ANY 1 from the tour packages (tour guide included)', 'Free Hotel Reservation for 5 days', 'Round trip flight accomodation']} />
            </div>

            <div className="xl:hover:scale-110 hover:shadow-lg hover:cursor-pointer flex flex-1 items-stretch">
              <PricingCard color='brown' location='Bohol' promo='premium' price={1499} deals={['Avail ALL the tour packages (tour guide included)', 'Free Hotel Reservation for 7 days', 'Round trip flight accomodation']} />
            </div>

            <div className="xl:hover:scale-110 hover:shadow-lg hover:cursor-pointer flex flex-1 items-stretch">
              <PricingCard color='brown' location='Bohol' promo='leveled up' price={999} deals={['Choose ANY 2 from the tour packages (tour guide included)', 'Free Hotel Reservation for 6 days', 'Round trip flight accomodation']} />
            </div>
          </div>
        </div>      
      </section>
    </section>

      <div className="container flex flex-col space-y-10 items-start mb-32 mt-20 text-white max-w-6xl p-10 mx-auto">
        <div className="mx-auto flex flex-col text-center items-center space-y-3">
          <h2 className="text-md font-sans font-bold tracking-widest md:text-3xl">What are you waiting for?</h2>
          <h1 className='text-md font-sans tracking-wide uppercase mt-0 md:text-2xl'>let's go travel with explora</h1>
        </div>
      </div>

      <Footer footerBg={footerImg} gradientColor='brown' />
    </>
  )
}

export default Bohol