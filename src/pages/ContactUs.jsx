import { FaEnvelope, FaMapMarkerAlt, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import ContactForm from "../components/ContactForm"
import AboutHeader from "../components/shared/AboutHeader"
import Footer from "../components/shared/Footer"
import CardIcon from "../components/shared/CardIcon"
import contactPic from "../assets/desktop/contactPic.jpg"
import footerPic from '../assets/desktop/footerPic.jpg'

function ContactUs() {

  return (
    <div className="flex flex-col justify-between space-y-20">
      <AboutHeader headerBg={contactPic} smallTitle='get in touch' bigTitle='contact us' />

      <div className="flex flex-col container max-w-6xl mx-auto space-x-0 space-y-5 items-center md:flex-row md:space-x-10 md:space-y-0 px-5">
        <div className="w-full">
          <ContactForm />
        </div>

        <div className="w-full md:w-4/12">
          <CardIcon bgColor="teal">
            <div className="flex flex-col text-white font-sans space-y-5">
              <p className="text-3xl md:text-center">Contact Info</p>

              <div className="flex flex-col space-y-10">
                <div className="flex flex-col space-y-3 font-sans text-white">
                  <div className="flex items-center space-x-3 ">
                    <FaEnvelope className="text-4xl flex-none text-[#73D1DF]" />
                    <p className="tracking-wide leading-5 text-left">travel@explora.com</p>
                  </div>

                  <div className="flex items-center space-x-3 ">
                    <FaMapMarkerAlt className="text-4xl flex-none text-[#73D1DF]" />
                    <p className="tracking-wide leading-5 text-left">Ground Floor, Festival Mall, Alabang, Muntinlupa City</p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <a href="https://www.facebook.com" target={'_blank'} rel='noreferrer'>
                    <FaFacebookSquare className="text-4xl text-[#73D1DF] hover:text-white hover:cursor-pointer" />
                  </a>

                  <a href="https://www.instagram.com/" target={'_blank'} rel='noreferrer'>
                    <FaInstagramSquare className="text-4xl text-[#73D1DF] hover:text-white hover:cursor-pointer" />
                  </a>

                  <a href="https://twitter.com/?lang=en" target={'_blank'} rel='noreferrer'>
                    <FaTwitterSquare className="text-4xl text-[#73D1DF] hover:text-white hover:cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          </CardIcon>
        </div>
      </div>

      <Footer footerBg={footerPic} gradientColor='sand' />
    </div>
  )
}

export default ContactUs