import PropTypes from 'prop-types'
import Button from './Button'
import Navbar from './Navbar'

function Header({headerBg, smallTitle, bigTitle, description, btnColor, btnRedirect}) {
  return (
    <section id='hero' className='relative h-[650px]' style={{
      backgroundImage: `url(${headerBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>

      <div className="dark-overlay">

      <div className="container flex-col flex max-w-6xl mx-auto px-10 py-12 z-10">

        <Navbar />
   
        <div className="max-w-6xl flex flex-col items-center mt-20 text-white md:mt-32 md:items-start">
          <h2 className="text-2xl font-sans text-center font-normal tracking-widest uppercase md:text-left md:text-3xl">{smallTitle}</h2>
          <h1 className='text-5xl text-center mt-3 font-sans font-black uppercase md:text-7xl md:text-left md:mt-0'>{bigTitle}</h1>
          <p className="font-sans text-center tracking-wider leading-8 my-5 max-w-lg md:text-left">{description}</p>

          <div className="max-w-6xl">
            <a href={`#${btnRedirect}`}>
              <Button color={btnColor}>EXPLORE NOW</Button>
            </a>
          </div>
          
        </div>
        </div>
      
      </div>


    </section>
  )
}

Header.defaultProps = {
  headerBg: '',
  smallTitle: 'discover',
  bigTitle: 'the philippines',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eos ipsam dolorem esse temporibus vel.',
  btnColor: 'blue',
  btnRedirect: ''
}

Header.prototypes = {
  headerBg: PropTypes.string.isRequired,
  smallTitle: PropTypes.string.isRequired,
  bigTitle: PropTypes.string.isRequired,
  description: PropTypes.string,
  btnColor: PropTypes.string,
  btnRedirect: PropTypes.string
}

export default Header