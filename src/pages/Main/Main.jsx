import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MainCard from './components/MainCard';

function Main() {
  const [hotels, setHotels] = useState([])
  useEffect(() => {
    function fatchDate() {
      axios.get(`http://localhost:8000/imagesAll`)
        .then((res) => setHotels(res.data))
        .catch((err) => console.log(err))
    }
    fatchDate()
  }, []);
  return (
    <div className=' grid grid-cols-4 px-20 py-5'>
{
  hotels.map((item)=>(
    <MainCard key={item.id} item={item}/>
  ))
}

    </div>
  )
}

export default Main
