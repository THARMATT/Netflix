import React from 'react'
import Cardslider from './Cardslider'
export default function Slider({movies}) {
  const getMoviesFromRange=(from,to)=>{
    return  movies.slice(from,to)
  }
  return (
    <div>
      <Cardslider title="Trending Now" data={getMoviesFromRange(0,10)} />
      <Cardslider title="Hollywood" data={getMoviesFromRange(10,20)}/>
      <Cardslider title="Action"data={getMoviesFromRange(20,30)}/>
      <Cardslider title="Fantasy"data={getMoviesFromRange(30,40)} />
      <Cardslider title="Drama"data={getMoviesFromRange(40,50)} />
      <Cardslider title="Thiller"data={getMoviesFromRange(50,60)} />
    
    </div>
  )
}
