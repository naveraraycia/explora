import PropTypes from 'prop-types'

function PurchaseHeader({ bgImg }) {
  return (
    <div className='relative w-full py-20 px-10  bg-cover bg-center text-white' style={{backgroundImage: `url(${bgImg})`}}>
      <div className="dark-overlay flex items-center px-10 justify-center">
        <div className="mx-auto flex flex-col text-center items-center space-y-3">
          <h2 className="text-xl font-sans font-bold tracking-widest md:text-3xl">Ready to Purchase?</h2>
          <h1 className='text-md mt-3 font-sans tracking-wide uppercase md:mt-0 md:text-2xl'>check out our travel packages below</h1>
        </div>
      </div>
    </div>
  )
}

PurchaseHeader.defaultProps = {
  bgImg: ''
}

PurchaseHeader.propTypes= {
  bgImg: PropTypes.string.isRequired
}

export default PurchaseHeader