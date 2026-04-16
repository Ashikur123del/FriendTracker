import React from 'react'
import { HiPlus } from 'react-icons/hi'

const Banner = () => {
   
    const cards = [
        { number: 10, title: 'Total Friends' },
        { number: 3, title: 'On Track' },
        { number: 6, title: 'Need Attention' },
        { number: 12, title: 'Interactions This Month' },
    ]

    return (
        <div className='bg-[#f8fafc] py-10 md:py-15 px-4'>
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className='text-3xl sm:text-4xl md:text-6xl text-[#1F2937] font-extrabold tracking-tight leading-tight'>
                        Friends to keep close in your life
                    </h2>
                    <p className='py-6 text-sm md:text-lg text-[#64748B] max-w-2xl mx-auto'>
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the 
                        relationships that matter most.
                    </p>
                    <button className='btn bg-[#244D3F] hover:bg-[#1a3a2f] text-white border-none px-8 rounded-lg shadow-lg transition-all hover:scale-105'>
                        <HiPlus className="text-xl" /> Add a Friend
                    </button>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-12 md:pt-16">
                    {cards.map((card, index) => (
                        <div 
                            key={index} 
                            className='bg-white p-6 md:p-8 rounded-2xl md:rounded-[2rem] shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow group'
                        >
                            <h3 className='text-3xl md:text-4xl py-2 font-black text-[#244D3F] group-hover:scale-110 transition-transform'>
                                {card.number}
                            </h3>
                            <p className='text-xs md:text-sm font-bold text-[#64748B]'>
                                {card.title}
                            </p>
                        </div>
                    ))}
                </div>
                <div className='border-b border-gray-300 h-[1px] md:mt-10'></div>
            </div>
        </div>
    )
}

export default Banner