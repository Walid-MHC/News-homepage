import React from "react";
import { articles } from "../constants";
import { topLaptopsImage, retroPcsImage,gamingGrowthImage } from "../assets";

const Articles = () => {
  return (
    <div className="flex md:flex-row flex-wrap gap-[2.1rem] md:my-[4rem] my-[3rem]">
      {articles.map((article) => (
        <div key={article.id} className="flex-1 flex items-center justify-start gap-[1.5rem] min-w-[20rem]">
          <img src={article.image} alt={article.title} className="w-[100px]" />
          <div>
            <span className="block text-[2rem] text-soft-red font-bold mb-1 leading-none">{article.id}</span>
            <h4 className="text-[18px] very-dark-blue font-bold mb-3 hover:text-soft-red cursor-pointer">{article.title}</h4>
            <p className="text-[15px] text-dark-grayish-blue leading-[160%]">{article.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
