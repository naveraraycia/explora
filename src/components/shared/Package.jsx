import PropTypes from 'prop-types'

function Package({ number, title, description, subDescription, tourImg, order }) {
  return (
    <div className='flex flex-1 flex-col items-center justify-between md:flex-row my-16 md:gap-10'>
       <div className={` ${order === 'reverse' ? 'md:order-2 md:items-end' : 'md:order-1 items-start'} order-2 max-w-6xl w-full flex flex-col text-white mt-10 md:mt-0`}>
          <div className="flex flex-col text-left items-start">
            <div className="flex items-center justify-center space-x-5">
              <div className="text-4xl font-sans font-bold">{number}</div>
              <h2 className="text-2xl font-sans tracking-widest text-left md:text-xl">{title}</h2>
            </div>
            
            <div className="flex flex-col text-white mt-5 space-y-4">
              <p className="font-sans text-wide leading-8 text-xl max-w-xl">{description}</p>
              <p className="font-sans font-light leading-7 tracking-wide text-lg max-w-lg">{subDescription}</p>
            </div>
          </div>
       </div>

       <div className={`${order === 'reverse' ? 'md:order-1' : 'md:order-2'} order-1 h-[400px] w-full bg-cover bg-no-repeat rounded-lg md:w-[400px] md:h-[450px] md:mt-0`} style={{backgroundImage: `url(${tourImg})`}}></div> 
    </div>
  )
}

Package.defaultProps = {
  number: '01',
  title: 'title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia exercitationem cum quibusdam vel dolore numquam.',
  subDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia exercitationem cum quibusdam vel dolore numquam.',
  tourImg: '',
  order: ''
}

Package.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subDescription: PropTypes.string.isRequired,
  tourImg: PropTypes.string.isRequired,
  order: PropTypes.string

}

export default Package