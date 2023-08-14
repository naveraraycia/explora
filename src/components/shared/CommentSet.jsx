import PropTypes from 'prop-types'
import CardIcon from './CardIcon'

function CommentSet({ data }) {
let actualDate = new Date(data.timestamp.seconds * 1000 + data.timestamp.nanoseconds/1000000)
let month, day, year, fullDate;
month = actualDate.getMonth() + 1
day = actualDate.getDate()
year = actualDate.getFullYear()
fullDate = `${month}-${day}-${year}`

  return (
    <div className="container h-full mx-auto px-5 md:pl-10 py-20 max-w-lg">

      <CardIcon inherit={true} bgColor={data.location === 'Bohol' ? 'brown' : data.location === 'Palawan' ? 'dark teal' : data.location === 'Boracay' ? 'dark blue' : 'sand'}>
        <div className="flex flex-col space-y-5 font-sans justify-between" style={{
            height: 'inherit'
            }}>

          <p className=' text-sand text-sm text-left'>{data.text}</p>

          <div className="flex space-x-5 commentBlock">
            <img src={data.userImg} alt="user 1" className='rounded-full w-[50px]' />
            <div className="flex flex-col space-y-1 text-sand font-sans">
              <p className={`text-sm font-semibold text-left capitalize ${data.location === 'Bohol' ? 'text-mustard' : data.location === 'Palawan' ? 'text-ice' : data.location === 'Boracay' ? 'text-orange' : 'text-white'}`}>{data.username}</p>
              <p className="text-xs text-left capitalize">{fullDate}</p>
            </div>
          </div>    
        </div>
      </CardIcon>
     </div>
  )
}

CommentSet.defaultProps = {
  data: {}
}

CommentSet.propTypes = {
  data: PropTypes.object
}

export default CommentSet