import { GiTakeMyMoney } from "react-icons/gi";
import { TbZoomMoney } from "react-icons/tb";
import { Ri24HoursLine } from "react-icons/ri";
import { MdOutlineVerifiedUser } from "react-icons/md";
<<<<<<< HEAD

=======
import './index.css'
>>>>>>> 909f7c8 (first day task)

function AcoFeature() {
  return (
    <>
<<<<<<< HEAD
      <div>
          <div className='text- md:text-3xl font-bold text-[#374151] mt-[50px] ml-20 md:ml-44 pt-6 md:pt-20 '>Book your Perfect Accommodation</div>
          <div className='text-sm md:text-xl text-[#6B7280]  px-6 text-center md:text-left md:px-0  md:ml-[170px] md:mt-2'>Take the hassle out of securing your student home for the best years of your life </div>
          <div className="scroll-smooth  text-[10px] md:flex gap-8 justify-between  px-2 md:px-4 pt-6 md:pt-14 md:mx-32">
            <div className=" ">
                <GiTakeMyMoney style={{color: "#00aff5",}} className='h-20 w-20 ml-32 ' />
                <h2 className="text-[#374151] font-bold text-xl ml-16 md:ml-24">Quick & easy bookings</h2> 
                <h6 className="text-[#6B7280] text-[15px] md:text-sm md:mt-2  ml-6 md:ml-10">Time is money. Save both when you book with us.</h6>           
            </div>

            <div className=" mt-10 md:mt-0">
                <TbZoomMoney style={{color: "#00aff5",}} className='h-20 w-20 ml-32 ' />
                <h2 className="text-[#374151] font-bold text-xl ml-20 md:ml-24">Price Match Guarantee</h2> 
                <h6 className="text-[#6B7280] text-[15px] md:text-sm md:mt-2 ml-2">Find a lower price and we'll match it. No questions asked. .</h6>           
            </div>

            <div className=" mt-10 md:mt-0">
                <Ri24HoursLine  style={{color: "#00aff5",}} className='h-20 w-20 ml-32 ' />
                <h2 className="text-[#374151] font-bold text-xl ml-24 md:ml-24">24x7 Assistance</h2> 
                <h6 className="text-[#6B7280] text-[15px] md:text-sm md:mt-2 ml-2">If you have a doubt or a query, we’re always a call away.</h6>           
            </div>

            <div className=" mt-10 md:mt-0">
=======
      <div className="services-container">
          <div className="service-heading">Book your Perfect Accommodation</div>
          <div className="service-para">Take the hassle out of securing your student home for the best years of your life </div>
          <div className="aco">
            <div className="stats-item">
                <div className='align-center'>
                  <GiTakeMyMoney style={{color: "#00aff5",}} className='image' />
                </div>
                <h2 className="heading">Quick & easy bookings</h2> 
                <h6 className="text-[#6B7280] para">Time is money. Save both when you book with us.</h6>           
            </div>

            <div className="stats-item">
                <div className='align-center'>
                  <TbZoomMoney style={{color: "#00aff5",}} className='image' />
                </div>
                <h2 className="text-[#374151] heading">Price Match Guarantee</h2> 
                <h6 className="text-[#6B7280] para">Find a lower price and we'll match it. No questions asked. .</h6>           
            </div>

            <div className="stats-item">
                <div className='align-center'>
                  <Ri24HoursLine  style={{color: "#00aff5",}} className='image' />
                </div>
                <h2 className="text-[#374151] heading">24x7 Assistance</h2> 
                <h6 className="text-[#6B7280] para">If you have a doubt or a query, we’re always a call away.</h6>           
            </div>

            <div className="stats-item">
>>>>>>> 909f7c8 (first day task)
                <MdOutlineVerifiedUser style={{color: "#00aff5",}} className='h-20 w-20 ml-32 ' />
                <h2 className="text-[#374151] font-bold text-xl ml-20 md:ml-24">100% Verified Listings</h2> 
                <h6 className="text-[#6B7280] text-[15px] md:text-sm md:mt-2 ml-2">We promise to deliver what you see on the website.</h6>           
            </div>                 

    </div>



      </div>

    </>
  )
}

export default AcoFeature