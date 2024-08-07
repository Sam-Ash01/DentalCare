import React from 'react'
import './Style.css'
import { useNavigate } from 'react-router-dom';

function Buttondark() {
  const navigate = useNavigate();
  const handleClickLogin = () => {
    alert('navigate to log in page ')
    navigate('Community', { replace: true }); // navigate to /another-page
  };
  return (
    <div className=" md:flex  items-center">
        <button className=" bg-white  hover:text-white bgbluedenhover borderbluedent border-2 rounded-xl px-12 pr-12 blueden font-bold py-2  focus:outline-none focus:shadow-outline"
        onClick={handleClickLogin} >
            Sign up
        </button>
    </div>
  )
}

export default Buttondark
