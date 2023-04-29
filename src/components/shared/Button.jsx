import PropTypes from 'prop-types'

function Button({ children, color, type, btnBlock, isDisabled }) {
  return (
    <button className={`py-6 px-5 w-full md:px-12 rounded-lg text-white font-semibold font-sans tracking-widest transition hover:md:-translate-y-1 duration-150 hover:shadow-lg ${btnBlock ? 'md:w-full' : 'md:w-auto'} ${color === 'brown' ? 'bg-brown hover:bg-darkBrown' : color === 'blue' ? 'bg-blue hover:bg-darkBlue' : 'bg-blueGreen hover:bg-darkBlueGreen'}`} type={type} disabled={isDisabled}>{children}</button>
  )
}

Button.defaultProps = {
  color: 'teal',
  type: 'button',
  btnBlock: false,
  isDisabled: false

}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  type: PropTypes.string,
  btnBlock: PropTypes.bool,
  isDisabled: PropTypes.bool

}

export default Button