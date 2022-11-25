import PropTypes from 'prop-types'

function RoomCard({color, cardImg, title, caption}) {
  return (
    <div className="flex flex-col flex-1">
      <div className="w-full bg-cover bg-center h-[200px] rounded-t-lg" style={{
        backgroundImage: `url(${cardImg})`
      }}></div>

      <div className={`${color === 'brown' ? 'bg-[#42332F]' : color === 'blue' ? 'bg-[#31606B]' : color === 'dark blue' ? 'bg-[#122C40]' : ''} space-y-3 rounded-b-lg p-10 flex flex-1 flex-col w-full`}>
        <h1 className={`${color === 'brown' ? 'text-[#CEBC7B]' : color === 'blue' ? 'text-[#90D3DC]' : color === 'dark blue' ? 'text-[#D28463]' : ''} font-black text-2xl capitalize font-sans`}>{title}</h1>
        <p className="font-sans text-white leading-7 text-md">{caption}</p>
        
      </div>
    </div>
  )
}

RoomCard.defaultProps = {
  color: 'brown',
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