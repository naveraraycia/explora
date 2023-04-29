import { Link } from 'react-router-dom'
import notFound from '../assets/icons/notFound.svg'

function NotFound() {

  return (
    <div className="flex flex-col space-y-7 items-center justify-center p-10 h-screen md:p-20 md:space-y-10">
      <img src={notFound} className="w-[200px] md:w-[400px]" alt="Page not found" />
      <div className="flex flex-col space-y-5 items-center justify-center">
        <p className="text-gray font-bold font-sans text-2xl text-center md:text-3xl">Oops! The page you entered does not seem to exist.</p>
        <p className="font-sans text-blueGreen text-md md:text-xl">Go back to <Link to='/' className='hover:underline hover:bold'>Home page</Link> </p>
      </div>
    </div>
  )
}

export default NotFound