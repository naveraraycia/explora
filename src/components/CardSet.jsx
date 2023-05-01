import PropTypes from 'prop-types'
import CardIcon from './shared/CardIcon'
import { FaPlane, FaThumbsUp, FaTag } from 'react-icons/fa'

function CardSet({ cardContent }) {
  return (
    <div className="flex-col flex justify-between space-y-10 md:flex-row md:space-x-10 md:space-y-0">
      {cardContent.map((cardItem, index)=>(
        <CardIcon key={index}>
          {cardItem.icon === 'FaPlane' ? (
            <FaPlane className="text-7xl mx-auto text-blueGreen" />
          ) : cardItem.icon === 'FaThumbsUp' ? ( <FaThumbsUp className="text-7xl mx-auto text-blueGreen" />) : cardItem.icon === 'FaTag' ? (<FaTag className="text-7xl mx-auto text-blueGreen" />) : ''}
          <p className="text-lg font-sans font-bold text-gray">{cardItem.title}</p>
          <p className="text-md font-sans text-gray">{cardItem.description}</p>
        </CardIcon>
      ))}   
    </div>
  )
}

CardSet.defaultProps = {
  cardContent: {}
}

CardSet.propTypes = {
  cardContent: PropTypes.array.isRequired
}

export default CardSet