import { useState, useEffect } from "react"
import {collection, getDocs, query, where, orderBy, limit} from 'firebase/firestore'
import {db} from '../firebase.config'
import Slider from "react-slick";
import Header from "../components/shared/Header"
import heroPic from '../assets/desktop/palawanHero.jpg'
import CommentSet from "../components/shared/CommentSet"
import Feature from "../components/shared/Feature"
import Package from "../components/shared/Package"
import RoomCard from "../components/shared/RoomCard"
import PurchaseHeader from "../components/shared/PurchaseHeader"
import PricingCard from "../components/shared/PricingCard"
import Footer from "../components/shared/Footer"
import featureImg from '../assets/desktop/palawanFeature.jpg'
import package1 from '../assets/desktop/palawanPackage1.jpg'
import package2 from '../assets/desktop/palawanPackage2.jpg'
import package3 from '../assets/desktop/palawanPackage3.jpg'
import hotelImg1 from '../assets/desktop/palawanRoom.jpg'
import hotelImg2 from '../assets/desktop/palawanBathroom.jpg'
import hotelImg3 from '../assets/desktop/palawanFood.jpg'
import purchaseHeader from '../assets/desktop/palawanPurchaseHeader.jpg'
import footerImg from '../assets/desktop/footerPic.jpg'

function Palawan() {
    
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
      const q = query(commentsRef, where('location', '==', 'Palawan'), orderBy('timestamp', 'desc'), limit(8))
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
    <Header headerBg={heroPic} smallTitle='travel' bigTitle='to palawan' btnColor='blue' btnRedirect='purchase-section' description={`What is your idea of a perfect holiday? If it includes sun, sand, and the sound of waves crashing on the shore, then Palawan might just be your next destination. Visit the province and witness the natural wonders of this beautiful island. ⁣⁣`} />

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
        <Feature smallTitle='perfect place' bigTitle='perfect getaway' subTitle='Dance with the waves and enjoy a never ending summer' featureImg={featureImg} />

      </div>
      
      <section id="tour-packages">

        <div className="container flex flex-col space-y-10 items-start mt-32 text-white max-w-6xl px-5 mx-auto">

          <div className="mx-auto flex flex-col text-center items-center">
          <h2 className="text-xl font-sans font-normal tracking-widest uppercase md:text-3xl">things to do</h2>
            <h1 className='text-3xl font-sans font-black uppercase md:mt-0 md:text-5xl'>Palawan tour packages</h1>
          </div>

          <div className="flex flex-col w-full justify-between">
              <Package number='01' title='Island Hopping' description='On an island-hopping tour departing from El Nido, explore areas of Palawan that can only be reached by boat.' subDescription='This tour is great for first-timers as it takes tourists to hidden lagoons and beaches. The package offers free time to swim and snorkel at each of the five stops.' tourImg={package1} order='reverse'  />
              
              <Package number='02' title='Scuba Diving' description='All certified divers are welcome to participate in a scuba diving excursion to explore the underwater splendor of Palawan.' subDescription={`To enjoy the diversity of El Nido's marine life, you'll travel to three distinct dive locations, and the cost of the trip includes all of your equipment.`} tourImg={package2} />
              
              <Package number='03' title='Underground River Adventure' description='Visit the world-famous Underground River in Palawan.' subDescription='A buffet lunch is included in the entire package and is provided in one of the popular resident restaurants. Free pick-up and drop-off service is also included for you to enjoy a worry and hassle-free trip.' order='reverse' tourImg={package3} />


          </div>

        
          <div className="max-w-6xl w-full flex flex-col items-start text-white">
            <div>
              <h2 className="text-2xl font-sans font-normal tracking-widest uppercase text-left">hotel room package</h2>
              <h1 className='text-3xl font-sans font-black text-white uppercase md:text-5xl'>a cozy place to stay</h1>

              <p className="font-serif tracking-wider text-xl leading-7 text-white my-5 max-w-4xl mt-5">From amazing tour packages, Explora will also accomodate your hotel needs offering you the best and premium rooms in Bohol Province.</p>
            </div>



            <div className="flex flex-col space-y-10 my-10 md:flex-row md:space-y-0 md:space-x-10">

                <RoomCard color='blue' title='Luxury Room' caption='Relax from the trip and settle down on a luxury 5 star hotel room near the town.' cardImg={hotelImg1} />
               
                <RoomCard color='blue' title='Divine Bath' caption='Take a break from the trip by relaxing in a luxury hotel bathroom. Bath essentials included.' cardImg={hotelImg2} />

                <RoomCard color='blue' title='Finest Filipino Cousine' caption='Have a taste of authentic Filipino Cousine to complete your overall trip in the Philippines.' cardImg={hotelImg3} />
        
            </div>
          </div>
        </div>

        <section id="purchase-section" className="mt-20">
          <PurchaseHeader bgImg={purchaseHeader} />

          <div className="relative px-5 py-20 md:px-20" style={{
           
          }}>
   
              
              <div className="flex space-y-10 flex-col md:flex-row items-center justify-around md:space-y-0 md:space-x-10">

                <div className="md:hover:scale-110 hover:shadow-lg hover:cursor-pointer w-full h-full">
                  <PricingCard color='blue' location='Palawan' promo='basic' price={999} deals={['Choose ANY 1 from the tour packages (tour guide included)', 'Free Hotel Reservation for 5 days', 'Round trip flight accomodation']} />
                </div>

                <div className="md:hover:scale-110 hover:shadow-lg hover:cursor-pointer w-full h-full">
                  <PricingCard color='blue' location='Palawan' promo='premium' price={1999} deals={['Avail ALL the tour packages (tour guide included)', 'Free Hotel Reservation for 7 days', 'Round trip flight accomodation']} />
                </div>

                <div className="md:hover:scale-110 hover:shadow-lg hover:cursor-pointer w-full h-full">
                  <PricingCard color='blue' location='Palawan' promo='leveled up' price={1299} deals={['Choose ANY 2 from the tour packages (tour guide included)', 'Free Hotel Reservation for 6 days', 'Round trip flight accomodation']} />
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


      <Footer footerBg={footerImg} gradientColor='blue' />
 

    </>
  )
}

export default Palawan