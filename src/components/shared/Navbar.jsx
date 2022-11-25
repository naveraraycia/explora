import {useNavigate, useLocation} from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  // Active class function
  function pathMatchRoute(route) {
    if(route === location.pathname){
      return true
    }
  }

  // Toggle menu function (hamburger menu)
  function toggleMenu() {
    const hamburgerIcon = document.getElementById('menu-btn')
    const mobileMenu = document.getElementById('menu')
    hamburgerIcon.classList.toggle('open')
    mobileMenu.classList.toggle('flex')
    mobileMenu.classList.toggle('hidden')
  }

  return (
    <>
    <nav className='flex items-center justify-between
   text-white'>

      <p className="font-sans font-black text-2xl tracking-wider uppercase hover:cursor-pointer" onClick={()=> navigate('/') }>Explora</p>
   
      <ul className="hidden h-10 font-sans text-md font-normal tracking-widest md:flex md:items-center md:space-x-8">
        <li className={`uppercase transition ${pathMatchRoute('/') ? '' : 'hover:md:scale-110'} duration-150 hover:cursor-pointer hover:font-bold`} onClick={ () => navigate('/')}>
            <p className={pathMatchRoute('/') ? 'scale-110 font-bold' : ''}>Home</p>
        </li>
        <li className={`uppercase transition ${pathMatchRoute('/profile') ? '' : 'hover:md:scale-110'} duration-150 hover:cursor-pointer hover:font-bold`} onClick={ () => navigate('/profile')}>
            <p className={pathMatchRoute('/profile') ? 'scale-110 font-bold' : ''}>Profile</p>
        </li>
        <li className={`uppercase transition ${pathMatchRoute('/about-us') ? '' : 'hover:md:scale-110'} duration-150 hover:cursor-pointer hover:font-bold`} onClick={ () => navigate('/about-us')}>
            <p className={pathMatchRoute('/about-us') ? 'scale-110 font-bold' : ''}>About Us</p>
        </li>
        <li className={`uppercase transition ${pathMatchRoute('/contact-us') ? '' : 'hover:md:scale-110'} duration-150 hover:cursor-pointer hover:font-bold`} onClick={ () => navigate('/contact-us')}>
            <p className={pathMatchRoute('/contact-us') ? 'scale-110 font-bold' : ''}>Contact Us</p>
        </li>
      </ul>

      {/* Hamburger icon */}
        <div className="md:hidden">
          <button id="menu-btn" onClick={toggleMenu} type="button" className="z-40 block hamburger md:hidden focus:outline-none">
            <span className='hamburger-top bg-white'></span>
            <span className='hamburger-middle bg-white'></span>
            <span className='hamburger-bottom bg-white'></span>
          </button>
        </div>
    </nav>

    {/* Mobile Menu */}
    <ul id="menu" className="absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white font-sans tracking-widest capitalize mobile-overlay">
        <li className={`uppercase transition ${pathMatchRoute('/') ? '' : 'hover:md:scale-110'} duration-150 hover:cursor-pointer hover:font-bold`} onClick={ () => navigate('/')}>
            <p className={pathMatchRoute('/') ? 'text-2xl font-bold' : ''}>Home</p>
        </li>

        <li className={`uppercase transition ${pathMatchRoute('/profile') ? '' : 'hover:md:scale-110'} duration-150 hover:cursor-pointer hover:font-bold`} onClick={ () => navigate('/profile')}>
            <p className={pathMatchRoute('/profile') ? 'text-2xl font-bold' : ''}>Profile</p>
        </li>

        <li className={`uppercase transition ${pathMatchRoute('/about-us') ? '' : 'hover:md:scale-110'} duration-150 hover:cursor-pointer hover:font-bold`} onClick={ () => navigate('/about-us')}>
            <p className={pathMatchRoute('/about-us') ? 'text-2xl font-bold' : ''}>About Us</p>
        </li>

        <li className={`uppercase transition ${pathMatchRoute('/contact-us') ? '' : 'hover:md:scale-110'} duration-150 hover:cursor-pointer hover:font-bold`} onClick={ () => navigate('/contact-us')}>
            <p className={pathMatchRoute('/contact-us') ? 'text-2xl font-bold' : ''}>Contact Us</p>
        </li>
    </ul>
    </>
  )
}


export default Navbar