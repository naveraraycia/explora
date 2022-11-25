import React from 'react'

function IndexTestimonial({comment, user}) {
  return (
    <div className='flex flex-col items-center text-center px-10 space-y-4 justify-center mx-auto'>
      
     <p className="font-sans text-darkBlueGreen tracking-wider text-md leading-7 max-w-lg mx-auto md:max-w-4xl md:leading-8 md:text-lg">{comment}</p>

    <p className='font-sans text-darkBlueGreen text- italic'>~ <span className='font-bold'>{user}</span></p>
    </div>
  )
}

export default IndexTestimonial