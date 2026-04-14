import React from 'react'
import { HiPlus } from 'react-icons/hi'

const Banner = () => {

    const cards = [
        {number: 10, title: 'Total Friends'},
        {number: 3, title: 'On Track'},
        {number: 6, title: 'Need Attention'},
        {number: 12, title: 'Interactions This Month'},
    ]


  return (
    <div className='bg-[#f8fafc] py-20'>
        <div className="max-w-7xl mx-auto">
            <div className="text-center">
                <h2 className='text-6xl text-[#1F2937] font-bold'>Friends to keep close in your life</h2>
                <p className='py-5 text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.</p>
                <button className='btn bg-[#244D3F] text-white '><HiPlus /> Add a Friend</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-10">
                {cards.map((card,index)=> 
                <div key={index} className='bg-white p-10 rounded-sm shadow-sm text-center'>
                    <h3 className='text-3xl py-3 font-bold'>{card.number}</h3>
                    <p className='text-xl'>{card.title}</p>
                </div>)}
            </div>
        </div>
    </div>
  )
}

export default Banner