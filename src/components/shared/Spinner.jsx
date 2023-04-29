import { HashLoader } from 'react-spinners'

function Spinner() {
  
  return (
    <div className="flex flex-col space-y-7 items-center justify-center p-10 h-screen md:p-20 md:space-y-4">
      <HashLoader
      color='#36d7b7'
      size={80}
      aria-label="Loading Spinner"
      data-testid="loader"/>
    </div>
  )
}

export default Spinner