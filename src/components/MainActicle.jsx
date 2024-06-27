import React from 'react'
import { web3Mobile, web3Desktop } from '../assets'
import { mainArticle } from '../constants'

const MainActicle = () => {
  return (
    <div>
      <img className='max-h-[300px] block sm:hidden w-full object-cover' src={web3Mobile} alt="web3" />
      <img className='max-h-[300px] sm:block hidden w-full object-cover' src={web3Desktop} alt="web3" />
      <div className='mt-[1.5rem]'>
        <h1 className='text-very-dark-blue text-[2.5rem] font-bold leading-none mb-[1rem]'>{mainArticle.title}</h1>
        <div>
          <p className='text-dark-grayish-blue text-[15px] leading-[170%] mb-[1.5rem]'>{mainArticle.description}</p>
          <button className='uppercase text-[15px] text-very-dark-blue font-semibold tracking-[5px] py-[14px] px-8 bg-soft-red hover:bg-very-dark-blue hover:text-white transition duration-200'>Read more</button>
        </div>
      </div>
    </div>
   
  )
}

export default MainActicle