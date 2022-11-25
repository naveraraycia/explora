import AboutHeader from "../components/shared/AboutHeader"
import aboutHeaderPic from '../assets/desktop/aboutHeader.jpg'
import footerPic from '../assets/desktop/footerPic.jpg'
import Footer from "../components/shared/Footer"

function AboutUs() {
  return (
    <div className="flex-col justify-between space-y-20">
    
    <AboutHeader headerBg={aboutHeaderPic} smallTitle='know' bigTitle='about us' />

    <section id="when-details">
    <div className="container flex-col flex max-w-6xl mx-auto px-10 py-12 z-10 md:flex-row">
 
      <div className=" flex flex-col items-center mt-20 text-gray md:max-w-6xl md:mx-auto md:items-center md:text-center md:mt-0">
          <h2 className="text-2xl font-sans text-center font-normal tracking-widest uppercase md:text-left md:text-3xl">When</h2>
          <h1 className='text-5xl text-center mt-3 font-sans font-black text-blueGreen uppercase  md:text-left md:mt-0'>we started</h1>
          <p className="font-sans text-center tracking-wider leading-8 my-5 max-w-3xl md:text-center">Explora was established in November 4th of 2022 by a group of people who are fond of doing business and travelling. Being travel enthusiasts who are experts in planning their own trips, the group behind Explora decided to share their ways by turning it into a service so that people could also have the same satisfactory adventures and make the most out of every trip. In the near future, Explora is expected not to just provide 3 tours but more to be able to extensively highlight the beauty of the Philippine Islands and show tourists how much worth it and fun it is to travel the Philippines.</p>

        </div>

    </div>
    </section>

    <section id="why-details">
    <div className="container flex-col flex max-w-6xl mx-auto px-10 py-12 z-10 md:flex-row">
      <div className=" flex flex-col items-center mt-20 text-gray md:max-w-6xl md:mx-auto md:items-center md:text-center md:mt-0">
          <h2 className="text-2xl font-sans text-center font-normal tracking-widest uppercase md:text-left md:text-3xl">Why</h2>
          <h1 className='text-5xl text-center mt-3 font-sans font-black text-blueGreen uppercase  md:text-left md:mt-0'>we started</h1>
          <p className="font-sans text-center tracking-wider leading-8 my-5 max-w-3xl md:text-center">We are a group of passionate people that want to create a memory of a life you can only get by travelling. The experience and the memories are what made this possible. </p>

        </div>

    </div>
    </section>

    <Footer footerBg={footerPic} gradientColor='sand' />
    </div>

    
  )
}

export default AboutUs