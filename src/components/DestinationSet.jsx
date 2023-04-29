import PropTypes from 'prop-types'
import Button from './shared/Button'

function DestinationSet({ displayImage, title, description }) {

  return (
    <div className="flex-col flex-1 flex space-y-5">
      <div className="h-[400px] bg-cover bg-no-repeat rounded-lg" style={{backgroundImage: `url(${displayImage})`}}></div>

      <div className="flex flex-col font-sans text-center space-y-1">
        <h1 className="text-2xl tracking-wider font-bold text-gray capitalize">{title}</h1>
        <p className="text-gray tracking-wider leading-5 text-sm">{description}</p>
      </div>

      <div className="max-w-xs mx-auto flex-1 flex items-end justify-center">
        <a href={`/${title}`}>
          <Button color='teal'>Learn More</Button>
        </a>
      </div>
    </div>
  )
}

DestinationSet.defaultProps = {
  displayImage: '',
  title: 'Title',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, sit! Lorem ipsum dolor sit amet.'
}

DestinationSet.propTypes = {
  displayImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default DestinationSet