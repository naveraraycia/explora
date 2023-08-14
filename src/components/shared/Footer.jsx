import PropTypes from 'prop-types'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

function Footer({ footerBg, gradientColor }) {
  const footerYear = new Date().getFullYear()

  return (
    <footer className='relative h-[350px] bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${footerBg})`}}> 
     <div className={`${gradientColor === 'brown' ? 'brown-gradient-overlay' : gradientColor === 'blue' ? 'blue-gradient-overlay' : gradientColor === 'dark blue' ? 'darkBlue-gradient-overlay' : 'gradient-overlay'} flex items-center justify-center px-10`}>

      <div className='max-w-6xl mx-auto w-full flex flex-col space-y-4 items-center justify-end lg:justify-between lg:items-end lg:flex-row'>
        <div className="flex space-x-4">
          <a href='https://www.facebook.com/' target={'_blank'} rel='noreferrer'>
          <FaFacebookSquare className='text-4xl md:text-5xl text-white hover:text-blueGreen' />
          </a>

          <a href='https://www.instagram.com/' target={'_blank'} rel='noreferrer'>
          <FaInstagramSquare className='text-4xl md:text-5xl text-white hover:text-blueGreen' />
          </a>

          <a href='https://twitter.com/?lang=en' target={'_blank'} rel='noreferrer'>
          <FaTwitterSquare className='text-4xl md:text-5xl text-white hover:text-blueGreen' />
          </a>
        </div>

        <a href='/#home'>
          <p className="font-sans font-black text-white text-5xl text-center uppercase hover:cursor-pointer md:text-7xl">Explora</p>
        </a>

        <p className="font-sans text-center font-semibold text-lg tracking-wide text-white md:text-2xl md:font-bold">&copy; {footerYear} <span className='text-xs'> RMFN</span></p>
      </div>
     </div>
    </footer>
  )
}

Footer.defaultProps = {
  footerBg: '',
  gradientColor: 'sand'
}

Footer.propTypes = {
  footerBg: PropTypes.string.isRequired,
  gradientColor: PropTypes.string.isRequired
}

export default Footer