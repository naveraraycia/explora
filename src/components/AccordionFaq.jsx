import AccordionTab from "./AccordionTab"

function AccordionFaq() {
  return (
    <div className="container mx-auto px-6 mb-32">
    <div className="max-w-2xl mx-auto m-8 overflow-hidden">
      <AccordionTab tabIndex={1} question='How do we know if there are deals?' answer='Explora updates the purchasing sections every time there are deals.' />

      <AccordionTab tabIndex={2} question='Is it possible to extend my trip?' answer='For now, it is not possible to extend your trips once the booking has been finalized and paid.' />

      <AccordionTab tabIndex={3} question='Can I pay through credit card?' answer='Paying through credit card is possible.' />
    </div>
    </div>
  )
}

export default AccordionFaq