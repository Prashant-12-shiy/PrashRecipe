import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import chickenNan from "../../../assets/Indian.jpg"
import momo from "../../../assets/momos.jpg"
import noodles from "../../../assets/noodles.jpg"
import pasta from "../../../assets/pasta.jpg"
import ramen from "../../../assets/ramen.jpg"
import "./Homepage.css"

export const Hero = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


  return (
    <div className='hero mt-24'>
        <div className='hero-content flex flex-col justify-center items-center gap-8'>
            <div className='border-2 border-solid border-black bg-[#F6FFF3] rounded-xl p-2 px-8 font-semibold text-[16px]'>
                <p className="dark:text-black">Taste the World, One Recipe at a Time.</p>
            </div>
            <div className='flex flex-col justify-center items-center text-center mt-4'>
                <h2 className='font-bold text-[64px]'>
                Discover Culinary Delights <br />from Around the Globe
                </h2>
                <p className='mt-6 font-medium'>Welcome to our recipe hub, where every dish tells a story. Dive into a world of culinary exploration, 
                from traditional classics to innovative creations, all meticulously curated to tantalize your taste buds and inspire your culinary adventures</p>
            </div>
            <Link to="/recipes">
             <button class="relative inline-flex items-center justify-center p-1 px-12 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-[#ff6633] dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 hover:text-gray-900 font-semibold rounded-md group-hover:bg-opacity-0">
                Explore More
            </span>
            </button>
            </Link>
           
        </div>

        <div className="hero-img flex gap-8 mt-24 h-600px items-center justify-center ">
            <div className={scrollPosition > 50 ? "upward" : "" }><img src={chickenNan} alt="" /></div>
            <div className={`upper-img mb-36 ${scrollPosition > 50 ? "downward" : "" }`} ><img src={momo} alt="" /></div>
            <div className={scrollPosition > 50 ? "upward" : "" }><img src={noodles} alt="" /></div>
            <div className={`upper-img mb-36 ${scrollPosition > 50 ? "downward" : "" }`}><img src={pasta} alt="" /></div>
            <div className={scrollPosition > 50 ? "upward" : "" }><img src={ramen} alt="" /></div>
        </div>
    </div>
  )
}
