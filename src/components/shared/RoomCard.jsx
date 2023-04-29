import PropTypes from 'prop-types'

function RoomCard({ color, cardImg, title, caption }) {
  return (
    <div className="flex flex-col flex-1">
      <div className="w-full bg-cover bg-center h-[200px] rounded-t-lg" style={{backgroundImage: `url(${cardImg})`}}></div>

      <div className={`${color === 'teal' ? 'bg-blueGreen-2' : color === 'blue' ? 'bg-blue-2' : 'bg-brown-2'} space-y-3 rounded-b-lg p-6 flex flex-1 flex-col w-full`}>
        <h1 className={`${color === 'teal' ? 'text-ice' : color === 'blue' ? 'text-orange' : 'text-mustard'} font-black text-2xl capitalize font-sans`}>{title}</h1>
        <p className="font-sans text-white leading-7 text-md">{caption}</p>
      </div>
    </div>
  )
}

RoomCard.defaultProps = {
  color: 'teal',
  cardImg: '',
  title: 'Title',
  caption: 'Caption'
}

RoomCard.propTypes = {
  color: PropTypes.string.isRequired,
  cardImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
}



export default RoomCard