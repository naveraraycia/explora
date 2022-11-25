import PropTypes from 'prop-types'

function Feature({ smallTitle, bigTitle, subTitle, featureImg }) {
  return (
    <div className='flex flex-col justify-between md:flex-row  my-20 md:gap-10'>
       <div className="max-w-6xl w-full flex flex-col items-start text-white">
          <h2 className="text-2xl font-sans font-normal tracking-widest uppercase text-left md:text-2xl">{smallTitle}</h2>
          <h1 className='text-5xl mt-3 font-sans font-black text-white uppercase md:text-5xl'>{bigTitle}</h1>

          <p className="font-serif tracking-wider text-4xl leading-[126%] text-white my-5 max-w-2xl mt-8">{subTitle}</p>
          
          <div className="flex flex-col text-white mt-5 space-y-4">
            <p className="font-sans text-wide text-2xl max-w-md">Explora will help finalize your itinerary fit to your preferences.</p>
            <p className="font-sans font-light leading-7 text-lg max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum placeat et error officia soluta eum.</p>
          </div>
        </div>

        <div className="h-[400px] mt-10 w-full bg-cover bg-no-repeat rounded-lg md:w-[400px] md:h-full md:mt-0" style={{
        backgroundImage: `url(${featureImg})`
      }}></div>
        
    
    </div>
  )
}

Feature.defaultProps = {
  smallTitle: 'title',
  bigTitle: 'title',
  subTitle: 'LLorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, ullam.',
  featureImg: ''
}

Feature.propTypes = {
  smallTitle: PropTypes.string.isRequired,
  bigTitle: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  featureImg: PropTypes.string
}

export default Feature