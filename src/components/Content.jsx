import React from 'react'
import { Articles, MainArticle, NewArticles } from '../components'

const Content = () => {
  return (
    <div className='py-0 sm:py-[1.5rem]'>
      <div className='flex flex-col sm:flex-row gap-[2rem] md:gap-[4rem] md:gap-[2rem]'>
        <MainArticle />
        <NewArticles />
      </div>
      <div>
        <Articles />
      </div>
    </div>
  )
}

export default Content