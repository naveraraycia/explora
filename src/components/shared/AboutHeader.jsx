import Navbar from "./Navbar"
import PropTypes from 'prop-types'

function AboutHeader({headerBg, smallTitle, bigTitle}) {
  return (
    <section id='hero' className='relative h-[350px] md:h-[500px]' style={{
      backgroundImage: `url(${headerBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>

      <div className="dark-overlay">

      <div className="container flex-col flex max-w-6xl mx-auto px-10 py-12 z-10">

        <Navbar />
      
        <div className="max-w-6xl flex flex-col items-center mt-20 text-white md:mt-32 md:items-start">
          <h2 className="text-xl font-sans text-center font-normal tracking-widest uppercase md:text-left md:text-3xl">{smallTitle}</h2>
          <h1 className='text-4xl text-center font-sans font-black uppercase md:text-7xl md:text-left md:mt-0'>{bigTitle}</h1>
          
        </div>

      
      
      </div>
      </div>

    </section>
  )
}

AboutHeader.defaultProps = {
  headerBg: '',
  smallTitle: 'small title',
  bigTitle: 'big title'
}

AboutHeader.propTypes = {
  headerBg: PropTypes.string,
  smallTitle: PropTypes.string,
  bigTitle: PropTypes.string
}

export default AboutHeader