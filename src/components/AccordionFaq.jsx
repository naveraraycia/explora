import AccordionTab from "./AccordionTab"

function AccordionFaq() {
  return (
    <div className="container mx-auto px-2 mb-32">
      <div className="max-w-2xl mx-auto m-8 overflow-hidden">
        <AccordionTab tabIndex={1} question='Can I extend my travel?' answer='Unfortunately, you cannot extend your travel since everything will be processed in fixed dates and prices.' />

        <AccordionTab tabIndex={2} question='Do you have a physical office?' answer='Our physical office is located at Ground Floor, Festival Mall, Alabang, Muntinlupa City. However, we are operating on a work-from-home setup at the moment. In case of any inquiries, you could reach us anytime through our email travel@explora.com.' />

        <AccordionTab tabIndex={3} question='Do you have any other way for your clients to book rather than online?' answer='Unfortunately, there is no other way to book but online. However, if you have any concerns with the online platform, you could reach out to us through our email travel@explora.com.' />
      </div>
    </div>
  )
}

export default AccordionFaq