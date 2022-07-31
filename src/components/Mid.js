
import React from 'react';
import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";
import Loader from './Loader';



function Mid(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [load , setLoad] = useState(false)


  const Make_Capital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const bringNews = async () => {
    setLoad(true)
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=d44cd17446874c83bbd7b84011798f1b&page=${page}&pageSize=40`);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setLoad(false)
  };
  useEffect(() => {
    bringNews();
  }, []);
  
  return (
  <div className={`${props.mode ==='dark'?'bg-black':'bg-slate-50'}`}>
    <div className={`text-center wq:pt-24 pt-28 pb-10 sm:text-4xl we:text-3xl text-2xl font-medium ${props.mode==='dark'?'text-white':'text-black'}`}>NewsNation - Top {Make_Capital(props.category)} Headlines</div>
   { load&& <div className={`flex flex-row justify-center`}>
    <Loader/>
    </div>   }
    <div className='lg:ml-24 lg:mr-24 md:ml-12 md:mr-12 sm:ml-28 sm:mr-28'>
    <div className={`grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full items-baseline ${props.mode ==='dark'?'bg-black':'bg-slate-50'}`}>
      {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Card
                    title={element.title ? element.title.slice(0, 80) : ""}
                    description={element.description ? element.description.slice(0, 150) : ""}
                    img={element?.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    mode={props.mode}
                  />
                </div>
              );
            })}
  </div>
  </div>
  </div>
);
}

export default Mid;
