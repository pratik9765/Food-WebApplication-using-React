import React from 'react';
import Card1 from '../Images/Card1.jpg'
import Card2 from '../Images/Card2.jpg'
import Card3 from '../Images/Card3.jpg'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* card-1 */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/40 text-white rounded-xl'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='bg-white text-black border-white mx-2 absolute bottom-4  hover:bg-orange-500 hover:text-white hover:border-black duration-150'>Order Now</button>
            </div>
            <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src={Card1} alt=""  />
        </div>

         {/* card-2 */}
         <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/40 text-white rounded-xl'>
                <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                <p className='px-2'>Added Daily</p>
                <button className='bg-white text-black border-white mx-2 absolute bottom-4 hover:bg-orange-500 hover:text-white hover:border-black duration-150'>Order Now</button>
            </div>
            <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src={Card2} alt=""  />
        </div>

         {/* card-3 */}
         <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/40 text-white rounded-xl'>
                <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts</p>
                <p className='px-2'>Tasty Treats</p>
                <button className='bg-white text-black border-white mx-2 absolute bottom-4  hover:bg-orange-500 hover:text-white hover:border-black duration-150'>Order Now</button>
            </div>
            <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src={Card3} alt=""  />
        </div>
    </div>
  )
}

export default HeadlineCards