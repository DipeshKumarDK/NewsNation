import React from "react";



function Card(props) {
  let { title, img, newsUrl,author, description, date,mode} = props;
    return (
      <div className={`pb-2 pt-2 pl-2 pr-2 mb-3 border-2 ml-3 mr-3 mt-3 ${props.mode ==='dark'?'bg-black':'bg-slate-50'}`}> 
      <img
          src={
            img  ? img || "https://cdn.pixabay.com/photo/2017/12/31/15/39/marine-3052592__340.jpg" : "https://cdn.pixabay.com/photo/2017/12/31/15/39/marine-3052592__340.jpg"
          }
          className="h-60 w-11/12" alt="Error while loading image"/>
      <div className={`pt-2 bg-${mode ==='dark'?'black':'#042743'}`}>
      <div className={`pr-2 pt-2 text-xl ${props.mode==='dark'?'text-white':'text-black'} font-medium leading-5`}>{title} ...</div>
      <div className={`pr-2 font-normal ${props.mode==='dark'?'text-white':'text-black'} pt-3 leading-5`}>{description} ...</div>
      <div className="bg-blue-600 w-22 mt-4 p-2 border-0 rounded text-white text-sm">
      <a href={newsUrl} target="_blank">Read More</a>
      </div>
      <hr className="mt-4"/>
      <div className={`text-sm p-5 ${props.mode==='dark'?'text-white':'text-black'} ${mode==='dark'?'bg-slate-700':'bg-slate-200'}`}>By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}</div>
      </div>
      </div>
    );
  }
  
  export default Card;