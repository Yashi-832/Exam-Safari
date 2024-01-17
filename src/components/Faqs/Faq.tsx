import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
<<<<<<< HEAD
import './index.css'
=======
>>>>>>> 909f7c8 (first day task)

function Faq() {
  return (
    <>
<<<<<<< HEAD
      <div id="#contact-section" className='services-container'>
        <div className='service-heading mt-36' style={{textAlign:"center"}}> Frequently Asked Questions</div>
        <div className='service-para mb-36' style={{textAlign:"center"}}> we are here to help you </div>
        <div className="faq-section">
        <div className='faq-part'>
               <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg md:text-3xl">Is it accessible?</AccordionTrigger>
                    <AccordionContent className="text-base text-2xl">
=======
      <div id="#contact-section">
        <div className='text- md:text-3xl font-bold text-[#374151] mt-[50px] ml-20 md:ml-44 pt-6 md:pt-20 '> Frequently Asked Questions</div>
        <div className='text-sm md:text-xl text-[#6B7280]  px-6 text-center md:text-left md:px-0 md:ml-[170px] md:mt-2'> we are here to help you </div>
        <div className="md:flex mx-6 gap-48 md:mx-[200px]  ">
          <div className="md:w-[700px]">
               <Accordion type="single" collapsible className="w-full ">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
>>>>>>> 909f7c8 (first day task)
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className=" mt-2 md:mt-4 ">
<<<<<<< HEAD
                    <AccordionTrigger className="text-lg md:text-3xl">Is it styled?</AccordionTrigger>
                    <AccordionContent className="text-base text-2xl">
=======
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
>>>>>>> 909f7c8 (first day task)
                      Yes. It comes with default styles that matches the other
                      components&apos; aesthetic.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className=" mt-2 md:mt-4 ">
<<<<<<< HEAD
                    <AccordionTrigger className="text-lg md:text-3xl">Is it animated?</AccordionTrigger>
                    <AccordionContent className="text-base text-2xl">
=======
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
>>>>>>> 909f7c8 (first day task)
                      Yes. It's animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

          </div>
<<<<<<< HEAD
          <div className='faq-part'>
               <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg md:text-3xl">Is it accessible?</AccordionTrigger>
                    <AccordionContent className="text-base text-2xl">
=======
          <div className="md:w-[700px]">
               <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
>>>>>>> 909f7c8 (first day task)
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className=" mt-2 md:mt-4 ">
<<<<<<< HEAD
                    <AccordionTrigger className="text-lg md:text-3xl">Is it styled?</AccordionTrigger>
                    <AccordionContent className="text-base text-2xl">
=======
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
>>>>>>> 909f7c8 (first day task)
                      Yes. It comes with default styles that matches the other
                      components&apos; aesthetic.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className=" mt-2 md:mt-4 ">
<<<<<<< HEAD
                    <AccordionTrigger className="text-lg md:text-3xl">Is it animated?</AccordionTrigger>
                    <AccordionContent className="text-base text-2xl">
=======
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
>>>>>>> 909f7c8 (first day task)
                      Yes. It's animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

          </div>

        </div>
        



      </div>

  
    </>
  )
}

export default Faq