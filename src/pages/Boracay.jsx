import { useState, useEffect } from "react"
import { collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore'
import { db } from '../firebase.config'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/shared/Header"
import heroPic from '../assets/desktop/boracayHero.jpg'
import CommentSet from "../components/shared/CommentSet"
import Feature from "../components/shared/Feature"
import Package from "../components/shared/Package"
import RoomCard from "../components/shared/RoomCard"
import PurchaseHeader from "../components/shared/PurchaseHeader"
import PricingCard from "../components/shared/PricingCard"
import Footer from "../components/shared/Footer"
import featureImg from '../assets/desktop/boracayFeature.jpg'
import package1 from '../assets/desktop/boracayPackage1.jpg'
import package2 from '../assets/desktop/boracayPackage2.jpg'
import package3 from '../assets/desktop/boracayPackage3.jpg'
import hotelImg1 from '../assets/desktop/boracayRoom.jpg'
import hotelImg2 from '../assets/desktop/boracayBathroom.jpg'
import hotelImg3 from '../assets/desktop/boracayFood.jpg'
import purchaseHeader from '../assets/desktop/boracayPurchaseHeader.jpg'
import footerImg from '../assets/desktop/boracayFooter.jpg'

function Boracay() {
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
      const q = query(commentsRef, where('location', '==', 'Boracay'), orderBy('timestamp', 'desc'), limit(8))
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
    <Header headerBg={heroPic} smallTitle='travel' bigTitle='to boracay' btnColor='brown' btnRedirect='purchase-section' description={`The Philippine island of Boracay is one of the most popular spots in Asia with its crystal clear waters and white sandy beaches. ⁣Start your island-hopping experience now. Load up on sunscreen, water, and a camera for that perfect Instagram shot.`} />
    <div className="mt-10 mx-auto max-w-6xl">
      <Slider {...settings}>
        {!loading && (
          comments.map((commentItem)=>(
            <CommentSet key={commentItem.id} data={commentItem.data} />
          ))  
        )}
      </Slider>
    </div>

    <div className="container flex-col flex max-w-6xl mx-auto px-5 z-10 md:flex-row md:mt-10">
      <Feature smallTitle='one of the best' bigTitle='beach escapade' subTitle='The all time favorite of beach enthusiasts around the world.' featureImg={featureImg} />
    </div>
      
    <section id="tour-packages">
      <div className="container flex flex-col space-y-10 items-start mt-32 text-white max-w-6xl px-5 mx-auto">
        <div className="mx-auto flex flex-col text-center items-center">
          <h2 className="text-xl font-sans font-normal tracking-widest uppercase md:text-3xl">things to do</h2>
          <h1 className='text-3xl mt-3 font-sans font-black uppercase md:mt-0 md:text-5xl'>Boracay tour packages</h1>
        </div>

        <div className="flex flex-col w-full justify-between">
          <Package number='01' title='Visit White Beach' description='Experience Boracay’s most popular beach and witness its breathtaking sunsets.' subDescription='This tour is the top pick of travelers who have visited Boracay. It includes a free boat rental for the day to maximize your Boracay trip. Enjoy the overall beach experience in soft, white sand.' tourImg={package1} order='reverse'  />
              
          <Package number='02' title='Visit Puka Shell Beach' description='Fly to Boracay’s second largest beach and have fun under the sun in sand filled with white seashells.' subDescription={`This beach is well-known for its abundant white seashells along the shore. Bathe under the sun in splashing waters while you enjoy this tour’s free jet ski package.`} tourImg={package2} />
              
          <Package number='03' title='Cruise to Crystal Cove Island' description='Visit Crystal Cove Island’s pristine clear waters.' subDescription='This is one of Boracay’s most visited island for its crystal clear waters and relaxing Nipa huts. This tour includes a free cruise around the island’s vicinity.' order='reverse' tourImg={package3} />
        </div>

        <div className="max-w-6xl w-full flex flex-col items-start text-white">
          <div>
            <h2 className="text-2xl font-sans font-normal tracking-widest uppercase text-left">hotel room package</h2>
            <h1 className='text-3xl font-sans font-black text-white uppercase md:text-5xl'>a cozy place to stay</h1>
            <p className="font-serif tracking-wider text-xl leading-7 text-white my-5 max-w-4xl mt-5">From amazing tour packages, Explora will also accomodate your hotel needs offering you the best and premium rooms in Bohol Province.</p>
          </div>

          <div className="flex flex-col space-y-10 my-10 md:flex-row md:space-y-0 md:space-x-10">
            <RoomCard color='blue' title='Rooms near the beach' caption='Continue feeling the ocean summer vibes as you stay on this luxury room near the beach.' cardImg={hotelImg1} />
               
            <RoomCard color='blue' title='Ocean Jacuzzi' caption='Bathe under the sunset in this Jacuzzi pool while you enjoy the ocean breeze. Bath essentials included.' cardImg={hotelImg2} />

            <RoomCard color='blue' title='Finest Filipino Cousine' caption='Have a taste of authentic Filipino Cousine to complete your overall trip in the Philippines.' cardImg={hotelImg3} />
        
          </div>
        </div>
      </div>

      <section id="purchase-section" className="mt-20">
        <PurchaseHeader bgImg={purchaseHeader} />
        <div className="relative px-5 mx-auto py-20 max-w-fit md:px-20">
          <div className="flex flex-col space-y-10 xl:flex-row xl:space-x-10 xl:space-y-0">
            <div className="flex flex-1 items-stretch">
                <PricingCard color='blue' location='Boracay' promo='basic' price={1299} deals={['Choose ANY 1 from the tour packages (tour guide included)', 'Free Hotel Reservation for 5 days', 'Round trip flight accomodation']} />
            </div>

            <div className="flex flex-1 items-stretch">
                <PricingCard color='blue' location='Boracay' promo='premium' price={2299} deals={['Avail ALL the tour packages (tour guide included)', 'Free Hotel Reservation for 7 days', 'Round trip flight accomodation']} />
            </div>

            <div className="flex flex-1 items-stretch">
                <PricingCard color='blue' location='Boracay' promo='leveled up' price={1599} deals={['Choose ANY 2 from the tour packages (tour guide included)', 'Free Hotel Reservation for 6 days', 'Round trip flight accomodation']} />
            </div>
          </div>
        </div>
      </section>
    </section>

    <div className="container flex flex-col space-y-10 items-start mb-32 mt-20 text-white max-w-6xl p-10 mx-auto">
      <div className="mx-auto flex flex-col text-center items-center space-y-3">
        <h2 className="text-md font-sans font-bold tracking-widest md:text-3xl">What are you waiting for?</h2>
        <h1 className='text-md font-sans tracking-wide uppercase md:mt-0 md:text-2xl'>let's go travel with explora</h1>
      </div>
    </div>

    <Footer footerBg={footerImg} gradientColor='dark blue' />
    </>
  )
}

export default Boracay