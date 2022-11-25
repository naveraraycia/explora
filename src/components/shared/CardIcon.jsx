import PropTypes from 'prop-types'

function CardIcon({children, bgColor, inherit}) {
  return (
    <div className={`${bgColor === 'sand' ? 'bg-[#EDE4D7]':
    bgColor === 'brown' ? 'bg-[#42332F]' 
    : bgColor === 'blue green' ? 'bg-blueGreen' : bgColor === 'dark blue green' ? 'bg-[#122C40]': bgColor === 'dark blue' ? 'bg-[#31606B]' : ''} p-5 space-y-2 flex-1 flex-col justify-center items-center text-center rounded-lg`} style={{
      height: `${inherit ? 'inherit' : 'auto'}`
    }}>{children}</div>
  )
}

CardIcon.defaultProps = {
  bgColor: 'sand',
  inherit: false
}

CardIcon.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string.isRequired,
  inherit: PropTypes.bool
}

export default CardIcon