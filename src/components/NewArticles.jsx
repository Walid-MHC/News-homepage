import { newArticles } from "../constants"


const NewArticles = () => {
  return (
    <div className="bg-very-dark-blue py-[36px] px-4">
      <h1 className="text-soft-orange text-[2.5rem] font-bold leading-none mb-7">New</h1>
      <div className="flex flex-col gap-[2rem]">
        {
          newArticles.map((newArticle)=>
            <div className="pb-[2rem] last:pb-0 border-b last:border-none">
              <a href=""><h3 className="text-white text-[1.25rem] font-bold mb-2 hover:text-soft-orange transition duration-200" >{newArticle.title}</h3>
              </a>
              
              <p className="text-grayish-blue text-[15px]">{newArticle.description}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default NewArticles