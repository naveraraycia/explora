import { useState, useEffect } from "react"
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../firebase.config'
import Header from "../components/shared/Header"
import CardSet from "../components/CardSet"
import DestinationSet from "../components/DestinationSet"
import TestimonialOverall from "../components/TestimonialOverall"
import AccordionFaq from "../components/AccordionFaq"
import Footer from "../components/shared/Footer"
import heroPic from '../assets/desktop/indexHero.jpg'
import boholPic from '../assets/desktop/boholIndexPic.jpg'
import palawanPic from '../assets/desktop/palawanIndexPic.jpg'
import boracayPic from '../assets/desktop/boracay1.jpg'
import testimonialPic from '../assets/desktop/testimonialIndexPic.jpg'
import footerPic from '../assets/desktop/footerPic.jpg'

function Explora() {
  const [comments, setComments] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    async function fetchComments(){
      const commentsRef = collection(db, 'comments')
      const q = query(commentsRef, orderBy('timestamp', 'desc'), limit(8))
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
    <Header headerBg={heroPic} btnColor='teal' btnRedirect='popular-destinations' smallTitle='discover' bigTitle='the Philippines' description={`We make it easy for you to find and book tours in the Philippines. We offer tours from Bohol to Boracay and Palawan. Book now!`} />
    <section id="why-explora" className="mt-10">
      <div className="container flex-col flex max-w-6xl mx-auto px-5 py-12 z-10 md:flex-row">
        <div className=" flex flex-col items-center mt-20 text-gray md:max-w-6xl md:mx-auto md:items-center md:text-center md:mt-0">
          <h2 className="text-2xl font-sans text-center font-normal tracking-widest uppercase md:text-left md:text-3xl">Why</h2>
          <h1 className='text-5xl text-center font-sans font-black text-blueGreen uppercase  md:text-left md:mt-0'>explora</h1>
          <p className="font-sans text-center tracking-wider leading-8 my-5 max-w-3xl md:text-center">Explora levels up your travel experience by helping you plan, book, and organize your itinerary to make the most out of your adventures.</p>
        </div>
      </div>
    </section>

    <section id="cards" className="mb-10">
      <div className="container max-w-6xl mx-auto px-5 py-12 z-10">
        <CardSet cardContent={[
          {
            title: 'Fly Fast',
            description: 'Experience a hassle-free flight.',
            icon: 'FaPlane'
          },
          {
              title: 'Best Deals',
              description: `Allow us to find you the cheapest flights, so you don't have to do all the research.`,
              icon: 'FaTag'
          },
          {
            title: 'Satisfactory',
            description: 'We make sure to provide satisfactory services to make your adventures unforgettably amazing!',
            icon: 'FaThumbsUp'
          }
        ]} />
      </div>
    </section>

    <section id="popular-destinations" className="pb-32">
      <div className="container max-w-6xl mx-auto px-5 py-12 z-10">
        <div className="flex flex-col text-gray">
          <h2 className="text-xl font-sans text-center font-normal tracking-widest uppercase md:text-3xl">our popular</h2>
          <h1 className='text-3xl text-center font-sans font-black text-blueGreen uppercase md:mt-0 md:text-5xl'>Destinations</h1>
        </div>

        <div className="flex-col mt-10 flex justify-between space-y-10 md:flex-row md:space-x-10 md:space-y-0">
          <DestinationSet displayImage={boholPic} title='bohol' description='The island of Bohol is a gem that’s waiting to be discovered. With its rich culture and natural beauty, Bohol is a destination you’ll never regret visiting.' />
          <DestinationSet displayImage={palawanPic} title='palawan' description="Palawan is a haven for people who want to escape the fast-paced life and find themselves in nature." />
          <DestinationSet displayImage={boracayPic} title='boracay' description="Boracay is more than just a beach. It is a place where you'll never want to leave. Where the sun is always shining and the sand is always white." />
        </div>
      </div>
    </section>

    {!loading && (
      <TestimonialOverall commentData={comments}  bgImg={testimonialPic} />
    )}

    <section id="faq" className="md:pb-10">
      <div className="container flex-col flex max-w-6xl mx-auto px-5 justify-center items-center py-12 z-10">
        <div className="flex flex-col space-y-4">
          <h1 className="font-sans font-bold tracking-wide text-center text-[#076976] text-3xl">Here are some of the <span className="text-blueGreen">FAQs</span></h1>
          <p className="font-sans text-gray tracking-wider text-md leading-7 text-center max-w-xl mx-auto md:text-lg">If you have any other questions you'd like answered, please feel free to email us.</p>
        </div>

        <AccordionFaq />
      </div>
    </section>

    <Footer footerBg={footerPic} gradientColor='sand' />
    </>
  )
}

export default Explora