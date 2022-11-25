import PropTypes from 'prop-types'

function AccordionTab({tabIndex, question, answer}) {
  return (
<>

        {/* <!-- Tab 1 --> */}
        <div className="py-1 border-b border-lightGray outline-none group" tabIndex={tabIndex}>
          {/* <!-- Tab Flex Container --> */}
          <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
            {/* <!-- Tab Title --> */}
            <div className="transition text-[#5D7A7D] font-semibold font-sans tracking-wide duration-500 ease group-hover:text-blueGreen">
              {question}
            </div>
            {/* <!-- Arrow --> */}
            <div className="transition duration-500 text-blueGreen ease group-focus:-rotate-180 group-focus:text-blueGreen">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  d="M1 1l8 8 8-8"
                />
              </svg>
            </div>
          </div>
          {/* <!-- Tab Inner Content --> */}
          <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
            <p className="font-sans tracking-wider text-gray text-md py-2 leading-6 md:text-sm text-justify">{answer}</p>
          </div>
        </div>
        </>
  )
}

AccordionTab.defaultProps = {
  tabIndex: '1',
  question: '',
  answer: ''
}

AccordionTab.propTypes = {
  tabIndex: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
}

export default AccordionTab