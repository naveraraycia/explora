import { useState } from "react"
import CardIcon from "./shared/CardIcon"
import Button from "./shared/Button"

function ContactForm() {
  const [message, setMessage] = useState('')

  function onChange(e) {
    setMessage(e.target.value)
  }

  return (
    <>

    <CardIcon>
      <div className="space-y-5">

      <textarea id="message" cols="30" rows="10" className="bg-white w-full p-5 rounded-lg text-gray font-sans placeholder:font-sans placeholder:text-lightGray focus:outline-none" placeholder="Send us a message" typeof="text" onChange={onChange} value={message}  />
      
      <div className="w-full">
      <a href={`mailto:travel@explora.com?Subject=I would like to inquire about Explora's services&body=${message}`}>
      <Button btnBlock={true} color='blue'>SUBMIT</Button>
      </a>
      </div>

      </div>
 
    </CardIcon>
    </>

  )
}

export default ContactForm