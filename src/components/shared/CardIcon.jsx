import PropTypes from 'prop-types'

function CardIcon({ children, bgColor, inherit }) {
  return (
    <div className={`${bgColor === 'brown' ? 'bg-brown-2' : bgColor === 'teal' ? 'bg-blueGreen' : bgColor === 'dark blue' ? 'bg-blue-2': bgColor === 'dark teal' ? 'bg-blueGreen-2' : 'bg-darkSand'} p-5 space-y-2 flex-1 flex-col justify-center items-center text-center rounded-lg`} style={{ height: `${inherit ? 'inherit' : 'auto'}` }}>{children}</div>
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