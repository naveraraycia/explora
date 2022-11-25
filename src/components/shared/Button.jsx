import PropTypes from 'prop-types'

function Button({ children, color, type, btnBlock}) {

  return (
    <>

      <button className={`py-6 px-12 w-full 
      ${color === 'brown' ? 'bg-[#7D5B51] hover:bg-[#56382F]': color === 'blue' ? 'bg-blueGreen hover:bg-darkBlueGreen' : color === 'dark blue' ? 'bg-[#1A4869] hover:bg-[#1A384F]' : 'bg-blueGreen hover:bg-darkBlueGreen'} 
      
      rounded-lg text-white font-semibold font-sans tracking-widest transition hover:md:-translate-y-1 duration-150 hover:shadow-lg 
      ${btnBlock ? 'md:w-full' : 'md:w-auto'}`} type={type}>{children}</button>
  
   
    </>
  )
}


Button.defaultProps = {
  color: 'blue',
  type: 'button',
  btnBlock: false,

}


Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  type: PropTypes.string,
  btnBlock: PropTypes.bool,

}

export default Button